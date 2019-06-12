import api from '../../utils/ApiRequest.js'
const app = getApp()
Page({
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    // my.showLoading({
    //   content:"登录中..."      
    // });
    // api.request(api.config.login, {
    //   authcode: app.globalData.authcode,
    //   logintype: 0
    // }, (data) => {
    //   my.hideLoading();
    //   //0成功，1没有手机号，2失败
    //   if (data.state == 0 || data.state == 1) {
    //     app.globalData.token = data.data.token;        
    //   }
    //   //当没有手机时，跳转手机绑定页面
    //   if (data.state == 1||data.state == 5000) {
    //     my.redirectTo({
    //       url: '../bind/bind'
    //     })
    //   }
      
    //   if(data.state==0){
    //     my.redirectTo({
    //       url: '../card/card'
    //     })
    //   }
    // })
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
  },
  /**
   * 点击扫码
   */
  onTabScan() {
    my.scan({
      type: 'qr',
      success: (res) => {
        my.alert({
          title: "扫描成功",
          content: res.code
        });
      },
    });
  }
});
