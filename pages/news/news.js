//news.js
//获取应用实例
var app = getApp()
Page({
  data: {
    filter: {
      list: [
        { 'type': 'all', name: '全部' },
        { 'type': 'jw', name: '教务公告' },
        { 'type': 'oa', name: 'OA公告' },
        { 'type': 'hy', name: '会议通知' },
        { 'type': 'jz', name: '学术讲座' },
        { 'type': 'new', name: '综合新闻' }
      ],
      'active': 'all'
    },
    data: {
      list: [
        { 'type': 'jw', 'id': 1, 'title': '2016-2017学年第一学期特殊选课审核结果公示', 'time': '2016年09月29日' },
        { 'type': 'oa', 'id': 2, 'title': '2016-2017学年第一学期特殊选课审核结果公示', 'time': '2016年09月29日' },
        { 'type': 'oa', 'id': 3, 'title': '2016-2017学年第一学期特殊选课审核结果公示', 'time': '2016年09月29日' },
        { 'type': 'jw', 'id': 4, 'title': '2016-2017学年第一学期特殊选课审核结果公示', 'time': '2016年09月29日' },
        { 'type': 'hy', 'id': 5, 'title': '2016-2017学年第一学期特殊选课审核结果公示', 'time': '2016年09月29日' },
        { 'type': 'new', 'id': 6, 'title': '2016-2017学年第一学期特殊选课审核结果公示', 'time': '2016年09月29日' },
        { 'type': 'jz', 'id': 7, 'title': '2016-2017学年第一学期特殊选课审核结果公示', 'time': '2016年09月29日' }
      ]
    }
  },
  onReady: function(){

  },
  changeFilter: function(e){
    this.setData({
      'filter.active': e.target.id
    });
  }
})
