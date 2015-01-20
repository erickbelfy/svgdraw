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

  function util() {

    this.createSvgTag = function (width, height, renderedComponent) {
      var svgNS = 'http://www.w3.org/2000/svg';
      var svg = document.createElementNS(svgNS, 'svg');
          svg.setAttributeNS(null, 'version', '1.1');
          svg.setAttributeNS(null, 'width', width);
          svg.setAttributeNS(null, 'height', height);
          svg.setAttributeNS(null, 'id', 'target_circle');
          svg.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns', svgNS);
          svg.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:xlink', 'http://www.w3.org/1999/xlink');
          svg.appendChild(renderedComponent);
       this.target.appendChild(svg);
    };

    this.appendAttr = function (elem, options) {
      for (var k in options) {
        elem.setAttributeNS(null, k, options[k]);
      }
      return elem;
    };

  };

  return util;
}));
