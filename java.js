$(function () {
  var image = document.getElementById('divs');
  domtoimage.toPng(image).then(function (dataUrl) {
    console.log(dataUrl);
    var img = new Image();
    // img.height = 20;
    // img.width = 30;
    img.src = dataUrl;
    img.id = 'image';
    if (document.body.appendChild(img)) {
      var c = document.getElementById("myCanvas"); 
      var width = c.width;
      var height = c.height;
      var ctx = c.getContext("2d");
      var img = document.getElementById("image");
      ctx.drawImage(img, 0, 0);
      var imgData = ctx.getImageData(0, 0, width, height);
      var array = new Uint8Array(imgData.data);
      console.log(array);
      // console.log(imgData.data);
    }
});
  

  // html2canvas($('#MyHTMLCODE'), {
  //   onrendered: function (canvas) {
  //     var x = document.createElement('canvas');
  //     x.width = 500;
  //     x.height = 350;
  //     x.id = 'test';
  //     var ctx = x.getContext('2d');
  //     ctx.drawImage(canvas, 0, 0);
  //     if (document.body.appendChild(x)) {
  //       var c = document.getElementById('test');
  //       var dataURL = c.toDataURL();
  //       console.log(dataURL);
  //       // $('#canvas').replaceWith(c);
  //       // console.log(c);
  //       var width = c.width;
  //       var height = c.height;
  //       var ctx = c.getContext('2d');
  //       // console.log(ctx);
  //       // ctx.fillStyle = "black";
  //       // ctx.fillRect(0, 0, 200, 200);
  //       var imgData = ctx.getImageData(0, 0, width, height);
  //       // ctx.putImageData(imgData, 100, 70);
  //       var array = new Uint8Array(imgData.data);
  //       console.log(array);
  //       console.log(imgData.data);
  //     }

  //     // $('#canvas').replaceWith(canvas);
  //   },
  //   // width: 200,
  //   // height: 200,
  // });
});
