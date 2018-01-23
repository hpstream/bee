import { req } from '@/utils/common.js'
const getData = function() {
  return req({
    type: 'get',
    url: 'codes'
  })
}
const simple = {
  getData
}
export default simple
