import Mock from 'mockjs'

const city = ['合肥市', '芜湖市', '黄山市']
export default {
  getTotal: config => {
    console.log('server-getTotal', config)
    return Mock.mock('@int(1000, 15000)')
  },
  getPies: config => {
    const charts = []
    for (let i = 0; i < 3; i++) {
      const cityItem = city[i]
      charts.push(Mock.mock({
        name: cityItem,
        value: '@int(1000, 15000)'
      }))
    }
    return charts
  },
  getCharts: config => {
    const charts = []
    for (let i = 0; i < 3; i++) {
      const cityItem = city[i]
      for (let n = 1; n < 33; n++) {
        charts.push(Mock.mock({
          'id|+1': '1000',
          'seriesName': cityItem,
          name: n > 9 ? n : '0' + n,
          value: '@int(1000, 15000)',
          rate: '@int(0, 100)'
        }))
      }
    }
    return charts
  }
}
