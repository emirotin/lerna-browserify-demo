(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = "dep-a/browser"
},{}],2:[function(require,module,exports){
module.exports = "dep-b/browser"
},{}],3:[function(require,module,exports){
var wrapA = require('wrap-a')
var depB = require('dep-b')

var message = "main module, depends on " + wrapA + " and " + depB + " (directly)"

console.log(message)
},{"dep-b":2,"wrap-a":4}],4:[function(require,module,exports){
var depA = require('dep-a')

module.exports = "wrapped version of [" + depA + "]"
},{"dep-a":1}]},{},[3]);
