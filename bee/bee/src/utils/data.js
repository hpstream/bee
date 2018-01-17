const data = {
  changeObjKey,
  changeListKey,
  classify,
  objToArray,
  getRate,
  listToTree
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
/**
* List结构转换为树形Json
* @param {Array} data 需要处理的List
* @param {Object} options 输出JSON key值配置项，默认{idKey:'permissionId', parentKey:'parentId', childrenKey: 'children'}
* @return {Object}
**/
function listToTree(data, options) {
  options = options || {}
  const ID_KEY = options.idKey || 'permissionId'
  const PARENT_KEY = options.parentKey || 'parentId'
  const CHILDREN_KEY = options.childrenKey || 'children'
  const TITLE_KEY = options.titleKey || 'permissionName'
  const tree = []
  const childrenOf = {}
  let item, id, parentId

  for (let i = 0, length = data.length; i < length; i++) {
    item = data[i]
    id = item[ID_KEY]
    item.title = item[TITLE_KEY]
    parentId = item[PARENT_KEY] || 0
    // every item may have children
    childrenOf[id] = childrenOf[id] || []
    // init its children
    item[CHILDREN_KEY] = childrenOf[id]
    if (parentId !== 0) {
      // init its parent's children
      childrenOf[parentId] = childrenOf[parentId] || []
      // push it into its parent's children
      childrenOf[parentId].push(item)
      // if (item[CHILDREN_KEY].length === 0) {
      //   delete item[CHILDREN_KEY]
      // }
    } else {
      tree.push(item)
    }
  }

  function deleteJsonKey(treeData, TARGET = 'children') {
    for (let i = 0; i < treeData.length; i++) {
      if (treeData[i][TARGET].length === 0) {
        delete treeData[i][TARGET]
      } else {
        deleteJsonKey(treeData[i][TARGET])
      }
    }
    return treeData
  }

  return deleteJsonKey(tree)
}

export default data
