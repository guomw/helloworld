/**
 * ===================================
 * api接口类
 * desc：该文件主要负责接口的请求 
 * ===================================
 * author:gmw
 * date:2019-06-12
 * ===================================
 */
import config from '../config.js'
const app = getApp();

var apiRequest = function(url, data, callback) {
  app.request({
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
      console.log(err);
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
  })
}

module.exports = {
  config: config,
  request: apiRequest
}