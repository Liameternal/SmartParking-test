//user.js
Page({
  data: {
    userEmail: '',
    userPassword: '',
    correctInfo: false
  },
  onLoad:function(){
    wx.hideTabBar({
    animation:true //是否需要过渡动画
  })
  },
  bindEmail: function(e){
    this.setData({
      userEmail: e.detail.value
    })
  },
  bindPassword: function(e){
    this.setData({
      userPassword: e.detail.value
    })
  },
  login: function(){
    wx.showToast({
      title : '登陆中',
      icon : 'loading',
      duration : 5000
    });

    if(this.data.userEmail == '123' && this.data.userPassword == '123456'){
      wx.hideToast();
      wx.showModal({
        title: '登录成功',
        success(res){

        }
      });
      wx.switchTab({
        url: '../index/index',
        success (res){
          console.log('call wx.switchTab')
        }
      })
    }else{
      wx.hideToast();
      console.log(this.data.userEmail);
      console.log(this.data.userPassword);
      wx.showModal({
        title: '登录失败',
        content: '请检查您填写的信息！',
        success(res){
          //
        }
      })
    }
  }
})