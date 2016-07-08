'use strict'
const cE = require('./lib/classesEnhancment')
module.exports = function(options) {
  let classList = []

  return function(tree) {
    tree.match({attrs: {class: true}}, function (node) {
      cE.detectClasses(node)
      return node
    })

  }
}