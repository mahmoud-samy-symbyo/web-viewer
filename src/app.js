define ( ["three","cameraManager","userControls","renderer","scene","statistics","material","loadingManager","meshHelper"],
function ( THREE , cameraManager , userControls , renderer , scene , statistics , material , loadingManager , meshHelper ) {

    var init = function () {
      // light
      var hemisphereLight = new THREE.HemisphereLight( 0xFFFFFF, 0xBBBBBB );
    	scene.add( hemisphereLight );

      // stl
      loadingManager.loadStlMesh('samples/62692.stl', material.phong).then(function(jaw){
        meshHelper.center(jaw);
        meshHelper.saveMesh(jaw, 'jaw');
        var meshSize = meshHelper.getMeshSize(jaw);
        cameraManager.updateViewSize(meshSize);
        cameraManager.setPosition(new THREE.Vector3(0, 0, meshSize*2));
        scene.add(jaw);
        loadingManager.stopLoading();
      }).catch(function(error){console.log(error);});
      //scene.add( new THREE.GridHelper( 200, 10 ) );
      //scene.add(new THREE.AxisHelper(1000));
    };

    var render = function () {
      controls.update();
      statistics.update();
      renderer.render( scene, cameraManager.camera );
      requestAnimationFrame( render );
    };

    return {
      init: init,
      render: render };
});
