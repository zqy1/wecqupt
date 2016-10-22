//index.js
//获取应用实例
var app = getApp();
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
      { id: 'sdf', name: '电费查询' },
      { id: 'bx', name: '物业报修' }
    ],
    card: {
      'kb': {
        show: true,
        data: {
          'list': [
            { what: '计算机新技术', when: '1 - 2 节', where: '5201' },
            { what: '专业综合实验', when: '7 - 8 节', where: '信科楼S331' }
          ]
        }
      },
      'ykt': {
        show: true, //一卡通数据有大量延迟，主页卡片暂不予展示。
        data: {
          'balance': '250.50',
          'cost': {
            value: ['7.50', '7.50'],
            total: '15.00'
          }
        }
      },
      'jy': {
        show: true,
        data: {
          'list': [
            { 'book_name': '从你的全世界路过', 'pickup_time': '16-04-02', 'return_time': '16-06-02', 'timing': 61 },
            { 'book_name': '一次又一次再一次的从你的全...', 'pickup_time': '16-04-02', 'return_time': '16-06-02', 'timing': 61 }
          ]
        }
      },
      'sdf': {
        show: true
      }
    }
  }
});