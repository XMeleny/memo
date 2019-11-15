// miniprogram/pages/addRemind/addRemind.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid: '',
    title: '',
    content: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (app.globalData.openid) {
      this.setData({
        openid: app.globalData.openid
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

	funInputTitle:function(e){
		this.setData({
			title: e.detail.value
		})
	},
	funInputContent:function(e){
		this.setData({
			content: e.detail.value
		})
	},


  funAddRemind: function() {
		// console.log(this.data.title,this.data.content)

    const db = wx.cloud.database()
    db.collection('reminds').add({
    	data: {
				//插入时会自动插入_id和_openid
				title:this.data.title,
				content:this.data.content
    	},
    	success: res => {
    		// 在返回结果中会包含新创建的记录的 _id
    		wx.showToast({
    			title: '新增记录成功',
    		})
    		console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
    	},
    	fail: err => {
    		wx.showToast({
    			icon: 'none',
    			title: '新增记录失败'
    		})
    		console.error('[数据库] [新增记录] 失败：', err)
    	},
			complete:{
				//jump to checkRemind
			}
    })

		wx.navigateTo({
			url:"../checkRemind/checkRemind"
		})
  }
})