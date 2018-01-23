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
// 对象深度继承
const deepMerge = (target, source) => {
  for (const key in source) {
    if (typeof (target[key]) === 'object') {
      deepMerge(target[key], source[key])
    } else {
      target[key] = source[key]
    }
  }
  return target
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
