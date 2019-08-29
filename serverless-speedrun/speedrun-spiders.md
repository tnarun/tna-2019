# TNA × Speedrun 爬虫开发

可从 speedrun api 获取的数据资源：

## 以下资源目已通过爬虫采集

- games 游戏
- categories 游戏速通规则分类
  - variables 游戏变量（规则下的子选项）
- levels 游戏关卡
  - variables 游戏变量（关卡下的子选项）
- platforms 游戏平台
- runs 速通成绩
- series 游戏系列

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

## 爬虫清单

- speedrun-games-spider  
  负责抓取 games 数据；共 10 个爬虫，抓取下标范围为 0-20000；每个爬虫运行的时间间隔为 10 分钟；会以 embed 的形式同时抓取 levels,categories,moderators,gametypes,platforms,regions,genres,engines,developers,publishers,variables. 保存在同一 document 里；
  数量：10
  频率：10 分钟  

- speedrun-platforms-spider
  负责抓取 platfotms 数据；1 个爬虫；运行时间间隔为 24 小时（每天 0 点）；
  每次抓取时更新全部 platforms 记录数据（目前为 125 条）
  数量：1
  频率：24 小时

- speedrun-series-spider
  数量：1
  频率：15 分钟

- speedrun-sync-game-cover-to-oss
  数量：1
  频率：2 分钟
  有一定的带宽和内存占用

- speedrun-categories-levels-spider
  数量：18
  频率：1 分钟
  Timeout: 60
  MemorySize: 256

- speedrun-runs-spider
  数量：1 启用，1 停用
  频率：5 分钟
  Timeout: 60
  MemorySize: 256
