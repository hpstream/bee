var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  //BASE_API: '"http:192.168.0.1:8080/fd-court-cube/api"',
  BASE_API: '"http://localhost:3000"',
})
