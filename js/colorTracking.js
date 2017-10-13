var container;
    var camera, scene, renderer, group, particle;
    var mouseX = 0, mouseY = 0;
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas');
//    var context = canvas.getContext('2d');
    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    window.onload = function() {
      var tracker = new tracking.ColorTracker();
      var body = document.body;
      console.log ("Tracking !!!!!!");
      tracker.setMinDimension(5);
      tracker.setMinGroupSize(10);
      tracking.track('#video', tracker, { camera: true });
      tracker.on('track', onColorMove);
    };

/*
    function init() {
      container = document.createElement('div');
      document.body.appendChild(container);
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 3000);
      camera.position.z = 1000;
      scene = new THREE.Scene();
      var PI2 = Math.PI * 2;
      var program = function (context) {
        context.beginPath();
        context.arc(0, 0, 0.5, 0, PI2, true);
        context.fill();
      }
      group = new THREE.Object3D();
      scene.add(group);
      for (var i = 0; i < 1000; i++) {
        var material = new THREE.SpriteCanvasMaterial({
          color: Math.random() * 0x808008 + 0x808080,
          program: program
        });
        particle = new THREE.Sprite(material);
        particle.position.x = Math.random() * 2000 - 1000;
        particle.position.y = Math.random() * 2000 - 1000;
        particle.position.z = Math.random() * 2000 - 1000;
        particle.scale.x = particle.scale.y = Math.random() * 20 + 10;
        group.add(particle);
      }
      renderer = new THREE.CanvasRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);
      window.addEventListener('resize', onWindowResize, false);
    }
    function onWindowResize() {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
*/
    function onColorMove(event) {
      if (event.data.length === 0) {
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
      if (maxRectArea > 0) {
        body.style.background = 'linear-gradient(to right, #f6f1d3 5%, #550c65 90%, #293f50)';
        var rectCenterX = maxRect.x + (maxRect.width/2);
        var rectCenterY = maxRect.y + (maxRect.height/2);
        mouseX = (rectCenterX - 160) * (window.innerWidth/320) * 10;
        mouseY = (rectCenterY - 120) * (window.innerHeight/240) * 10;
        /*
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.strokeStyle = maxRect.color;
        context.strokeRect(maxRect.x, maxRect.y, maxRect.width, maxRect.height);
        context.font = '11px Helvetica';
        context.fillStyle = "#fff";
        context.fillText('x: ' + maxRect.x + 'px', maxRect.x + maxRect.width + 5, maxRect.y + 11);
        context.fillText('y: ' + maxRect.y + 'px', maxRect.x + maxRect.width + 5, maxRect.y + 22);
        */
      }
    }
