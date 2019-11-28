// miniprogram/pages/playlist/playlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid:'',
    swiperImgUrls:[{
      url:'https://cn.bing.com/th?id=OIP.J7C76dlRHqMy_l_TGNIb0QHaEK&pid=Api&rs=1'
    },
    {
      url: 'https://cn.bing.com/th?id=OIP.cp5Jujcc4CL4Wh-4jangqwHaEK&pid=Api&rs=1'
    },
    {
      url: 'https://cn.bing.com/th?id=OIP.o0M1u4Znrnj2MQf0m9A9TAHaEK&pid=Api&rs=1'
    }],
    playlist:[
      {
        playCount:200000000,
        name:'yaoyi is very handsome and smart',
        picUrl:'https://cn.bing.com/th?id=OIP.Qz9nEqNOQ73HWNBIF5FDTgHaHa&pid=Api&rs=1'
      },
      {
        playCount: 2555008400,
        name: 'she is clever but she don not love her',
        picUrl: 'https://cn.bing.com/th?id=OIP.TYmT9lvbezQ9hspnOYaIGQAAAA&pid=Api&rs=1'
      },
      {
        playCount: 23244300,
        name: 'everyone has her dream',
        picUrl: 'https://cn.bing.com/th?id=OIP.zhvykjGi-XOzifCtwcsU2wAAAA&pid=Api&rs=1'
      },
      {
        playCount: 121225400,
        name: 'you say say with me say that yorkmass is very wonderful',
        picUrl: 'https://cn.bing.com/th?id=OIP.EilG3DsOAJL2mcBff-E-8wAAAA&pid=Api&rs=1'
      },
      {
        playCount: 145250400,
        name: 'what a pity you see see yourself',
        picUrl: 'https://cn.bing.com/th?id=OIP.CpJBaT7j9_GJKsJ5cXb67gAAAA&pid=Api&rs=1'
      }
      ,
      {
        playCount: 50400,
        name: 'what a pity you see see yourself',
        picUrl: 'http://img.wowoqq.com/allimg/180129/1-1P12Z62159-51.jpg'
      }
    ]

  },
  jump(){
    wx.navigateTo({
      url: '/pages/demo/demo',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name:'login'
    }).then((res)=>{
      this.setData({
        openid:res.result.openid
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})