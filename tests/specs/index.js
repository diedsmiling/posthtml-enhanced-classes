'use strict'

const posthtml = require('posthtml')
const proxyquire = require('proxyquire')
const classesEnhancment = require('../../lib/classesEnhancment')
const input = `
  <div class="button" style="border: 1px solid #000;">
    <div class="button__text">
        <b>Text</b>
    </div>
  </div>
  <div class="claa">
    <p class="pp">123</p>
   </div>`

let enhancedClasses

describe('enhancedClasses ', function() {
  beforeEach(function() {
    sinon.spy(classesEnhancment, 'detectClasses')
    enhancedClasses = proxyquire('../../index', {
      './lib/classesEnhancment': classesEnhancment
    })
  })

  it('should only parse nodes that have classes', function(done) {
    posthtml([ enhancedClasses({}) ])
      .process(input)
      .then(function (result) {
        expect(classesEnhancment.detectClasses).to.be.callCount(4)
        done()
      }).catch(function (error) {
      done(error)
    })

  })

})