define(['svgdraw'], function (SvgDraw) {
  describe('svgdraw', function () {
    var target = document.createElement('div');
    target.setAttribute('id', 'target');
    document.body.appendChild(target);
    var svgDrawInstance = new SvgDraw(target);


    it('should have a valid circle', function () {
      svgDrawInstance.circle(300, 300, {'fill': 'none', 'stroke': 'black', 'stroke-width':'1' });
      expect(typeof(svgDrawInstance.svg.childNodes[0])).toEqual('object');
    });

  });
});
