var Webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin")
var CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: "app.js",
  context: __dirname + "/src",
  resolve: {
    root: __dirname + "/src",
  },
  output: {
    path: __dirname + "/dist",
    filename: "bundle-[hash].js",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"],
      },
      {
        test: /\.sass$/,
        loader: "style!css!sass?indentedSyntax",
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file?hash=sha512&digest=hex&name=[path][name]-[hash].[ext]",
      }
    ]
  },
  plugins: [
    new Webpack.NoErrorsPlugin(),
    new Webpack.DefinePlugin({
      ENV: JSON.stringify(process.env.NODE_ENV || "development"),
    }),
    new HtmlWebpackPlugin({
      title: "Skeleton App",
    }),
    new CompressionPlugin({
      asset: "{file}.gz",
      algorithm: "gzip",
      regExp: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ]
};
