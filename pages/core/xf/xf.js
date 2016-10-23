//xf.js
//获取应用实例
var app = getApp();
Page({
  data: {
    // xfData: [
    //   {
    //     "StuID": "2014211750",
    //     "StuName": "刘浩",
    //     "StuClass": "0491401",
    //     "MajorTuition": "2600",
    //     "SecMajorTuition": "0",
    //     "GradeTuition": "3680",
    //     "TotalTuition": "6280",
    //     "ApartmentPay": "1000",
    //     "Payed": 0.16,
    //     "FacultyName": "计算机科学与技术学院",
    //     "major": "计算机科学与技术",
    //     "NoPay": "7279.84",
    //     "GradeName": "2014",
    //     "Schoolyears": "2016-2017",
    //     "CollectingPay": "0",
    //     "TotalPay": 7280
    //   },
    //   {
    //     "StuID": "2014211750",
    //     "StuName": "刘浩",
    //     "StuClass": "0491401",
    //     "MajorTuition": "2600",
    //     "SecMajorTuition": "0",
    //     "GradeTuition": "3680",
    //     "TotalTuition": "6280",
    //     "ApartmentPay": "1000",
    //     "Payed": 0.16,
    //     "FacultyName": "计算机科学与技术学院",
    //     "major": "计算机科学与技术",
    //     "NoPay": "7279.84",
    //     "GradeName": "2014",
    //     "Schoolyears": "2016-2017",
    //     "CollectingPay": "0",
    //     "TotalPay": 7280
    //   },
    //   {
    //     "StuID": "2014211750",
    //     "StuName": "刘浩",
    //     "StuClass": "0491401",
    //     "MajorTuition": "2600",
    //     "SecMajorTuition": "0",
    //     "GradeTuition": "3680",
    //     "TotalTuition": "6280",
    //     "ApartmentPay": "1000",
    //     "Payed": 0.16,
    //     "FacultyName": "计算机科学与技术学院",
    //     "major": "计算机科学与技术",
    //     "NoPay": "7279.84",
    //     "GradeName": "2014",
    //     "Schoolyears": "2016-2017",
    //     "CollectingPay": "0",
    //     "TotalPay": 7280
    //   }
    // ]
  },

  // 页面首次渲染完成
  onReady: function(){
    
  },

  // 页面加载
  onLoad: function() {
    var _this = this;
    wx.request({
      url: "http://we.cqupt.edu.cn/api/get_jzsf.php?yktID=",
      data: {
        yktID: "1636792"
      },
      success: function(res) {
        console.log(res);
        _this.setData({
          xfData: res.data
        });
      }
    });
  }
});