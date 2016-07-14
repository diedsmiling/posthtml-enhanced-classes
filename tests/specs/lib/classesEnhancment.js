'use strict'

const cE = require('../../../lib/classesEnhancment')
const patterns = require('../../../lib/patterns')

function testClassesParsing(className, expectedResult) {
  const expectedMatchedClasses = [
    expectedResult
  ]
  expect(cE.matchClasses(className, patterns))
    .to.deep.equal(expectedMatchedClasses)
}

describe('classesEnhancment ', function() {
  describe('matchClasses method', function() {
    it('should match "width-n" class', function() {
      testClassesParsing('a-class width-20', {width: 20})
    })

    it('should match "height-n" class', function() {
      testClassesParsing('height-10 a-class ', {height: 10})
    })

    it('should match "square-n" class', function() {
      testClassesParsing('square-10 a-class ', {square: 10})
    })

    it('should match "font-size" class', function() {
      testClassesParsing('font-size-10', {'font-size': 10})
    })
  })


})