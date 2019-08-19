# TNA × Speedrun 爬虫开发

可从 speedrun api 获取的数据资源：

## 以下资源目已通过爬虫采集

- categories 游戏速通规则分类
- games 游戏
- levels 游戏关卡
- platforms 游戏平台
- runs 速通成绩
- series 游戏系列
- variables 游戏变量（规则下的子选项）

## 以下资源计划通过爬虫采集

- leaderboards 游戏速通榜单
- users sr 网站用户

## 以下资源目前暂不采集

- developers 游戏开发者/开发工作室
- engines 游戏引擎
- gametypes 非官方游戏类型（ROM Hack, Fangame, Modification etc.）
- genres 游戏类型（Action, JRPG, Rogue-like etc.）
- guests sr 网站访客
- notifications 通知信息（需身份验证）
- profile 用户档案（需身份验证）
- publishers 游戏发行商
- regions 游戏分区

## 以下内容对改进爬虫效率会有帮助

- embedding 查询时包含嵌入内容
  <https://github.com/speedruncomorg/api/blob/master/version1/embedding.md>
- pagination 分页查询
  <https://github.com/speedruncomorg/api/blob/master/version1/pagination.md>
