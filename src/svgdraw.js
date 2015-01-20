(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['circle'], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory(root.circle);
  } else {
    // Browser globals
    root.SvgDraw = factory(root.circle);
  }

}(this, function (circle) {
// UMD Definition above, do not remove this line

  'use strict';

  function SvgDraw(_target) {
    this.target = _target;
    circle.call(this);
  };

  SvgDraw.prototype = Object.create(circle.prototype);
  SvgDraw.prototype.constructor = SvgDraw;

  return SvgDraw;
}));
