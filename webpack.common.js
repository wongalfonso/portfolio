const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  // context: path.join(__dirname, '/src'),
  entry: {
    javascript: './src/js/index.jsx'
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
    publicPath: '/'
  },
  resolve: {
    alias: {
      react: path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' }          
        ]
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' },
          { loader: 'url-loader' },
          { loader: 'file-loader' },
        ]
      },
      {
        test: /\.mp4$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }]
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          { loader: 'url-loader' },
          { loader: 'file-loader' }
        ]
      },
      {
        test: /\.pdf$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  }
}