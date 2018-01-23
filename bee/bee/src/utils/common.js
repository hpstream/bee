import request from '@/utils/request'
import Vue from 'vue'
import echart from '@/utils/echarts'
import Cookies from 'js-cookie'
import tools from '@/utils/tools'
import data from '@/utils/data'
export function req(defaultOpt) {
  // let option = defaultOpt
  defaultOpt.url = 'data/api/' + defaultOpt.url
  return request(defaultOpt)
}
const dataDes = {
  type: 'object',
  des: '数据操作的方法集合',
  child: {
    changeObjKey: {
      type: 'function',
      param: 'param1:{}//需要被转的对象<br/>param2:{originalKey:lastKey}//装换的对应关系',
      result: '{}//转换后的对象',
      des: '将对象的属性值转换为另一值'
    }
  }
}
const toolsDes = {
  type: 'object',
  des: '工具类方法',
  child: {
    getId: {
      type: 'function',
      param: '无',
      result: '一个字符串',
      des: '获取一个Id'
    }
  }
}
const echartDes = {
  type: 'object',
  des: 'echart方法集合',
  child: {
    changeObjKey: {
      type: 'function',
      param: '',
      result: '',
      des: '',
      name: 'this.fd.echart.'
    }
  }
}
const description = {
  req: {
    type: 'function',
    param: 'param:{type: "get|post|put|delete", url: "路径", data: "参数，请求为post的时候"，params}',
    result: 'response',
    des: '调用接口请求数据',
    name: 'this.fd.req'
  },
  dataDes,
  echartDes,
  toolsDes
}

const session = {
  set(Obj) {
    Cookies.set('sessionName', Obj)
  },
  get() {
    return Cookies.getJSON('sessionName')
  }
}
Vue.prototype.fd = {
  req,
  data,
  echart,
  tools,
  description,
  session
}
