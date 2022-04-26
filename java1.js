$(function () {
  html2canvas($('#MyHTMLCODE'), {
    onrendered: function (canvas) {
      if ($('#canvas').replaceWith(canvas)) {
        var c = document.getElementById('canvas');
        // $('#canvas').replaceWith(c);
        console.log(c);
        var width = c.width;
        var height = c.height;
        var ctx = c.getContext('2d');
        // console.log(ctx);
        // ctx.fillStyle = "black";
        // ctx.fillRect(0, 0, 200, 200);
        var imgData = ctx.getImageData(0, 0, width, height);
        // ctx.putImageData(imgData, 100, 70);
        console.log(imgData.data);
      }
    },
    //width: 200,
    //height: 200
  });
});
