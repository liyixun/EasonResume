var personalSimpleInfo = [{
  key: '学校',
  value: '广东工业大学'
}, {
  key: '专业',
  value: '计算机学院网络工程'
}, {
  key: '学位',
  value: '大学本科'
}, {
  key: '工作年限',
  value: '2017-07-01'
}, {
  key: '籍贯',
  value: '广东汕头'
}, {
  key: '住址',
  value: '广州天河员村'
}, {
  key: '电话',
  value: '18826233574',
  clickable: true
}, {
  key: '邮箱',
  value: '934427310@qq.com',
  clickable: true
}, {
  key: '微信',
  value: 'wxid_wyy3dnqm5lxe41',
  clickable: true
},{
  key: 'GitHub',
  value: 'https://github.com/liyixun',
  clickable:  true
}]

// 存储到手机的信息
var personalPhoneContactInfo = {
  nickName: 'Eason Li',
  lastName: '李',
  firstName: '奕逊',
  mobilePhoneNumber: '18826233574',
  weChatNumber: 'wxid_wyy3dnqm5lxe41'
};

// 定义数据出口
module.exports = {
  personalSimpleInfo: personalSimpleInfo,
  personalPhoneContactInfo: personalPhoneContactInfo
}
