const mongoose = require('mongoose')

const Game = new mongoose.Schema({
  // vgtime ID
  vgtimeId: { type: Number, unique: true, required: true },

  // name 游戏名
  name: { type: String, required: true },

  // vgtime 游戏元数据
  // https://www.vgtime.com/game/10767.jhtml 解析网页得到
  vgtimeData: { type: Object, required: true },

  // 数据更新时间
  updatedAt: { type: Date, required: true }
})

module.exports = mongoose.model('Game', Game)

/*
vgtimeData: {
  "id": 10767,
  "names": {
    "cn": "只狼 影逝二度",
    "en": "SEKIRO：SHADOWS DIE TWICE"
  },
  "cover": {
    "url": "https://img01.vgtime.com/game/cover/2018/06/12/180612002903376.jpg?x-oss-process=image/resize,m_lfit,w_300",
    "source": "https://img01.vgtime.com/game/cover/2018/06/12/180612002903376.jpg"
  },
  "platforms": [
    {
      "name": "PS4",
      "hasCN": true,
      "pid": 10047
    },
    {
      "name": "XB1",
      "hasCN": true,
      "pid": 10040
    },
    {
      "name": "PC",
      "hasCN": true,
      "pid": 10028
    }
  ],
  "platDates": [
    {
      "pid": 10047,
      "gDate": {
        "tid": 0,
        "dateStr": "最早发售 2019-03-22",
        "time": "2019-03-22T00:00:00.000Z"
      },
      "cnDate": {
        "tid": 0,
        "dateStr": "中文发售 2019-03-22",
        "time": "2019-03-22T00:00:00.000Z"
      }
    },
    {
      "pid": 10040,
      "gDate": {
        "tid": 12891,
        "dateStr": "最早发售 2019-03-22",
        "time": "2019-03-22T00:00:00.000Z"
      },
      "cnDate": {
        "tid": 12892,
        "dateStr": "中文发售 2019-03-22",
        "time": "2019-03-22T00:00:00.000Z"
      }
    },
    {
      "pid": 10028,
      "gDate": {
        "tid": 12893,
        "dateStr": "最早发售 2019-03-22",
        "time": "2019-03-22T00:00:00.000Z"
      },
      "cnDate": {
        "tid": 12894,
        "dateStr": "中文发售 2019-03-22",
        "time": "2019-03-22T00:00:00.000Z"
      }
    },
    {
      "pid": 0,
      "gDate": {
        "tid": 0,
        "dateStr": "最早发售 2019-03-22",
        "time": "2019-03-22T00:00:00.000Z"
      },
      "cnDate": {
        "tid": 0,
        "dateStr": "中文发售 2019-03-22",
        "time": "2019-03-22T00:00:00.000Z"
      }
    }
  ],
  "languages": [
    "简中"
  ],
  "gameGenes": [
    "动作",
    "角色扮演",
    "生存",
    "冒险",
    "第三人称"
  ],
  "developers": [
    {
      "link": "https://www.fromsoftware.jp/ww/",
      "name": "FromSoftware"
    }
  ],
  "publishers": [
    {
      "name": "Activision"
    },
    {
      "link": "https://www.fromsoftware.jp/ww/",
      "name": "FromSoftware"
    },
    {
      "link": "https://www.cubejoy.com",
      "name": "方块游戏"
    }
  ],
  "tags": [
    {
      "name": "动作"
    },
    {
      "name": "角色扮演"
    },
    {
      "name": "生存"
    },
    {
      "name": "冒险"
    },
    {
      "name": "第三人称"
    },
    {
      "tid": 1010,
      "name": "动作"
    },
    {
      "tid": 1013,
      "name": "角色扮演"
    },
    {
      "tid": 1131,
      "name": "生存"
    },
    {
      "tid": 1138,
      "name": "冒险"
    },
    {
      "tid": 1140,
      "name": "第三人称"
    },
    {
      "tid": 1145,
      "name": "3D"
    },
    {
      "tid": 10684,
      "name": "神作"
    },
    {
      "tid": 11279,
      "name": "步行模拟"
    },
    {
      "tid": 11703,
      "name": "休闲"
    },
    {
      "tid": 11979,
      "name": "受苦"
    },
    {
      "tid": 12188,
      "name": "爽"
    },
    {
      "tid": 13409,
      "name": "休闲娱乐"
    },
    {
      "tid": 13569,
      "name": "恋爱养成"
    },
    {
      "tid": 14299,
      "name": "垃圾"
    },
    {
      "tid": 15854,
      "name": "和式受苦模拟器"
    },
    {
      "tid": 15956,
      "name": "我tm死爆"
    },
    {
      "tid": 15958,
      "name": "虐"
    },
    {
      "tid": 16132,
      "name": "平成最后的爱恋"
    },
    {
      "tid": 16235,
      "name": "平成的一万种死法"
    },
    {
      "tid": 16240,
      "name": "死法模拟器"
    },
    {
      "tid": 16241,
      "name": "来自宫崎英高的爱意"
    },
    {
      "tid": 16263,
      "name": "跳跳模拟器"
    },
    {
      "tid": 16264,
      "name": "中日合拍的东游记"
    },
    {
      "tid": 16269,
      "name": "死"
    },
    {
      "tid": 16297,
      "name": "平成最后的动作游戏"
    },
    {
      "tid": 16302,
      "name": "菜"
    },
    {
      "tid": 16303,
      "name": "全世界都知道死字写法"
    },
    {
      "tid": 16304,
      "name": "肌肉记忆"
    },
    {
      "tid": 16305,
      "name": "战国蜘蛛侠"
    },
    {
      "tid": 16306,
      "name": "宫崎老师的语文课"
    },
    {
      "tid": 16311,
      "name": "天诛精神续作"
    },
    {
      "tid": 16313,
      "name": "我在平成摸鱼"
    },
    {
      "tid": 16314,
      "name": "打铁模拟器"
    },
    {
      "tid": 16315,
      "name": "我选择死亡"
    },
    {
      "tid": 16317,
      "name": "日本旅游指南"
    },
    {
      "tid": 16318,
      "name": "IGN9.5"
    },
    {
      "tid": 16321,
      "name": "性感将军，在线双杀"
    },
    {
      "tid": 16330,
      "name": "打铁"
    },
    {
      "tid": 16331,
      "name": "下班降压"
    },
    {
      "tid": 16341,
      "name": "抖M"
    },
    {
      "tid": 16347,
      "name": "边哭边玩系列"
    },
    {
      "tid": 16381,
      "name": "学写死字"
    },
    {
      "tid": 16382,
      "name": "ACT高考"
    },
    {
      "tid": 16394,
      "name": "一直死一直爽"
    },
    {
      "tid": 16396,
      "name": "割草无双"
    },
    {
      "tid": 16397,
      "name": "武士之耻苇名屑一郎"
    },
    {
      "tid": 16398,
      "name": "宫老师教我识汉字"
    },
    {
      "tid": 16406,
      "name": "回合制恋爱养成"
    },
    {
      "tid": 16411,
      "name": "一个铁匠的自我修养"
    },
    {
      "tid": 16419,
      "name": "音乐类游戏"
    },
    {
      "tid": 16436,
      "name": "节奏天国"
    },
    {
      "tid": 16437,
      "name": "真实act"
    },
    {
      "tid": 16438,
      "name": "舔暴皇子"
    },
    {
      "tid": 16443,
      "name": "苇名一日游"
    },
    {
      "tid": 16462,
      "name": "宠物养成"
    },
    {
      "tid": 16465,
      "name": "掏枪的剑圣"
    },
    {
      "tid": 16466,
      "name": "选错就会死的文字冒险"
    },
    {
      "tid": 16539,
      "name": "节奏音游"
    },
    {
      "tid": 16543,
      "name": "磨炼耐性和意志力"
    },
    {
      "tid": 16603,
      "name": "犹豫就会败北"
    },
    {
      "tid": 16610,
      "name": "危"
    },
    {
      "tid": 16658,
      "name": "平田庄防火协会"
    },
    {
      "tid": 16745,
      "name": "游戏玩人"
    },
    {
      "tid": 16911,
      "name": "了解死字怎么写"
    },
    {
      "tid": 17043,
      "name": "宫崎英高跌落神坛"
    },
    {
      "tid": 17197,
      "name": "动作冒险"
    },
    {
      "tid": 17367,
      "name": "游戏逼死人系列"
    },
    {
      "tid": 17402,
      "name": "父慈子孝"
    },
    {
      "tid": 18047,
      "name": "PEGI:18+"
    },
    {
      "tid": 18114,
      "name": "CERO:17+"
    },
    {
      "tid": 18116,
      "name": "ESRB:17+"
    }
  ],
  "gameFocus": [
    {
      "url": "https://img01.vgtime.com/game/cover/2019/03/07/190307011530261.jpg?x-oss-process=image/resize,m_pad,color_000000,w_104,h_59",
      "source": "https://img01.vgtime.com/game/cover/2019/03/07/190307011530261.jpg"
    },
    {
      "url": "https://img01.vgtime.com/game/cover/2019/03/07/190307011529790.jpg?x-oss-process=image/resize,m_pad,color_000000,w_104,h_59",
      "source": "https://img01.vgtime.com/game/cover/2019/03/07/190307011529790.jpg"
    },
    {
      "url": "https://img01.vgtime.com/game/cover/2019/03/07/190307011529229.jpg?x-oss-process=image/resize,m_pad,color_000000,w_104,h_59",
      "source": "https://img01.vgtime.com/game/cover/2019/03/07/190307011529229.jpg"
    },
    {
      "url": "https://img01.vgtime.com/game/cover/2019/03/07/190307011529401.jpg?x-oss-process=image/resize,m_pad,color_000000,w_104,h_59",
      "source": "https://img01.vgtime.com/game/cover/2019/03/07/190307011529401.jpg"
    },
    {
      "url": "https://img01.vgtime.com/game/cover/2019/03/07/1903070115274.jpg?x-oss-process=image/resize,m_pad,color_000000,w_104,h_59",
      "source": "https://img01.vgtime.com/game/cover/2019/03/07/1903070115274.jpg"
    },
    {
      "url": "https://img01.vgtime.com/game/cover/2019/03/07/190307011550773.jpg?x-oss-process=image/resize,m_pad,color_000000,w_104,h_59",
      "source": "https://img01.vgtime.com/game/cover/2019/03/07/190307011550773.jpg"
    },
    {
      "url": "https://img01.vgtime.com/game/cover/2019/03/07/190307011548342.jpg?x-oss-process=image/resize,m_pad,color_000000,w_104,h_59",
      "source": "https://img01.vgtime.com/game/cover/2019/03/07/190307011548342.jpg"
    },
    {
      "url": "https://img01.vgtime.com/game/cover/2019/03/07/190307011530700.jpg?x-oss-process=image/resize,m_pad,color_000000,w_104,h_59",
      "source": "https://img01.vgtime.com/game/cover/2019/03/07/190307011530700.jpg"
    },
    {
      "url": "https://img01.vgtime.com/game/cover/2019/03/07/190307011549936.jpg?x-oss-process=image/resize,m_pad,color_000000,w_104,h_59",
      "source": "https://img01.vgtime.com/game/cover/2019/03/07/190307011549936.jpg"
    },
    {
      "url": "https://static.vgtime.com/image/tou.gif?x-oss-process=image/resize,m_pad,color_000000,w_104,h_59",
      "source": "https://static.vgtime.com/image/tou.gif"
    },
    {
      "url": "https://img01.vgtime.com/game/cover/2018/06/11/180611194208798.jpg?x-oss-process=image/resize,m_pad,color_000000,w_104,h_59",
      "source": "https://img01.vgtime.com/game/cover/2018/06/11/180611194208798.jpg"
    },
    {
      "url": "https://img01.vgtime.com/game/cover/2018/06/11/180611194207158.jpg?x-oss-process=image/resize,m_pad,color_000000,w_104,h_59",
      "source": "https://img01.vgtime.com/game/cover/2018/06/11/180611194207158.jpg"
    },
    {
      "url": "https://img01.vgtime.com/game/cover/2018/06/11/180611194208980.jpg?x-oss-process=image/resize,m_pad,color_000000,w_104,h_59",
      "source": "https://img01.vgtime.com/game/cover/2018/06/11/180611194208980.jpg"
    },
    {
      "url": "https://img01.vgtime.com/game/cover/2018/06/11/180611194208741.jpg?x-oss-process=image/resize,m_pad,color_000000,w_104,h_59",
      "source": "https://img01.vgtime.com/game/cover/2018/06/11/180611194208741.jpg"
    },
    {
      "url": "https://img01.vgtime.com/game/cover/2018/06/11/180611194207845.jpg?x-oss-process=image/resize,m_pad,color_000000,w_104,h_59",
      "source": "https://img01.vgtime.com/game/cover/2018/06/11/180611194207845.jpg"
    },
    {
      "url": "https://img01.vgtime.com/game/cover/2018/06/11/180611194207653.jpg?x-oss-process=image/resize,m_pad,color_000000,w_104,h_59",
      "source": "https://img01.vgtime.com/game/cover/2018/06/11/180611194207653.jpg"
    },
    {
      "url": "https://img01.vgtime.com/game/cover/2018/06/11/18061119420965.jpg?x-oss-process=image/resize,m_pad,color_000000,w_104,h_59",
      "source": "https://img01.vgtime.com/game/cover/2018/06/11/18061119420965.jpg"
    },
    {
      "url": "https://img01.vgtime.com/game/cover/2018/06/11/180611194217762.jpg?x-oss-process=image/resize,m_pad,color_000000,w_104,h_59",
      "source": "https://img01.vgtime.com/game/cover/2018/06/11/180611194217762.jpg"
    },
    {
      "url": "https://img01.vgtime.com/game/cover/2018/06/11/180611194220222.jpg?x-oss-process=image/resize,m_pad,color_000000,w_104,h_59",
      "source": "https://img01.vgtime.com/game/cover/2018/06/11/180611194220222.jpg"
    },
    {
      "url": "https://img01.vgtime.com/game/cover/2018/06/11/180611194221301.jpg?x-oss-process=image/resize,m_pad,color_000000,w_104,h_59",
      "source": "https://img01.vgtime.com/game/cover/2018/06/11/180611194221301.jpg"
    },
    {
      "url": "https://img01.vgtime.com/game/cover/2018/06/11/180611194225260.jpg?x-oss-process=image/resize,m_pad,color_000000,w_104,h_59",
      "source": "https://img01.vgtime.com/game/cover/2018/06/11/180611194225260.jpg"
    },
    {
      "url": "https://img01.vgtime.com/game/cover/2018/06/11/180611194226659.jpg?x-oss-process=image/resize,m_pad,color_000000,w_104,h_59",
      "source": "https://img01.vgtime.com/game/cover/2018/06/11/180611194226659.jpg"
    },
    {
      "url": "https://img01.vgtime.com/game/cover/2018/06/11/180611194227908.jpg?x-oss-process=image/resize,m_pad,color_000000,w_104,h_59",
      "source": "https://img01.vgtime.com/game/cover/2018/06/11/180611194227908.jpg"
    },
    {
      "url": "https://img01.vgtime.com/game/cover/2018/06/11/180611194231416.jpg?x-oss-process=image/resize,m_pad,color_000000,w_104,h_59",
      "source": "https://img01.vgtime.com/game/cover/2018/06/11/180611194231416.jpg"
    }
  ],
  "descriptions": [
    "天诛+老贼，再度点燃受苦之魂。",
    "一款日本战国题材的动作冒险游戏，玩家将操作一名独臂忍者，在权力斗争中守护一位被各方孤立、甚至被囚禁的皇子。在游戏玩法上，本作最引人注目的就是主角的左臂义肢了，他失去了左手，但这个义肢比原本的左手更厉害，堪称技巧百变，能变化出武器、勾索、用作护盾的伞等等装备道具。与之对应的，主角独特的“忍杀”不讲究招式，只求一击瞬杀。依靠自身武艺和独特的义肢，忍者将保护皇子杀出一条血路。他所面对的敌人很强很强，但忍者还有一种特殊能力——“SHADOWS DIE TWICE”。"
  ]
}
*/