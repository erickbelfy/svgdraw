(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals
    root.SvgDraw = factory();
  }

}(this, function () {
// UMD Definition above, do not remove this line

  'use strict';

  var SvgDraw = function SvgDraw(_target) {
    this.target = _target;
    this.svgNS = 'http://www.w3.org/2000/svg';
    this.svg = null;
  };

  SvgDraw.prototype.createSvgTag = function (width, height) {
    if (this.svg === null) {
      this.svg = document.createElementNS(this.svgNS, 'svg');
      this.svg.setAttributeNS(null, 'width', width);
      this.svg.setAttributeNS(null, 'height', height);
      this.svg.setAttributeNS(null ,'viewBox', this.getViewBoxProperties(width, height));
      this.svg.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:xlink', 'http://www.w3.org/1999/xlink');
      this.target.appendChild(this.svg);

    }
  };

  SvgDraw.prototype.circle = function (width, height, options) {
    this.createSvgTag(width, height);
    var radius = Math.round(width / 2);
    var circle = document.createElementNS(this.svgNS, 'circle');
    circle = this.attr(circle, options);
    circle.setAttributeNS(null, 'cx', width);
    circle.setAttributeNS(null, 'cy', height);
    circle.setAttributeNS(null, 'r', radius);
    this.svg.appendChild(circle);
  };

  SvgDraw.prototype.attr = function (ref, options) {
    for (var k in options) {
      ref.setAttributeNS(null, k, options[k]);
    }
    return ref;
  };

  SvgDraw.prototype.getViewBoxProperties = function (width, height) {
    var vBoxWidth = Math.round(width / 10),
        vBoxHeight = Math.round(height / 10);

    return '0 0 '+ vBoxWidth + ' ' + vBoxHeight;
  };

  return SvgDraw;
}));
