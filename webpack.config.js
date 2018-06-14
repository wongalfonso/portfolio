const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
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
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {loader: "babel-loader"}
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
}