/**
 * ===================================
 * api接口类
 * desc：该文件主要负责接口的请求 
 * ===================================
 * author:gmw
 * data:2019-06-12
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
      my.alert({
        title: '网络繁忙，请稍侯再试...'
      });
    }
  })
}

module.exports = {
  /**
   * 登录
   */
  login: apiRequest(config.login, data, callback),
  /**
   * 获取房卡数量
   */
  findLockedCardCount: apiRequest(config.findLockedCardCount, data, callback),
  /**
   * 获取房卡列表
   */
  findLockedCardList: apiRequest(config.findLockedCardList, data, callback),
  /**
   * 发送验证码
   */
  sendVerifyCode: apiRequest(config.sendVerifyCode, data, callback),
  /**
   * 验证验证码绑定用户
   */
  checkVerifyCode: apiRequest(config.checkVerifyCode, data, callback),
  /**
   * 获取用户信息
   */
  findUserInfo: apiRequest(config.findUserInfo, data, callback)
}