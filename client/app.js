App({
  globalData: {
    logintype: 0,//0支付宝 1 微信
    authCode: ""
  },
  onLaunch(options) {
    //授权      
    this.onAuth();
    //初始化蓝牙
    this.initBluetooth();
    //禁用页面下拉
    my.setCanPullDown({
      canPullDown: false
    })
  },
  onShow(options) {
  },
  /**
   * 授权获取authCode
   */
  onAuth() {
    var self = this;
    my.getAuthCode({
      scopes: 'auth_base',
      success: (res) => {
        self.globalData.authCode = res.authCode;
      },
    });
  },
  /**
   * 初始化蓝牙
   */
  initBluetooth() {
    my.openBluetoothAdapter({
      autoClose: false,
      success: (res) => {
        if (!res.isSupportBLE) {
          my.alert({
            title: "当前设备不支持蓝牙"
          });
        }
      },
      fail: (res) => {
        if (!res.isSupportBLE) {
          my.alert({
            title: res.msg
          });
        }
        else {
          my.alert({
            title: res.errorMessage
          });
        }
      },
      complete: (res) => {
      }
    });
  },
  /**
   * 网络请求
   */
  request(options) {
    var self = this;
    options = options || {}
    const requestTask = my.request({
      url: options.url || '',
      data: options.data || {},
      method: options.method || 'POST',
      dataType: options.dataType || 'json',
      timeout: options.timeout || 30000,//超时时间，单位 ms，默认 30000
      success: (res) => {
        if (typeof options.success == 'function') {
          options.success(res);
        }
      },
      fail: (err) => {
        if (typeof options.fail == 'function') {
          options.fail(err);
        }
      }
    });
  }
});

