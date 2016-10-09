//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    core: [
      { id: 'kb', name: '课表查询' },
      { id: 'cj', name: '成绩查询' },
      { id: 'ks', name: '考试安排' },
      { id: 'kjs', name: '空教室' },
      { id: 'xs', name: '学生查询' },
      { id: 'ykt', name: '一卡通' },
      { id: 'jy', name: '借阅信息' },
      { id: 'xf', name: '学费信息' },
      { id: 'sdf', name: '水电费' },
      { id: 'bx', name: '物业报修' }
    ],
    list: [
      { id: 'kb', name: '今日课表' }
    ]
  }
})
