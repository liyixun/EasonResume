const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 获取指定时间（字符串）距离当前时间有多少个月
 */
const getIntervalMonth = DateStr => {
  if(DateStr) {
    let splitResult = DateStr.split('-');
    if(splitResult && splitResult.length === 3){
      let startDate = new Date();
      startDate.setFullYear(splitResult[0]);
      startDate.setMonth(parseInt(splitResult[1]));
      startDate.setDate(parseInt(splitResult[2]));
      let curDate = new Date();
      let startMonth = startDate.getMonth();
      let endMonth = curDate.getMonth();
      let intervalMonth = (curDate.getFullYear() * 12 + endMonth) - (startDate.getFullYear() * 12 + startMonth);
      return intervalMonth;
    }

  }
}

const copyToClipboard = data => {
  wx.setClipboardData({
    data: data,
    success: function (res) {
      showOperateToast('复制成功');
    }
  });
}

const showOperateToast = (title, icon, duration) => {
  wx.showToast({
    title: title||'成功',
    icon: icon||'success',
    duration: duration||1000
  })
}

module.exports = {
  formatTime: formatTime,
  getIntervalMonth: getIntervalMonth,
  copyToClipboard: copyToClipboard,
  showOperateToast: showOperateToast
}
