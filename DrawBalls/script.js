!(function () {
    "use strict";
  
    var spd = 0.03,
      max = 300,
      nw = 0,
      list = [],
      xb = 0,
      yb = 0,
      R = 0,
      N = 0,
      Im = 0,
      img = document.getElementById("particles").getElementsByTagName("img");
    var Obj = function () {
      this.elem = document.createElement("img");
      this.x = 0;
      this.c = 0;
      this.w = 0;
      this.y = 0;
      this.css = this.elem.style;
      screen.elem.appendChild(this.elem);
      this.update();
    };
    Obj.prototype.update = function () {
      var i = img[Im % img.length];
      this.x = pointer.pos.x < nw ? nw - pointer.pos.x : pointer.pos.x - nw;
      this.c = pointer.pos.x < nw ? -R - Math.PI / 2 : -R + Math.PI / 2;
      this.w = Math.round(i.width / 2);
      this.y = pointer.pos.y - i.height / 2;
      this.elem.src = i.src;
      this.css.transform = "matrix(1,0,0,1,-1000,0)";
    };
    var screen = ge1doot.screen.init(
      "screen",
      function () {
        nw = ge1doot.screen.width / 2;
      },
      true
    );
    var pointer = screen.pointer.init({
      up: function () {
        xb = yb = -999;
        Im++;
        if (N > 10) document.getElementById("title").innerHTML = "";
      },
      move: function () {
        var dx = Math.abs(pointer.pos.x - xb);
        var dy = Math.abs(pointer.pos.y - yb);
        if (Math.sqrt(dx * dx + dy * dy) > img[Im % img.length].width) {
          if (N < max) list[N % max] = new Obj();
          else list[N % max].update();
          N++;
          xb = pointer.pos.x;
          yb = pointer.pos.y;
        }
      }
    });
    // ==== main loop ====
    function run() {
      requestAnimationFrame(run);
      R += spd;
      for (var i = 0, o; (o = list[i]); i++) {
        var x = nw + o.x * Math.sin(R + o.c) - o.w * 0.5;
        o.css.transform = "matrix(1,0,0,1," + x + "," + o.y + ")";
        o.css.zIndex = 10000 + Math.floor(2 * Math.abs(o.x) * Math.cos(R + o.c));
      }
    }
  
    // ==== start animation ====
    requestAnimationFrame(run);
  })();
  