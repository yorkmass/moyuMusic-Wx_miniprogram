// miniprogram/pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:["nihao","wohao","shehao","hehao"],
    person: [
      {
        id: 1,
        name: "yaoyi",
      },
      {
        id: 2,
        name: "bj",
      },
      {
        id: 3,
        name: "yy",
      },
      {
        id: 5,
        name: "szz",
      }
    ]

  },
  sort(){
    const length=this.data.arr.length
    for(let i=0;i<length;i++){
      const x = Math.floor(Math.random()*length)
      const y = Math.floor(Math.random()*length)
      const temp=this.data.arr[x]
      this.data.arr[x]=this.data.arr[y]
      this.data.arr[y]=temp
    }
    this.setData({
      arr:this.data.arr
    })
  },
  sortperson(){
    const length = this.data.person.length
    for (let i = 0; i < length; i++) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.person[x]
      this.data.person[x] = this.data.person[y]
      this.data.person[y] = temp
    }
    this.setData({
      person: this.data.person
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   

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