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

var personalPrize = [{
  title: '2017年度赫基国际优秀项目奖',
  remark: 'TPOS'
},{
  title: '“Hello C”c/c++程序编程比赛优胜奖',
  remark: ''
},{
  title: '校三等奖学金',
  remark: '大二、大三'
},{
  title: 'CET-4'
}];

var workingExperience = [{
    startTime: '2016.9.19',
    endTime: '今',
    company: '赫基国际',
    companyLink: 'https://baike.baidu.com/item/赫基国际集团/4591849?fr=aladdin',
    department: 'Five plus信息技术部',
    job: '资讯技术工程师（前端）',
    desc: '负责集团和事业部内部系统开发，主要负责前端功能模块开发，代码重构，交互优化，实现UI设计师给出的设计稿，配合产品设计师优化系统功能，并参与项 目上线发布前的测试及上线后的运维工作；完成前端组长分配的任务，并能独立负责核心模块的开发工作，为实习生制定成长计划，培养前端新生力量。'
}];

// 定义数据出口
module.exports = {
  personalSimpleInfo: personalSimpleInfo,
  personalPhoneContactInfo: personalPhoneContactInfo,
  personalPrize: personalPrize,
  workingExperience: workingExperience
}
