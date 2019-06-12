const app = getApp();
Page({
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
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
