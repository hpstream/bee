import { req } from '@/utils/common'
export function getOption() {
  return req({
    type: 'get',
    url: 'codes'
  })
}
const selects = {
  getOption
}
export default selects
