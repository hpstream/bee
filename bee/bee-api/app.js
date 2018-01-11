/**
 * Created by Sunday on 6/28/2017.
 */
var express = require('express')
var cors = require('cors')
var mock = require('mockjs')
var app = express()
var path = require("path");
var Router = require('./router/main')
var port = 3000;
app.use(cors())
app.use('/static',express.static(path.join('public')));

app.use(Router);  //添加路由


app.listen(port, function () {
    console.log('Listening at http://localhost:' +port);
      
})