//userinfo.js
//获取应用实例
const app = getApp()
const sayHi = require("../../utils/sayhi.js")
Page({
  data: {
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  }
})
