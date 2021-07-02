const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge.merge(baseConfig, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css'
    })
  ]
})
