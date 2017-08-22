/**
 * Created by Sunday on 6/28/2017.
 */
var express = require('express')
var cors = require('cors')
var mock = require('mockjs')
var app = express()
var path = require("path");
app.use(cors())
app.use('/static',express.static(path.join('public')))
app.post('/login/index', function (req, res) {
    var data = {
        code: 200,
        msg: 'success',
        token: '1234567890'
    }
    res.send(data)
})

app.get('/post/index', function (req, res) {
	
	
	var length = 10;
    var data = { "rows": [
        
       
        
    ], "total":100, "errcode": 10 }
    
    for(var i=0;i<length;i++){
    	var json = {
			id:"",
			name:"",		
			value:"",
			
		};
    	json.id=i+1;
    	json.name='x'+i;
    	json.value=Math.ceil(Math.random()*100);
    	json.yoy= Math.ceil(Math.random()*100) ;
    	json.rate= Math.ceil(Math.random()*100);
    	data.rows.push(json)
    }
    res.send(data)
})

app.get('/post/area', function (req, res) {
	
	
	
    var data = {data:[
    			{id:"1",name:"合肥市",value:Math.ceil(Math.random()*100)},
    			{id:"1",name:"淮南市",value:Math.ceil(Math.random()*100)},
    			{id:"1",name:"芜湖市",value:Math.ceil(Math.random()*100)},
    			{id:"1",name:"铜陵市",value:Math.ceil(Math.random()*100)},
    			{id:"1",name:"六安市",value:Math.ceil(Math.random()*100)},
    			{id:"1",name:"宣城市",value:Math.ceil(Math.random()*100)},
    			{id:"1",name:"黄山市",value:Math.ceil(Math.random()*100)},
    			{id:"1",name:"亳州市",value:Math.ceil(Math.random()*100)},
    			{id:"1",name:"阜阳市",value:Math.ceil(Math.random()*100)},
    			{id:"1",name:"滁州市",value:Math.ceil(Math.random()*100)}
    ]};
    res.send(data)
})
app.get('/post/sjc', function (req, res) {
	
	
	
    var data = {data:[
    			 {id:'1',name:"新收",rate:"-"+Math.ceil(Math.random()*100)+"%",value:Math.ceil(Math.random()*1000)},
                {id:'2',name:"结案",rate:"-"+Math.ceil(Math.random()*100)+"%",value:Math.ceil(Math.random()*1000)},
                {id:'3',name:"旧存",rate:"-"+Math.ceil(Math.random()*100)+"%",value:Math.ceil(Math.random()*1000)},
                {id:'4',name:"受理",rate:"-"+Math.ceil(Math.random()*100)+"%",value:Math.ceil(Math.random()*1000)},
                {id:'5',name:"已结",rate:"-"+Math.ceil(Math.random()*100)+"%",value:Math.ceil(Math.random()*1000)}
    ]};
    res.send(data)
})

app.listen(3000, function () {
    console.log('Listening at http://localhost:3000')
      
})