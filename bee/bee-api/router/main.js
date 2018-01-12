/**
 * 登录路由  --- 中间件
 */


var express = require('express');

var router = express.Router();


router.use(function (req, res, next) {
	console.log('Time:', Date.now());
	next();
});


router.get('/index',(req,res) =>{
	res.send('欢迎进入')
});

router.post('/api/login',(req,res)=>{
	res.send({
		token:'123456'
	})
})




module.exports =router

