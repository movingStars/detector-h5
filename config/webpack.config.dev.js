const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')
const portfinder = require('portfinder')
const path = require('path')
const address = require('../server')

const devConfig = merge.merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: process.env.PORT || 3000,
    host: address.serverIP(),
    contentBase: path.join(__dirname, '../public'),
    watchContentBase: true,
    publicPath: '/',
    compress: true,
    historyApiFallback: true,
    hot: true,
    clientLogLevel: 'error',
    open: false,
    watchOptions: {
      ignored: /node_modules/,
    },
    proxy: {
      '/ws': {
        target: 'https://apis.map.qq.com/ws',
        pathRewrite: {'^/ws': ''},
        changeOrigin: true,     // target是域名的话，需要这个参数，
        secure: true,          // 设置支持https协议的代理
      }
    }
  },
})

module.exports = new Promise((resolve, reject) => {
  // Auto find port
  portfinder.getPort(
    {
      port: 3000,
      stopPort: 8000,
    },
    (err, port) => {
      if (err) {
        reject(err)
        throw new Error('can not fond available port! try again...')
      }
      // When the port is occupied, reset the port of evn and devserver
      devConfig.devServer.port = process.env.PORT = port
      resolve(devConfig)
    }
  )
})
