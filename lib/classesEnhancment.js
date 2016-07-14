'use strict'

module.exports= {
  /**
   * Matches enhanced classes from a string
   *
   * @param string
   * @param patterns
   * @returns {Array}
   */
  matchClasses: function(string, patterns) {
    let result = []
    string.split(' ')
      .forEach((className) => {
       patterns.forEach(pattern => {
         let matches = new RegExp(pattern).exec(className)
         if (matches) {
           result.push({ [matches[1]]: parseInt(matches[2]) })
         }
        })
      })

    return result
  }
}
