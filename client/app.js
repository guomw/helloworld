import config from './config.js'
App({
  globalData: {
    logintype: 0,//0支付宝 1 微信
    authCode: ""
  },
  onLaunch(options) {
    //授权      
    this.onAuth();
    //初始化蓝牙
    //this.initBluetooth();
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
        self.login();
      },
    });
  },
  login() {
    var that = this;
    my.showLoading({
      content: "登录中..."
    });
    var options = that.getOptions(config.login, {
      authcode: that.globalData.authcode,
      logintype: 0
    }, (data) => {
      my.hideLoading();
      //0成功，1没有手机号，2失败
      if (data.state == 0 || data.state == 1) {
        that.globalData.token = data.data.token;
      }
      //当没有手机时，跳转手机绑定页面
      if (data.state == 1 || data.state == 5000) {
        my.redirectTo({
          url: '../bind/bind'
        })
      }
      if (data.state == 0) {
        my.redirectTo({
          url: '../card/card'
        })
      }
    });
    that.request(options);
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
  },
  getOptions(url, data, callback) {
    var opptions = {
      url: url,
      data: data,
      success: function(res) {
        if (res.status == 200) {
          if (typeof callback == 'function') {
            callback(res.data)
          }
        }
      },
      fail: function(err) {
        var title = "网络繁忙，请稍侯再试...";
        switch (err.error) {
          case 11:
            title = "无权跨域，请联系管理员！";
            break;
          case 12:
            title = "网络出错，请检测当前网络";
            break;
          case 13:
            title = "请求超时，请稍侯再试...";
            break;
          case 14:
            title = "解码失败，请联系管理员";
            break;
          case 19:
            title = "HTTP错误，请联系管理员";
            break;
          case 20:
            title = "请求已被停止/服务端限流";
            break;
        }
        var data = {
          state: 5000,
          message: title,
          data: null
        }
        if (typeof callback == 'function') {
          callback(data)
        }
      }
    }
    return opptions;
  }

});
