//index.js
//获取应用实例
const app = getApp()
const sayHi = require("../../utils/sayhi.js")
Page({
  data: {
    parkingLot:50,
    // latitude: 30.3140390000,
    // longitude: 120.3434580000,
    latitude: 23.099994,
    longitude: 113.324520,
    polyline: [{
      points: [{
        latitude: 23.099994,
        longitude: 113.324520
      }, {
        latitude: 23.112600,
        longitude: 113.324520,
      }],
      color: "#ff0000",
      width: 3,
      dottedLine: true,
      arrowLine: true
    }],
    circles: [{
      latitude: 23.099994,
      longitude: 113.324520,
      color: "#ff0000",
      fillColor: "#00000010",
      strokeWidth: 0,
      radius: 120
    }, {
      latitude: 23.112600,
      longitude: 113.324520,
      color: "#ff0000",
      fillColor: "#00000010",
      strokeWidth: 0,
      radius: 100
    }],
    markers: [{
      iconPath: "/image/location.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50,
      anchor: { x: .5, y: 0.8 },
      title:'创意图',
      callout: { content:'创意图地标建筑'}
    }, {
      iconPath: "/image/location.png",
      id: 0,
      latitude: 23.112600,
      longitude: 113.324520,
      width: 50,
      height: 50,
      anchor: { x: .5, y: 0.8 }
    }]
  },
  onLoad:function(){
    wx.showTabBar({
    animation:true //是否需要过渡动画
  });
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  }
})
