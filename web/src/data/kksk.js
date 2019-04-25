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

const day1 = [
  {
    // 《DOOM》无重大邪道 - Elitenv/1小时40分
    runners: [ 'Elitenv' ],
    game: { en: 'DOOM', zh: '毁灭战士 2016' } ,
    category: { zh: '无重大邪道', en: 'Legacy%'},
    period: { hours: 1, minutes: 40 },
    start: '11:00', end: '12:40',
    abbr: 'd2016', c: 'Legacy',
  },
  {
    // “你行你上”Day1《生化危机2-重制版》
    // 奖品：XBOXone白色精英手柄 1个
    special: '你行你上！YCYU',
    game: { zh: '生化危机 2 重制版', en: 'Resident Evil 2 (2019)' },
    prize: 'Xbox One 白色精英手柄 × 1',
    start: '13:30', end: '14:00',
    abbr: 're2remake'
  },
  {
    // 《生化危机2》里昂A标准 - 摸摸印 vs 佩奇/1小时10分
    runners: [ '摸摸印', '佩奇' ],
    game: { zh: '生化危机 2 重制版', en: 'Resident Evil 2 (2019)' },
    category: { zh: '里昂 A 标准', en: 'Leon Standard' },
    period: { hours: 1, minutes: 10 },
    start: '14:00', end: '15:10',
    abbr: 're2remake'
  },
  {
    // 《街霸2》最高难度通关 - 魔都龙/20分
    runners: [ '魔都龙' ],
    game: { en: 'Super Street Fighter II Turbo', zh: '街霸 2' },
    category: { zh: '最高难度通关', en: 'Arcade Mode (Hardest)' },
    period: { minutes: 20 },
    start: '15:10', end: '15:30',
    abbr: 'super_street_fighter_2_turbo', c: 'Arcade_Mode_Hardest'
  },
  {
    // 《暗黑血统3》7大罪全击杀 - 安东尼/40分
    runners: [ '安东尼' ],
    game: { en: '暗黑血统3', zh: '暗黑血统3' },
    category: { zh: '七大罪全击杀', en: 'All Sins'},
    period: { minutes: 40 },
    start: '15:30', end: '16:10',
    abbr: 'Darksiders_3', c:'All_Sins_PC'
  }
]

const day2 = [
  {
    // 《尼尔：机械纪元》A结局 - 楼座/1小时40分
    runners: [ '楼座' ],
    game: { en: 'NieR: Automata', zh: '尼尔：机械纪元' } ,
    category: { zh: 'A 结局', en: '[A] Any%'},
    period: { hours: 1, minutes: 40 },
    start: '11:00', end: '12:40',
    abbr: 'na', c: 'A'
  },
  {
    // “你行你上”Day2《只狼》
    // 奖品：《只狼》典藏版 1个
    special: '你行你上！YCYU',
    game: { en: 'Sekiro: Shadows Die Twice', zh: '只狼：影逝二度' },
    prize: '《只狼》典藏版 × 1',
    start: '13:30', end: '14:00',
    abbr: 'sekiro'
  },
  {
    // 《只狼》修罗（无空中游泳）- ？？？vs 羽毛/40分
    runners: [ '待定',  '羽毛' ],
    game: { en: 'Sekiro: Shadows Die Twice', zh: '只狼：影逝二度' },
    category: { zh: '修罗结局 - 无空中游泳', en: 'Shura Ending - No Airswim' },
    period: { minutes: 40 },
    start: '14:00', end: '14:40',
    abbr: 'sekiro', c: 'Shura_Ending'
  },
  {
    // 《剑王》Any% - 影儿/15分
    runners: [ '影儿' ],
    game: { en: 'Sword Master', zh: '剑王' } ,
    category: { zh: '通关', en: 'Any%' },
    period: { minutes: 15 },
    start: '14:40', end: '15:55',
    abbr: 'Sword_Master'
  },
  {
    // 《魂斗罗：铁血兵团》投降结局 - 艾尔文/20分
    runners: [ '艾尔文' ],
    game: { en: '魂斗罗：铁血兵团', zh: '魂斗罗：铁血兵团' } ,
    category: { zh: '投降结局', en: 'Surrender' },
    period: { minutes: 20 },
    start: '15:55', end: '16:15',
    abbr: 'Contra_Hard_Corps'
  },
  {
    // 《死亡细胞》固定种子 - zilv/20分
    runners: [ 'zilv' ],
    game: { en: 'Dead Cells', zh: '死亡细胞' } ,
    category: { zh: '固定种子', en: 'Seeded'},
    period: { minutes: 20 },
    start: '16:15', end: '16:35',
    abbr: 'deadcells'
  },
  {
    // 《蔚蓝山》Any% - DJ/40分
    runners: [ 'DJ' ],
    game: { en: 'Celeste', zh: '蔚蓝山' } ,
    category: { zh: '通关', en: 'Any%'},
    period: { minutes: 40 },
    start: '16:35', end: '17:15',
    abbr: 'Celeste', c: 'Any'
  }
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