App({
  globalData: {
    isAuthed: false,
    userInfo: {
      nickName: "",
      avatar: "",
      mobile: ""
    }
  },
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
    this.onAuth();
    this.initBluetooth();
    //禁用页面下拉
    my.setCanPullDown({
      canPullDown: false
    })
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },

  onAuth() {
    var self = this;
    my.getAuthCode({
      scopes: 'auth_user',
      success: (res) => {
        self.getAuthUserInfo();
      },
    });
  },
  /**
   * 获取授权用户信息
   */
  getAuthUserInfo() {
    var self = this;
    my.getAuthUserInfo({
      success: (userInfo) => {
        self.globalData.userInfo.nickName = userInfo.nickName;
        self.globalData.userInfo.avatar = userInfo.avatar;
      }
    });
  },
  initBluetooth() {
    my.openBluetoothAdapter({
      autoClose:false,
      success: (res) => {

      },
      fail: (res) => {

        
      },
      complete: (res) => {
      }
    });
  }
});
 
