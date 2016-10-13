//news.js
//获取应用实例
var app = getApp()
Page({
  data: {
    filter: [
      { id: 'all', name: '全部' },
      { id: 'jw', name: '教务公告' },
      { id: 'oa', name: 'OA公告' },
      { id: 'hy', name: '会议通知' },
      { id: 'jz', name: '学术讲座' },
      { id: 'new', name: '综合新闻' }
    ],
    data: {
      list: [
        { 'type': 'jw', 'title': '2016-2017学年第一学期特殊选课审核结果公示', 'time': '2016年09月29日' },
        { 'type': 'oa', 'title': '2016-2017学年第一学期特殊选课审核结果公示', 'time': '2016年09月29日' },
        { 'type': 'oa', 'title': '2016-2017学年第一学期特殊选课审核结果公示', 'time': '2016年09月29日' },
        { 'type': 'jw', 'title': '2016-2017学年第一学期特殊选课审核结果公示', 'time': '2016年09月29日' },
        { 'type': 'hy', 'title': '2016-2017学年第一学期特殊选课审核结果公示', 'time': '2016年09月29日' },
        { 'type': 'new', 'title': '2016-2017学年第一学期特殊选课审核结果公示', 'time': '2016年09月29日' },
        { 'type': 'jz', 'title': '2016-2017学年第一学期特殊选课审核结果公示', 'time': '2016年09月29日' }
      ]
    }
  },
  onReady: function(){
    this.setData({
      'filter_active': 'all'
    });
  },
  changeFilter: function(e){
    this.setData({
      'filter_active': e.target.id
    });
  }
})
