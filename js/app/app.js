define( ["three", "camera", "controls", "stlModelLoader", "light", "material", "renderer", "scene", "statistics"],
function ( THREE, camera, controls, stlModelLoader, light, material, renderer, scene, statistics) {
  var app = {
    meshes: [],
    init: function () {
      //scene.add( new THREE.GridHelper( 500, 5 ) );
  
      stlModelLoader.load( 'orders/62692.stl', function ( geometry ) {
        var mesh = new THREE.Mesh( geometry, material.phong );
        mesh.position.set( - 200, 0, 0 );
        mesh.rotation.set( - Math.PI/2 , 0, 0 );
        //mesh.scale.set( 0.005, 0.005, 0.005 );
        scene.add( mesh );
        app.animate();
      } );

      stlModelLoader.load( 'orders/62692.stl', function ( geometry ) {
        var mesh = new THREE.Mesh( geometry, material.phong );
        mesh.position.set( 0, 0, 0 );
        mesh.rotation.set( - Math.PI/2 , 0, 0 );
        //mesh.scale.set( 0.005, 0.005, 0.005 );
        scene.add( mesh );
        app.animate();
      } );
      //app.animate();
      //controls.addEventListener( 'change', app.animate );
    },

    animate: function () {
      requestAnimationFrame( app.animate );
      //window.requestAnimationFrame( app.animate );
      controls.update();
      statistics.update();
      renderer.render( scene, camera );
    }
  };
  return app;
} );
