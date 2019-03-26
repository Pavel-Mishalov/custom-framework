const Webpack = require("webpack")

const x = new Webpack.DefinePlugin({
  ENV: JSON.stringify(process.env.NODE_ENV || "development"),
})

module.exports = x
