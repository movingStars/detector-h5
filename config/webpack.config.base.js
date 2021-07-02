const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const px2rem = require('postcss-px2rem')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.REACT_APP !== 'prod'
const WebpackBar = require('webpackbar')
const webpack = require('webpack');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'js/[name].[contenthash].js', // Packaged result file
    path: path.resolve(__dirname, '../dist'), // Pack it in the dist directory
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    alias: {
      '@': path.resolve(__dirname, '../src/'),
      '@@': path.resolve(__dirname, '../src/components/'),
      '@assets': path.resolve(__dirname, '../src/assets/'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // Packaged file name
      template: path.resolve(__dirname, '../public/index.html'), // Specify template file
      hash: true, // Add a hash stamp after the reference resource
      // favicon: './public/favicon.ico',
      templateParameters: {
        'PUBLIC_URL': '/'
      },
    }),
    new webpack.DefinePlugin({
      "process.env": {
        ENV_TYPE: JSON.stringify(process.env.ENV_TYPE),
      },
    }),
    new WebpackBar(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/, // jsx or tsx file
        exclude: /(node_modules)/, // exclude node_modules
        use: {
          loader: 'babel-loader',
        },
      },
      {
        // test: /\.s[ac]ss$/i,
        test: /\.(css|less|sass|scss)$/,
        exclude: [path.resolve(__dirname, '..', 'node_modules')], // exclude node_modules
        use: [
          // Creates `style` nodes from JS strings
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: !devMode
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  //Add this plug-in to the plug-in of postcss-loader
                  //px2rem({ remUnit: 75 }) It means 1rem = 75px. This is based on the 750px design draft
                  px2rem({ remUnit: 75 }),
                ],
              },
            },
          },
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
        ],
        include: [path.resolve(__dirname, '..', 'node_modules')],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              publicPath: '/',
              limit: 8192,
              name: 'images/[name]-[hash:8].[ext]',
            },
          },
        ],
      },
      // // 字体图标的配置
      // {
      //   test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 8192,
      //         name: 'resource/[name].[ext]',
      //       },
      //     },
      //   ],
      // },
    ],
  },
}
