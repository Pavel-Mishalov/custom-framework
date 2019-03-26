const requireContext = require('require-context')

const pluginModules = requireContext(__dirname, false, /\.js$/)
const pluginNames = pluginModules.keys()

module.exports = pluginNames.reduce((result, plugin) => {
  if (plugin === 'index.js') {
    return result
  }

  const pluginConf = pluginModules(plugin)
  result.push(pluginConf)

  return result
}, [])
