import tools from './tools'
import data from './data'
const textStyle = {
  color: '#5c6685',
  fontFamily: 'Microsoft YaHei',
  fontSize: '14'
}
const color_bar = ['#879AFF', '#8A6192', '#FF736F', '#F2C500', '#355B68', '#00B9AB', '#87D4EC', '#F09E5E', '#A7689A']
const color_line = ['#879AFF', '#8A6192', '#FF736F', '#F2C500', '#355B68', '#00B9AB', '#87D4EC', '#F09E5E', '#A7689A']
const color_pie = ['#879AFF', '#8A6192', '#FF736F', '#F2C500', '#355B68', '#00B9AB', '#87D4EC', '#F09E5E', '#A7689A']
const title = {
  text: '',
  top: '5',
  left: '10',
  textStyle: {
    fontSize: '16',
    color: '#d7d7da'
  }
}
const backgroundColor = '#fff'
const legend = {
  data: [],
  top: '40',
  textStyle: {
    fontSize: '14',
    color: '#d7d7da',
    align: 'right'
  }
}
const grid = {
  containLabel: true,
  left: '40',
  top: '80',
  bottom: '30',
  right: '40'
}
const axisTick = {
  show: false
}
const splitLine = {
  show: false
}
const axisLine = {
  textStyle: {
    color: '#2b303d'
  }
}
const axisLabel = {
  textStyle: {
    color: '#5c6685'
  },
  formatter: function(value) {
    let back = value
    if (value && value.length > 5) {
      back = value.substring(0, 5) + '...'
    }
    return back
  }
}
const xAxis = {
  type: 'category',
  data: [],
  axisTick,
  splitLine,
  axisLine,
  axisLabel,
  rotate: '30'
}
const yAxis = {
  type: 'value',
  splitLine,
  axisLabel,
  name: ''
}
const commonOpt = {
  textStyle,
  title,
  legend,
  backgroundColor
}
const series_bar = [{
  type: 'bar',
  maxWidth: '30',
  data: []
}]
const series_line = [{
  type: 'line',
  name: '',
  data: []
}]
const series_pie = {
  type: 'pie',
  radius: ['45%', '55%'],
  center: ['50%', '60%'],
  data: []
}
const echartOpt = {
  vbar: {
    color: color_bar,
    grid,
    xAxis,
    yAxis,
    series: series_bar
  },
  pie: {
    animation: false,
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c}件 ({d}%)'
    },
    calculable: true,
    color: color_pie,
    series: series_pie
  },
  line: {
    color: color_line,
    grid,
    xAxis,
    yAxis,
    series: series_line
  }
}

const echart = {
  getDefaultOption,
  refreshOption,
  dealChart_vbar,
  dealChart_line,
  dealChart_pie,
  dealChart
}
// 对echart数据做简单的分类
function dealChart(options, opt) {
  const datas = options.data
  const series = data.classify(datas, 'seriesName')
  // series[key] 的数组转换成obj
  for (const key in series) {
    series[key] = data.classify(series[key], 'name')
  }
  // 获取所有横坐标
  const category = tools.getKeys(data.classify(datas, 'name'))
  const seriesList = tools.getKeys(series)
  opt.xAxis.data = category
  opt.legend.data = seriesList
  opt = showDataZoom(category, options, opt)
  let seriesItem = opt.series
  // 取series[0]作为series的配置模板
  if (seriesItem[0]) {
    seriesItem = seriesItem[0]
    // 判断是否需要显示成堆积图
    if (options.stack) {
      seriesItem.stack = 'seriesName'
    }
  }
  // 保存需要重新生成的series
  const serieses = []
  for (const seriesKey of seriesList) {
    const item = tools.merge(true, {}, seriesItem, { name: seriesKey })
    item.data = []
    for (const xName of category) {
      if (series[seriesKey][xName]) {
        item.data.push(series[seriesKey][xName][0])
      } else {
        item.data.push({ name: xName, value: '' })
      }
    }
    serieses.push(item)
  }
  opt.series = serieses
  return opt
}
// 横坐标很多的时候显示拖动category：横坐标，options.end：true显示最后的，默认显示前20条
function showDataZoom(category, options, opt) {
  if (options.dataZoom) {
    if (category.length > 20) {
      const rate = data.getRate(20, category.length)
      opt.dataZoom = [{
        type: 'inside',
        start: options.end ? 100 - rate : 0,
        end: options.end ? 100 : rate
      }, {
        height: 15,
        start: options.end ? 100 - rate : 0,
        end: options.end ? 100 : rate,
        textStyle: {
          color: 'rgba(0,0,0,0)'
        },
        zoomLock: false,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
          color: '#fff',
          shadowBlur: 3,
          shadowColor: 'rgba(0, 0, 0, 0.6)',
          shadowOffsetX: 2,
          shadowOffsetY: 2
        }
      }]
    } else {
      opt.dataZoom = []
    }
  }
  return opt
}
function dealChart_vbar(options, opt) {
  return dealChart(options, opt)
}
function dealChart_line(options, opt) {
  return dealChart(options, opt)
}
function dealChart_pie(options, opt) {
  const category = tools.getKeys(data.classify(options.data, 'name'))
  opt.legend.data = category
  opt.series.data = options.data
  return opt
}
function getDefaultOption(type, opt) {
  const series = tools.merge(true, {}, echartOpt[type], commonOpt, opt)
  return series
}
function refreshOption(options, opt) {
  const back = echart['dealChart_' + options.type](options, opt)
  console.log('utils-refreshOption', back)
  return back
}
export default echart
