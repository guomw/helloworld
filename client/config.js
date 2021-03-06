/**
 * 小程序配置文件
 */
var host = "https://www.xx.com";

var config={
  host,
  /**
   * 登录接口地址
   */
  login:`${host}/login`,
  /**
   * 根据手机号查询可用房卡数量
   */
  findLockedCardCount:`${host}/findlockedcardCount`,
  /**
   * 根据手机号查询可用房卡列表
   */
  findLockedCardList:`${host}/findLockedCardList`,
  /**
   * 发送验证码
   */
  sendVerifyCode:`${host}/sendVerifyCode`,
  /**
   * 校验验证码绑定手机
   */
  checkVerifyCode:`${host}/checkVerifyCode`,
  /**
   * 获取用户信息
   */
  findUserInfo:`${host}/userinfo`
}

module.exports=config