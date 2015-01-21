(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./util'], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals
    root.circle = factory();
  }

}(this, function (util) {
// UMD Definition above, do not remove this line

  'use strict';

  function circle() {
    util.call(this);
    this.circleTag = null;

    this.circle = function (width, height, options) {
      var circleRange = Math.round(width / 2);
      this.circleTag = document.createElementNS(this.svgNS, 'circle');
      this.circleTag.setAttributeNS(null, 'cx', circleRange);
      this.circleTag.setAttributeNS(null, 'cy', circleRange);
      this.circleTag.setAttributeNS(null, 'r', (circleRange - 10));
      this.circleTag = this.appendAttr(this.circleTag, options);
      this.createSvgTag(width, height, this.circleTag);
    };

  };

  circle.prototype = Object.create(util.prototype);

  return circle;
}));
