const path = require('path')
const root = __dirname + "/../../"

module.exports = {
  entry: path.resolve(__dirname, "../../src/app.js"),
  context: path.resolve(root, "src"),
  resolve: {},
  output: {
    path: path.resolve(root, "dist"),
    filename: "bundle-[hash].js",
  },
  module: {},
  plugins: []
}
