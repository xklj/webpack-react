const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const glob = require('glob-all')
const purifyCss = require('purifycss-webpack')

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main_[hash:8].js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
            // include: path.resolve(__dirname, './src')
          },
          'css?modules&localIdentName=[name]__[local]-[hash:base64:5]', 'postcss-loader', 'less-loader'
        ]
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    open: true,
    port: 9999,
    hot: true,
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: "./index.html",
      filename: "index.html",
      minify: {
        // 压缩HTML⽂件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空⽩符与换⾏符
        minifyCSS: true // 压缩内联css
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
      ignoreOrder: false
    }),
    new OptimizeCssAssetsWebpackPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {  preset: ["default", { discardComments: { removeAll: true } }] }
    }),
    new purifyCss({
      paths: glob.sync([
        path.resolve(__dirname, './*html'),
        path.resolve(__dirname, './src/*js')
      ])
    })
  ],
  devtool: 'cheap-module-eval-source-map'
};
