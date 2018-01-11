import Mock from 'mockjs'
import serverAPI from './server'

// 服务端相关
Mock.mock(/\/api\/echarts/, 'get', serverAPI.getCharts)
Mock.mock(/\/api\/echart-pie/, 'get', serverAPI.getPies)

export default Mock
