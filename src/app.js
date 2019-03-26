import { parse } from 'node-html-parser';
import h from './i.html'
var createElement = require('virtual-dom/create-element')
const hh = require("virtual-dom/h")
let h2 = h.replace(/\n/g, '')
h2 = h2.replace(/\s\s+/g, '')
h2 = parse(h2)
console.log(h2.childNodes[0])
h2 = hh(h2.childNodes[0].tagName, h2.childNodes[0].attributes, [
    hh(h2.childNodes[0].childNodes[0].tagName, h2.childNodes[0].childNodes[0].attributes, [
        h2.childNodes[0].childNodes[0].text
      ])
  ])
console.log(h2)


document.getElementById('app').appendChild(createElement(h2))