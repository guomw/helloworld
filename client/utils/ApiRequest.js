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
  app.request(app.getParameter(url,data,callback));
}

module.exports = {
  config: config,
  request: apiRequest
}