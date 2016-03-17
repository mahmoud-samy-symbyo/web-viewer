define(    ["appConfig","three","camera","controls","light","renderer","scene","statistics","material","meshesManager","distanceTool","gui"],
  function ( appConfig , THREE , camera , controls , light , renderer , scene , statistics , material , meshesManager , distanceTool , gui) {
    var app = {

        init: function () {
          meshesManager.loadStlMesh('orders/62692.stl', material.phong, true, "mainMesh").then(function(mesh){
            scene.add(mesh);
          }).catch(function(error){console.log(error);});
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
