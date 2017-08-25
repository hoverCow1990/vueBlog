// 将时间戳补零 eg: 1 => 01
const transToZeroTime = number => {
  return ('0' + number).slice(-2)
}

const filtersUnit = {
  // 转换时间 1497625549376 => 2017-06-16 08:00:21
  parseTime (time, isNeedTime = true) {
    if (!time) return '未知时间'
    time = new Date(Number(time))
    if (isNeedTime) {
      return time.toLocaleString()
        .replace(/(\d{4})\/(\d{1,2})\/(\d{1,2}).+(\d{1,2}):(\d{1,2}):(\d{1,2})/g, ($0, $1, $2, $3, $4, $5, $6) => {
          return $1 + '-' + transToZeroTime($2) + '-' + transToZeroTime($3) + ' ' + transToZeroTime($4) + ':' + transToZeroTime($5) + ':' + transToZeroTime($6)
        }).replace('GMT+8', '')
    } else {
      return time.toLocaleDateString()
        .replace(/(\d{4})\/(\d{1,2})\/(\d{1,2})/g, ($0, $1, $2, $3) => {
          return $1 + '-' + transToZeroTime($2) + '-' + transToZeroTime($3)
        })
    }
  },
  // 前位补零
  buildZero (str, num = 3) {
    str = typeof str === String ? str : '' + str
    return str.padStart(num, '0')
  },
  // 获取称号
  transAlias (lv) {
    console.log(lv)
    switch (lv) {
      case 1:
        return '牛哥的基佬学徒'
      case 2:
        return '牛哥的机智小跟班'
      case 3:
        return '牛哥的忠实粉丝'
      case 4:
        return '牛哥的入室大弟子'
      case 5:
        return '貌美如花的牛哥小妾'
      case 6:
        return '齐牛大圣'
    }
  }
}

export default filtersUnit
