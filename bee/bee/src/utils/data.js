const data = {
  changeObjKey,
  changeListKey,
  classify,
  objToArray,
  getRate
}
// 对象的key值转换
function changeObjKey(data, opt) {
  const obj = {}
  for (const key in data) {
    obj[opt[key] || key] = data[key]
  }
  return obj
}
// json类型的数组中每个对象的key值转换
function changeListKey(data, opt) {
  const back = []
  for (const item of data) {
    back.push(changeObjKey(item, opt))
  }
  return back
}
// json数据根据key进行分类
function classify(data = [], key = 'seriesName') {
  const obj = {}
  for (const item of data) {
    obj[item[key]] = obj[item[key]] || []
    obj[item[key]].push(item)
  }
  return obj
}
// 对象转换成数组
function objToArray(obj) {

}
// 获取一个长度占总长度的多少
function getRate(num = 0, total = 0) {
  let rate = 0
  if (total !== 0) {
    rate = Math.floor(num / total * 10000) / 100
    rate = rate > 100 ? 100 : rate
    rate = rate < 0.01 ? 0.01 : rate
  }
  return rate
}
export default data
