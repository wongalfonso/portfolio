const path = require("path");

module.exports = {
  entry: "./src/js/index.jsx",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
  },
  devtool: "source-map",
  resolve: {
    alias: {
      react: path.join(__dirname, "node_modules", "react")
    },
    extensions: [".js", ".jsx"],
    modules: ["node_modules"]
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
          {loader: "babel-loader"}
        ]
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.mp4$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "[name].[ext]"
          }
        }]
      },
      {
        test: /\.(png|jpg)$/,
        use: {loader: "file-loader"}        
      },
      {
        test: /\.pdf$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  }
}