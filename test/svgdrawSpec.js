define(['svgdraw'], function (SvgDraw) {
  describe('svgdraw', function () {
    var target = document.createElement('div');
    target.setAttribute('id', 'target');
    document.body.appendChild(target);
    var svgDrawInstance = new SvgDraw(target);


    it('should have a valid circle', function () {
      svgDrawInstance.circle(300, 300, {'fill': 'none', 'stroke': 'black', 'stroke-width':'1' });
      var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', 300);
      circle.setAttribute('cy', 300);
      circle.setAttribute('r', 150);
      expect(typeof(svgDrawInstance.svg.childNodes[0])).toEqual(typeof(circle));
    });

  });
});
