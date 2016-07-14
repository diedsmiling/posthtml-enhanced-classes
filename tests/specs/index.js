'use strict'

const posthtml = require('posthtml')
const proxyquire = require('proxyquire')
const classesEnhancment = require('../../lib/classesEnhancment')
const input = `
  <div class="button">
    <div class="button__text a_class">
        Text
    </div>
  </div>
  <div class="another_button">
    <div class="another_button__text">
      123
    </div>
  </div>
  <div>Div without class</div>`

let enhancedClasses

describe('enhancedClasses ', function() {
  beforeEach(function(done) {
    sinon.spy(classesEnhancment, 'matchClasses')
    enhancedClasses = proxyquire('../../index', {
      './lib/classesEnhancment': classesEnhancment
    })
    posthtml([ enhancedClasses({}) ])
      .process(input)
      .then(function () {
        done()
      }).catch(function (error) {
      done(error)
    })
  })

  afterEach(function() {
    classesEnhancment.matchClasses.restore()
  })

  it('should only parse nodes that have classes', function() {
    expect(classesEnhancment.matchClasses).to.be.callCount(4)
  })

  it('should call matchClasses method with classes strings', function() {
    expect(classesEnhancment.matchClasses)
      .to.be.calledWith('button')
    expect(classesEnhancment.matchClasses)
      .to.be.calledWith('button__text a_class')
    expect(classesEnhancment.matchClasses)
      .to.be.calledWith('another_button')
    expect(classesEnhancment.matchClasses)
      .to.be.calledWith('another_button__text')
  })

})