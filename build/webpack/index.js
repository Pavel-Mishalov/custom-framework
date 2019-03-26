yaml = require('js-yaml')
fs   = require('fs')
 
// const args = yaml.load(fs.readFileSync(__dirname + '/config.yml', 'utf8'))
const defaultVar = require('./default.js')

defaultVar.module.rules = require('./loaders')
defaultVar.plugins = require('./plugins')

module.exports = Object.assign({}, defaultVar)
