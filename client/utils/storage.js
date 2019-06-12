/**
 * ===========================
 * 本地数据缓存
 * ===========================
 * author:gmw
 * date:2019-06-12
 * ===========================
 */

module.exports = {
  /**
   * 设置缓存数据
   */
  set(key, data) {
    my.setStorageSync({
      key: key,
      data: data
    });
  },
  /**
   * 获取缓存数据
   */
  get(key) {
    let res = my.getStorageSync({ key: key });
    return res.data;
  },
  /**
   * 清除缓存
   */
  remove(key) {
    my.removeStorageSync({
      key: key, // 缓存数据的key
    });
  }
}