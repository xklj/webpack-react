const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base.config.js');



const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(base, {
  mode: 'development',
  output: {
    filename: 'js/[name].[hash:8].bundle.js',
    // 处理BrowserHistory二级路由跳转后刷新失效publicPath: '/'
    publicPath: '/' ,
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        use: [ 
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[local]__[hash:base64:8]'
              },
            }
          },
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              // modules: {
              //   modifyVars: theme
              // },
            }
          },
        ]
      },
      {
        test: /\.(css|less)$/,
        include: /node_modules/,
        use: [ 
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: { javascriptEnabled: true }
          }
        ]
      },
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    open: true,
    port: 9000,
    compress: true,
    hot: true,
    // 处理BrowserHistory二级路由跳转后刷新失效publicPath: '/'
    historyApiFallback: true,
    clientLogLevel: 'warning',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
      hash: false
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'cheap-module-eval-source-map', 
});
