const fetch = require('node-fetch')
const cheerio = require('cheerio')
const moment = require('moment')

module.exports = async ({ id }) => {
  let url = `https://www.vgtime.com/game/${ id }.jhtml`
  const res = await fetch(url)
  const html = await res.text()
  const $ = cheerio.load(html)
  const data = parse(id, $)
  console.log(JSON.stringify(data, ' ', 2))
  return data
}

const parse = (id, $) => {
  // 游戏名
  let names = parseName($)
  if (!names.cn) {
    return null
  }

  // 游戏封面
  let cover = parseCover($)

  // 发行平台
  let platforms = parsePlatforms($)

  // 各平台发行日期
  let platDates = parsePlatDates($)

  // 游戏语言
  let languages = parseLanguages($)

  // 游戏基因（类型）
  let gameGenes = parseGameGenes($)

  // 开发商
  let developers = parseDevelopers($)

  // 发行商
  let publishers = parsePublishers($)

  // 用户标签
  let tags = parseTags($)

  // 游戏截图
  let gameFocus = parseGameFocus($)

  // 编辑的话
  let descriptions = parseDescriptions($)

  return {
    id,
    names, cover, platforms, platDates,
    languages, gameGenes, developers, publishers,
    tags, gameFocus, descriptions
  }
}

const parseName = ($) => {
  let cn = $('.game_box.main:nth-child(1) h2').text()
  let en = $('.game_box.main:nth-child(1) p').text()
  return { cn, en }
}

const parseCover = ($) => {
  let img = $('.game_info_box img')
  let url = img.data('url')
  let source = url.split('?')[0]
  return { url, source }
}

const parsePlatforms = ($) => {
  return $('.platform_detail').map((idx, el) => {
    let x = $(el)
    let name = x.text()
    let hasCN = x.data('cn')
    let pid = x.data('pid')
    return { name, hasCN, pid }
  }).get()
}

const parsePlatDates = ($) => {
  return $('.plat_date_detail').map((idx, el) => {
    let x = $(el)
    let pid = x.data('pid')

    let _gSpan = x.find('span:nth-child(1)')
    let _cnSpan = x.find('span:nth-child(2)')

    let gDate = _parseDate(_gSpan)
    let cnDate = _parseDate(_cnSpan)

    return { pid, gDate, cnDate }
  }).get()
}

const _parseDate = (d) => {
  if (!d.length) {
    return null
  }

  let tid = d.data('tid')
  let dateStr = d.text()
  let _match = dateStr.match(/[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}/)
  let time = _match ? moment(_match[0]) : null

  return { tid, dateStr, time }
}

const parseLanguages = ($) => {
  let re = []
  $('.descri_box p').each((idx, el) => {
    let x = $(el)
    if (x.text() === '语言') {
      x.parent().find('a, span').each((j, elj) => {
        let name = $(elj).text()
        re.push(name)
      })
    }
  })
  return re
}

const parseGameGenes = ($) => {
  return $('.descri_box .game_gene span').map((idx, el) => {
    let x = $(el)
    return x.text()
  }).get()
}

const parseDevelopers = ($) => {
  let re = []
  $('.descri_box p').each((idx, el) => {
    let x = $(el)
    if (x.text() === '开发商') {
      x.parent().find('a, span').each((j, elj) => {
        let link = $(elj).attr('href')
        let name = $(elj).text()
        re.push({ link, name })
      })
    }
  })
  return re
}

const parsePublishers = ($) => {
  let re = []
  $('.descri_box p').each((idx, el) => {
    let x = $(el)
    if (x.text() === '发行商') {
      x.parent().find('a, span').each((j, elj) => {
        let link = $(elj).attr('href')
        let name = $(elj).text()
        re.push({ link, name })
      })
    }
  })
  return re
}

const parseTags = ($) => {
  return $('.game_box.right .game_gene span a').map((idx, el) => {
    let x = $(el).parent()
    let tid = x.data('tid')
    let name = x.text()
    return { tid, name }
  }).get()
}

const parseGameFocus = ($) => {
  return $('.game_focus_list li img').map((idx, el) => {
    let x = $(el)
    let source = x.data('source')
    let url = x.attr('src')
    return { url, source }
  }).get()
}

const parseDescriptions = ($) => {
  return $('.game_description').map((idx, el) => {
    let x = $(el)
    return x.text()
  }).get()
}