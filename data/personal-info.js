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

var personalSkillList = [
  '了解小程序及企业微信应用开发,有移动端企业微信应用开发经验',
  '了解gulp、webpack前端构建工具的使用',
  '了解less react TypeScript angular4的使用',
  '熟悉HTML5 CSS3 javascript',
  '熟悉AngularJS Vue2 Node.js ES6/7的使用',
  '熟练掌握git命令及gitlab上的版本管理操作',
  '熟练使用mac开发环境，熟练掌握科学上网的方法',
];

var companyProjectList = [
  {
    projectName: 'TPOS',
    projectLink: '',
    projectBelongCompany: '赫基国际',
    startTime: '2016.9.19',
    endTime: '今',
    technologyStack: 'AngularJS、Node.js、Express、MongoDB、Gulp、Inspinia Admin',
    projectDesc: '门店终端POS收银系统',
    responsibilityDesc: '负责系统首页店长罗盘数据报表展示，收银模块促销优惠券使用交互开发，公共组件抽取整合（订单详情组件、地址选择组件、促销优惠券详情组件等），门店库存盘点功能三次重构，门店销售目标模块开发，对接总部EHR系统，集团CRM、OMS系统。'
  },
  {
    projectName: 'TPOS_MANGE',
    projectLink: '',
    projectBelongCompany: '赫基国际',
    startTime: '2016.9.19',
    endTime: '今',
    technologyStack: 'AngularJS、Node.js、Express、MongoDB、Gulp、Inspinia Admin',
    projectDesc: '门店终端POS后台管理系统',
    responsibilityDesc: '负责系统销售目标模块开发（月标年标、KPI、销售排行等），公共组件抽取重构（订单详情组件、假分页自定义filter、商品范围选择器等），促销功能多次开发重构（促销与券叠加设置、促销商品范围、促销提案复制、促销商品假分页、原价入机功能开发、导入商品校验优化），报表及库存数据导出优化（增加CSV格式导出、node端生成文件、使用流生成、队列限制导出数据个数、迁移至TASK服务、对接大数据平台）。'
  },
  {
    projectName: 'FP_MOBILE',
    projectLink: '',
    projectBelongCompany: '赫基国际',
    startTime: '2017.9.28',
    endTime: '2018.1.10',
    technologyStack: 'vue2、vuex、vue-router、webpack、ES6/7、less、vux',
    projectDesc: 'FP店铺手持端',
    responsibilityDesc: '负责系统商品模块开发（月标年标、KPI、销售排行等）'
  },
  {
    projectName: 'DRP',
    projectLink: '',
    projectBelongCompany: '赫基国际',
    startTime: '2018.2.1',
    endTime: '今',
    technologyStack: 'AngularJS、Node.js、Express、MongoDB、Gulp、Inspinia Admin',
    projectDesc: '联营客户智能分销系统',
    responsibilityDesc: '负责整个系统功能开发，任务分配管理，样式页面重构，功能组件开发'
  },
];

var personalProjectList = [
  {
    projectName: 'EMS',
    projectLink: '',
    startTime: '2017.07.18',
    endTime: '今',
    technologyStack: 'Vue2.0、 koa、 elementUI',
    projectDesc: '个人后台管理系统'
  },
  {
    projectName: 'React_Admin',
    projectLink: '',
    startTime: '2017.10.20',
    endTime: '今',
    technologyStack: 'react、react-router、redux、webpack、ES6/7、less、ant-design',
    projectDesc: '个人后台管理系统'
  },
];

// 定义数据出口
module.exports = {
  personalSimpleInfo: personalSimpleInfo,
  personalPhoneContactInfo: personalPhoneContactInfo,
  personalPrize: personalPrize,
  workingExperience: workingExperience,
  personalSkillList: personalSkillList,
  companyProjectList: companyProjectList,
  personalProjectList: personalProjectList
}
