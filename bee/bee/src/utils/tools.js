let dateId = new Date().getTime()
const tools = {
  getId() {
    console.log('tools-getId', dateId)
    return dateId++
  },
  merge,
  clone,
  getKeys
}
// 对象浅继承
const shallowMerge = (target, ...sources) => {
  return Object.assign(target, ...sources)
}
const deepMerge = (target, source) => {
  const proto = Object.getPrototypeOf(source)
  return Object.assign(target, Object.create(proto), source)
}
// 对象继承
function merge(deep, target, ...sources) {
  if (deep) {
    for (var item of sources) {
      deepMerge(target, item)
    }
    return target
  } else {
    return shallowMerge(target, ...sources)
  }
}
function clone(origin) {
  return Object.assign({}, origin)
}
function getKeys(obj) {
  const back = []
  for (const key in obj) {
    back.push(key)
  }
  return back
}
export default tools
