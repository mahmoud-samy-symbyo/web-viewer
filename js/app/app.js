define( ["appConfig", "three", "camera", "controls", "stlModelLoader", "light", "material", "renderer", "scene", "statistics"],
  function ( appConfig, THREE, camera, controls, stlModelLoader, light, material, renderer, scene, statistics ) {
    var app = {
      init: function () {
        //scene.add( new THREE.GridHelper( 200, 20 ) );
        //app.axis = new THREE.AxisHelper(75);
        //scene.add(app.axis);
        //app.helper = new THREE.BoundingBoxHelper(mesh, 0xff0000);
        //app.helper.update();
        //scene.add(app.helper);

        stlModelLoader.load( 'orders/62692.stl', function ( geometry ) {
          var mesh = new THREE.Mesh( geometry, material.phong );
          //mesh.scale.set( 0.005, 0.005, 0.005 );
          var bbox = new THREE.Box3().setFromObject(mesh);
          var center = bbox.center();
          //mesh.scale(2,2,2);
          mesh.rotateX( -Math.PI/2 );
          mesh.translateX( -center.x );
          mesh.translateY( -center.y );
          mesh.translateZ( -center.z );
          scene.add( mesh );
          //controls.attach( mesh );
          //scene.add( controls );
        } );
      },

      animate: function () {
        requestAnimationFrame( app.animate );
        controls.update();
        statistics.update();
        renderer.render( scene, camera );
      }
    };
    return app;
});
