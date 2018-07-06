const path = require('path');

module.exports = {
  context: path.join(__dirname, '/src'),
  entry: {
    javascript: './js/index'
  },
  output: {
    path: path.join(__dirname, '/dist'),    
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      react: path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['.js', '.jsx']
  },
  devServer: {
    port: 3001
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
          { loader: 'less-loader' }
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
        use: { loader: 'file-loader' }
      },
      {
        test: /\.pdf$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  }
};
