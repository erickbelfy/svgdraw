define(['svgdraw'], function (SvgDraw) {
  describe('svgdraw', function () {
    var target = document.createElement('div');
    target.setAttribute('id', 'target');
    document.body.appendChild(target);
    var svgDrawInstance = new SvgDraw(target);
    console.log(svgDrawInstance);


    it('should have a valid circle', function () {
      svgDrawInstance.circle(300, 300,{'fill': 'none', 'stroke': 'black', 'stroke-width':'1' });
      var svg = document.getElementById('target_circle');
      expect(typeof(svg.childNodes[0])).toEqual('object');
    });

  });
});
