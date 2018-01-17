import { req } from '@/utils/common.js'
import axios from 'axios'
const MOCK_BASE_URL = 'https://www.easy-mock.com/mock/5a55b664de90b06840dda803/fd-vue'
export function getData() {
  return req({
    type: 'get',
    url: 'codes'
  })
}
export function getPermissionMenu() {
  return axios.get(`${MOCK_BASE_URL}/getPermission`)
}
export function getPageConfig() {
  return axios.get(`${MOCK_BASE_URL}/getPageConfig`)
}
