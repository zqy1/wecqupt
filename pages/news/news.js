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
    ]
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
