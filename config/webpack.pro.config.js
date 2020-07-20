const merge = require('webpack-merge');
const base = require('./webpack.base.config.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(base, {
  mode: 'production',
  output: {
    filename: 'js/[name].[chunkhash:8].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
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
          'less-loader'
        ]
      },
      {
        test: /\.(css|less)$/,
        include: /node_modules/,
        use: [ 
          MiniCssExtractPlugin.loader,
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
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp:/\.css$/g,
        cssProcessor:require("cssnano"),
        cssProcessorPluginOptions:{
          preset:['default', { discardComments: { removeAll:true } }]
        },
        canPrint:true
      })
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      cacheGroups: {
        framework: {
          priority: 100,
          test: "framework",
          name: "framework",
          enforce: true
        },
        vendors: {
          priority: -10,
          test: /node_modules/,
          name: "vendor",
          enforce: true,
        },
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      inject: 'body',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css',
    }),
  ]
});
