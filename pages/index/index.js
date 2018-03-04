//index.js
//获取应用实例
const app = getApp()

var personalInfo = require('../../data/personal-info.js');
var util = require('../../utils/util.js');

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    personalSimpleInfo: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  clickSimpleInfoItem: function (e) {
    var key = e.target.id;
    var result = null;
    this.data.personalSimpleInfo.forEach(item => {
      if (item.key === key) {
        result = item;
      }
    });
    if (result) {
      switch (result.key) {
        case '电话':
          this.handleClickPhoneNumber(result.value);
          break;
        default:
          util.copyToClipboard(result.value);
          break;
      }
    }
    
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    personalInfo.personalSimpleInfo.forEach(item => {
      if(item.key === '工作年限') {
        let intervalMonth = util.getIntervalMonth(item.value);
        let workTimeResult = '';
        if (parseInt(intervalMonth / 12) > 0) {
          workTimeResult += parseInt(intervalMonth / 12) + '年';
        }
        workTimeResult += intervalMonth%12 + '月';
        item.value = workTimeResult;
      }
    });
    this.setData({
      personalSimpleInfo: personalInfo.personalSimpleInfo
    })
  },
  handleClickPhoneNumber: function(phoneNumber) {
    wx.showActionSheet({
      itemList: ['拨号联系', '保存联系人', '复制电话'],
      success: function (res) {
        if (!res.cancel) {
          switch (res.tapIndex) {
            case 0:
              wx.makePhoneCall({
                phoneNumber: phoneNumber,
              });
              break;
            case 1:
              let object = personalInfo.personalPhoneContactInfo;
              object.success = function() {
                util.showOperateToast('保存成功');
              }
              object.fail = function() {
                util.showOperateToast('保存失败', 'fail');
              }
              wx.addPhoneContact(object);
              break;
            case 2:
              util.copyToClipboard(phoneNumber);
              break;  
          }
        }
      }
    });
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
