'use strict'
var mc = mc || {};

mc.round = function(num, dps) {
  var factor = Math.pow(10, dps);
  return Math.round(num * factor) / factor;
};
