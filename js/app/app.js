define( ["appConfig", "three", "camera", "cameraManager", "controls", "stlModelLoader", "light", "material", "renderer", "scene", "statistics"],
  function ( appConfig, THREE, camera, cameraManager, controls, stlReader, light, material, renderer, scene, statistics ) {
    var app = {
      init: function () {
        //scene.add( new THREE.GridHelper( 200, 10 ) );
        //scene.add(new THREE.AxisHelper(1000));

        stlReader('orders/62692.stl').then(function ( geometry ) {
          var mesh = new THREE.Mesh( geometry, material.phong );
          cameraManager.pointTo(mesh);
        }).catch(
          function(e){ console.log(e);
        });
      },

      render: function () {
        controls.update();
        statistics.update();
        renderer.render( scene, camera );
        requestAnimationFrame( app.render );
      }
    };
    return app;
});
