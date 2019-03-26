module.exports = {
  test: /\.(jpe?g|png|gif|svg)$/i,
  loader: "file?hash=sha512&digest=hex&name=[path][name]-[hash].[ext]",
}