const path = require('path');

module.exports = {
  entry: {
    javascript: './src/js/index.jsx'
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
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
<<<<<<< HEAD
          { loader: 'less-loader' },
        ]
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          { loader: 'url-loader'},          
          { loader: 'file-loader' }
=======
          { loader: 'less-loader' }
>>>>>>> 564034f3ccf26a9289476b3d1bb63d516365dc00
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
          { loader: 'url-loader', options: {limit: 25000} },
          { loader: 'file-loader', options: {name: "[path][name].[hash].[ext]"} },
        ]
      },
      {
        test: /\.pdf$/,
        loader: 'file?name=[name].[ext]'
      }
    ],
  }
}