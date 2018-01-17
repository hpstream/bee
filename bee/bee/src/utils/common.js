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
      param: 'param1:需要转换的json对象，param2:转换的对应关系 {name:"text"}表示将name的属性值赋予text',
      result: 'param1:{id:"id",name:"name"},param2:{id:"age",name:"text"} 返回值为{age:"id",text:"name"}',
      des: '将一个对象的一些属性转换成另一种',
      name: 'this.fd.data.changeObjKey'
    },
    changeListKey: {
      type: 'function',
      param: 'param1:需要转换的json数组，param2:转换的对应关系 {name:"text"}表示将name的属性值赋予text',
      result: 'param1:[{id:"id",name:"name"}],param2:{id:"age",name:"text"} 返回值为[{age:"id",text:"name"}]',
      des: '将一个JSON数组中每个对象的一些属性转换成另一种',
      name: 'this.fd.data.changeListKey'
    },
    classify: {
      type: 'function',
      param: 'param1:需要分类的json数组，param2:key，用来分类的关键字',
      result: `param1:[{id:"1",name:"1"},{id:"2",name:"1"},{id:"3",name:"2"}]<br>
               param2:name<br> 
               : {1:[{id:"1",name:"1"},{id:"2",name:"1"}],2:[{id:"3",name:"2"}]}`,
      des: '将一个JSON数组中根据一个字段进行分类。',
      name: 'this.fd.data.classify'
    },
    getBaseLog: {
      type: 'function',
      param: 'x:底数，y:对数',
      result: '返回log以x为底数y的对数',
      des: '返回log以x为底数y的对数。',
      name: 'this.fd.data.getBaseLog'
    }
  }
}
const toolsDes = {
  type: 'object',
  des: '工具类方法',
  child: {
    changeObjKey: {
      type: 'function',
      param: 'param1:需要转换的json对象，param2:转换的对应关系 {name:"text"}表示将name的属性值赋予text',
      result: 'param1:{id:"id",name:"name"},param2:{id:"age",name:"text"} 返回值为{age:"id",text:"name"}',
      des: '将一个对象的一些属性转换成另一种',
      name: 'this.fd.data.changeObjKey'
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
