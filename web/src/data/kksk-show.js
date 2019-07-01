import d2016 from './d2016.png'
import re2remake from './re2remake.png'
import super_street_fighter_2_turbo from './super_street_fighter_2_turbo.png'
import Darksiders_3 from './Darksiders_3.png'

import na from './na.png'
import sekiro from './sekiro.png'
import Sword_Master from './Sword_Master.png'
import Contra_Hard_Corps from './Contra_Hard_Corps.png'
import deadcells from './deadcells.png'
import Celeste from './Celeste.png'

// 5月11日 Day1：

// 上午10:50 开场白

// 上午11:00-12:30
// 《DOOM》Any%(无重大邪道) - Elitenv/1小时40分
// 解说：伯爵

// 中午13:30-14:00
// “你行你上”Day1《生化危机2-重制版》
// 奖品：XBOXone白色精英手柄 1个

// 下午14:00-16:00（散场）

// 《生化危机2》里昂A标准 - 摸摸印 vs 佩奇/1小时10分
// 解说：喂狗组全员

// 《街霸2》最高难度通关 - 魔都龙/20分
// 解说：伯爵

// 《蔚蓝山》Any% - DJ/40分
// 解说：羽毛


// 5月12日 Day2：

// 上午10:50 开场白

// 上午11:00-12:30
// 《魂斗罗：铁血兵团》投降结局 - 艾尔文/20分
// 解说：文轩

// 《剑王》Any% - 影儿/15分 
// 解说：楼座

// 《死亡细胞》固定种子 - zilv/20分
// 解说：伯爵

// 《暗黑血统3》7大罪全击杀 - 安东尼/40分
// 解说：羽毛

// 中午13:30-14:00
// “你行你上”Day2《只狼》
// 奖品：《只狼》典藏版 1个

// 下午14:00-16:00（闭馆）

// 《只狼》修罗结局(1.04版无邪道) - 伯爵 vs 羽毛/45分
// 解说：楼座、文轩

// 《尼尔：机械纪元》A结局 - 楼座/1小时40分
// 解说：羽毛

const day1 = [
  // {
  //   // 上午10:50 开场白
  //   prologue: '开场白',
  //   start: '10:50', end: '11:00',
  // },
  {
    // 上午11:00-12:30
    // 《DOOM》Any%(无重大邪道) - Elitenv/1小时40分
    // 解说：伯爵
    runners: [ 'Elitenv' ],
    game: { en: 'DOOM', zh: '毁灭战士 2016' } ,
    category: { zh: '无重大邪道', en: 'Legacy%'},
    period: { hours: 1, minutes: 40 },
    start: '11:00', end: '12:40',
    abbr: 'd2016', c: 'Legacy',
    talker: '伯爵'
  },
  {
    // 中午13:30-14:00
    // “你行你上”Day1《生化危机2-重制版》
    // 奖品：XBOXone白色精英手柄 1个
    special: '你行你上！YCYU',
    game: { zh: '生化危机 2 重制版', en: 'Resident Evil 2 (2019)' },
    prize: 'XboxOne 白色精英手柄 × 1',
    start: '13:30', end: '14:00',
    abbr: 're2remake',
    period: { hours: 1, minutes: 40 },
  },
  {
    // 《生化危机2》里昂A标准 - 摸摸印 vs 佩奇/1小时10分
    // 解说：喂狗组全员
    runners: [ '摸摸印', 'Pegaiur' ],
    game: { zh: '生化危机 2 重制版', en: 'Resident Evil 2 (2019)' },
    category: { zh: '里昂 A 标准', en: 'Leon Standard' },
    period: { hours: 1, minutes: 10 },
    start: '14:00', end: '15:10',
    abbr: 're2remake',
    talker: '喂狗组'
  },
  {
    // 《街霸2》最高难度通关 - 魔都龙/20分
    // 解说：伯爵
    runners: [ '魔都龙' ],
    game: { en: 'Super Street Fighter II Turbo', zh: '街霸 2' },
    category: { zh: '最高难度通关', en: 'Arcade Mode (Hardest)' },
    period: { minutes: 20 },
    start: '15:10', end: '15:30',
    abbr: 'super_street_fighter_2_turbo', c: 'Arcade_Mode_Hardest',
    talker: '伯爵'
  },
  {
    // 《蔚蓝山》Any% - DJ/40分
    // 解说：羽毛
    runners: [ 'DJ' ],
    game: { en: 'Celeste', zh: '蔚蓝山' } ,
    category: { zh: '通关', en: 'Any%' },
    period: { minutes: 40 },
    start: '15:30', end: '16:10',
    abbr: 'Celeste', c: 'Any',
    talker: '羽毛'
  }
]

