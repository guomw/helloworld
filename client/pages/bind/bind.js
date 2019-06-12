import api from '../../utils/ApiRequest.js'
const app = getApp()
Page({
  data: {
    mobileInputValue: "",
    verifyCodeInputValue: "",
    timer: "", //计数器
    countDownNum: 60, //初始计数
    btnVerifyCodeText: "获取验证码" //
  },
  onLoad() {
  },
  bindKeyInput(e) {
    var inputValue = e.detail.value;
    var inputType = e.target.dataset.type;
    if (inputType == "mobile") {
      this.setData({
        mobileInputValue: inputValue,
      });
    }
    else if (inputType == "verifyCode") {
      this.setData({
        verifyCodeInputValue: inputValue,
      });
    }
  },
  onSendVerifyCode() {
    if (this.data.countDownNum == 60 && this.data.mobileInputValue.length == 11) {
      var data = {
        token: app.globalData.token,
        phone: this.data.mobileInputValue
      }
      my.showLoading({
        content:"获取验证码..."
      });
      api.request(api.config.sendVerifyCode, data, (res) => {
        my.hideLoading();
        //0成功，其他失败
        if (res.state == 0) {
          this.countDown();
        }
        else {
          my.alert({
            title: "验证码获取失败"
          });
        }
      })
    }
  },
  /**
   * 下一步
   */
  onStep() {
    if (this.data.mobileInputValue.length != 11) {
      my.alert({
        title: '请输入预定房间时的手机号码'
      });
      return;
    }
    if (this.data.verifyCodeInputValue.length <= 0) {
      my.alert({
        title: '请输入短信验证码'
      });
      return;
    }

    my.redirectTo({
      url: '/pages/card/card', // 需要跳转的应用内非 tabBar 的目标页面路径 ,路径后可以带参数。参数规则如下：路径与参数之间使用
      success: (res) => {
        
      },
    });
  },
  countDown: function() {
    let that = this;
    let countDownNum = that.data.countDownNum;//获取倒计时初始值
    //如果将定时器设置在外面，那么用户就看不到countDownNum的数值动态变化，所以要把定时器存进data里面
    that.setData({
      btnVerifyCodeText: `${countDownNum}秒后重发`,
      timer: setInterval(function() {//这里把setInterval赋值给变量名为timer的变量
        //每隔一秒countDownNum就减一，实现同步
        countDownNum--;
        //然后把countDownNum存进data，好让用户知道时间在倒计着
        that.setData({
          btnVerifyCodeText: `${countDownNum}秒后重发`,
          countDownNum: countDownNum
        })
        //在倒计时还未到0时，这中间可以做其他的事情，按项目需求来
        if (countDownNum == 0) {
          that.setData({
            btnVerifyCodeText: `获取验证码`,
            countDownNum: 60
          })
          //这里特别要注意，计时器是始终一直在走的，如果你的时间为0，那么就要关掉定时器！不然相当耗性能
          //因为timer是存在data里面的，所以在关掉时，也要在data里取出后再关闭
          clearInterval(that.data.timer);
          //关闭定时器之后，可作其他处理codes go here
        }
      }, 1000)
    })
  }
});