var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_LOCATION: '"http://localhost:3000/"',
  CROS_DOMAIN: '"http://localhost:8081"'
})
