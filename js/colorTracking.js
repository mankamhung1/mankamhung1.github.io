var container;
    var camera, scene, renderer, group, particle;
    var mouseX = 0, mouseY = 0;
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas');
//    var context = canvas.getContext('2d');
    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;
    var change=false;

    window.onload = function() {
      var tracker = new tracking.ColorTracker();
      //console.log ("Tracking !!!!!!");
      tracker.setMinDimension(5);
      tracker.setMinGroupSize(10);
      tracking.track('#video', tracker, { camera: true });
      tracker.on('track', onColorMove);
    };

    function onColorMove(event) {
      if (event.data.length === 0 && change == true) {
          swapStyleSheet('css/custom.css');
          change = false;
        return;
      }
      var maxRect;
      var maxRectArea = 0;
      event.data.forEach(function(rect) {
        if (rect.width * rect.height > maxRectArea){
          maxRectArea = rect.width * rect.height;
          maxRect = rect;
        }
      });
      if (maxRectArea > 0 && change == false) {
        swapStyleSheet('css/alternative1.css');
        change=true;
      }
    }
