const path = require('path');

module.exports = {
  entry: {
    index:"./src/index.js",
    framework: ['react','react-dom'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/',
            limit: 10240,
          },
        }
      },
      // {
      //   test: /\.(eot|ttf|svg|woff|woff2)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       name: '[name]_[hash].[ext]',
      //       outputPath: 'font/'
      //     }
      //   }
      // }
    ]
  },
  // devtool: 'cheap-module-eval-source-map',
};
