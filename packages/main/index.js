var wrapA = require('wrap-a')
var depB = require('dep-b')

var message = "main module, depends on " + wrapA + " and " + depB + " (directly)"

console.log(message)