const requireContext = require('require-context')

const loaderModules = requireContext(__dirname, false, /\.js$/)
const loaderNames = loaderModules.keys()

module.exports = loaderNames.reduce((result, loader) => {
  if (loader === 'index.js') {
    return result
  }

  const loaderConf = loaderModules(loader)
  result.push(loaderConf)

  return result
}, [])
