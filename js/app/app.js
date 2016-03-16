define(    ["appConfig","three","camera","meshHelpers","controls","stlReader","material","light","renderer","scene","statistics"],
  function ( appConfig , THREE , camera , meshHelpers , controls , stlReader , material , light , renderer , scene , statistics ) {
    var app = {
        init: function () {
          stlReader('orders/62692.stl').then(function ( geometry ) {
            var mesh = new THREE.Mesh( geometry, material.phong );
            meshHelpers.pointTo(mesh);
            scene.add( mesh );
          }).catch( function(e){
            console.log(e);
          });
          //scene.add( new THREE.GridHelper( 200, 10 ) );
          //scene.add(new THREE.AxisHelper(1000));
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
