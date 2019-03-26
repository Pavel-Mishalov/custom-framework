const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path')

module.exports = new HtmlWebpackPlugin({
  title: "Skeleton App",
  template: path.resolve(__dirname, '../index.html')
})
