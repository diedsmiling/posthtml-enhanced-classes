'use strict'
const cE = require('./lib/classesEnhancment')
const patterns = require('./lib/patterns')

module.exports = function(options) {
  let classList = []

  return function(tree) {
    tree.match({attrs: {class: true}}, function (node) {
      classList = cE.matchClasses(node.attrs.class, patterns)
      return node
    })
  }

}