const day2 = [
  // {
  //   // 上午10:50 开场白
  //   prologue: '开场白',
  //   start: '10:50', end: '11:00',
  // },
  {
    // 《魂斗罗：铁血兵团》投降结局 - 艾尔文/20分
    // 解说：文轩
    runners: [ '艾尔文' ],
    game: { en: 'Contra Hard Corps', zh: '魂斗罗：铁血兵团' } ,
    category: { zh: '投降结局', en: 'Surrender' },
    period: { minutes: 20 },
    start: '11:00', end: '11:20',
    abbr: 'Contra_Hard_Corps',
    talker: '手冢文轩'
  },
  {
    // 《剑王》Any% - 影儿/15分 
    // 解说：楼座
    runners: [ '影儿' ],
    game: { en: 'Sword Master', zh: '剑王' } ,
    category: { zh: '通关', en: 'Any%' },
    period: { minutes: 15 },
    start: '11:20', end: '11:35',
    abbr: 'Sword_Master',
    talker: '楼座'
  },
  {
    // 《死亡细胞》固定种子 - zilv/20分
    // 解说：伯爵
    runners: [ 'zilv' ],
    game: { en: 'Dead Cells', zh: '死亡细胞' } ,
    category: { zh: '固定种子', en: 'Seeded'},
    period: { minutes: 20 },
    start: '11:35', end: '11:55',
    abbr: 'deadcells',
    talker: '伯爵'
  },
  {
    // 《暗黑血统3》7大罪全击杀 - 安东尼/40分
    // 解说：羽毛
    runners: [ '安东尼' ],
    game: { en: 'Darksiders 3', zh: '暗黑血统 3' },
    category: { zh: '七大罪全击杀', en: 'All Sins'},
    period: { minutes: 40 },
    start: '11:55', end: '12:35',
    abbr: 'Darksiders_3', c:'All_Sins_PC',
    talker: '羽毛'
  },
  {
    // “你行你上”Day2《只狼》
    // 奖品：《只狼》典藏版 1个
    special: '你行你上！YCYU',
    game: { en: 'Sekiro: Shadows Die Twice', zh: '只狼：影逝二度' },
    prize: '《只狼》典藏版 × 1',
    start: '13:10', end: '13:40',
    abbr: 'sekiro',
    period: { hours: 1, minutes: 40 },
  },
  {
    // 《只狼》修罗结局(1.04版无邪道) - 伯爵 vs 羽毛/45分
    // 解说：楼座、文轩
    runners: [ '伯爵',  '羽毛' ],
    game: { en: 'Sekiro: Shadows Die Twice', zh: '只狼：影逝二度' },
    category: { zh: '修罗无邪道', en: 'Shura Glitchless' },
    period: { minutes: 45 },
    start: '13:40', end: '14:25',
    abbr: 'sekiro', c: 'Shura_Ending',
    talker: '楼座、手冢文轩'
  },

  {
    // 《尼尔：机械纪元》A结局 - 楼座/1小时40分
    // 解说：羽毛
    runners: [ '楼座' ],
    game: { en: 'NieR: Automata', zh: '尼尔：机械纪元' } ,
    category: { zh: 'A 结局', en: '[A] Any%'},
    period: { hours: 1, minutes: 40 },
    start: '14:25', end: '16:05',
    abbr: 'na', c: 'A',
    talker: '羽毛'
  },
]

const images = { 
  d2016, re2remake, super_street_fighter_2_turbo, Darksiders_3,
  na, sekiro, Sword_Master, Contra_Hard_Corps, deadcells, Celeste
}

export { 
  day1, 
  day2,
  images
}