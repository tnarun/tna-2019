const layouts = [
  {
    name: '活动封面', base: 'cover'
  },
  {
    name: '通用基础单人 4:3 布局', base: 'single-4-3'
  },
  {
    name: '通用基础单人 16:9 布局', base: 'single-16-9'
  }
]

export default class LiveLayoutStore {
  loadLayouts () {
    this.layouts = layouts
  }
}