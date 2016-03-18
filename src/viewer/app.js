define(    ["three","cameraManager","userControls","renderer","scene","statistics","material","loadingManager","meshHelper","distanceTool"],
  function ( THREE , cameraManager , userControls , renderer , scene , statistics , material , loadingManager , meshHelper , distanceTool ) {

    var init = function () {
      // camera
      cameraManager.setPosition(new THREE.Vector3(0, 0, 300));

      // light
      var hemisphereLight = new THREE.HemisphereLight( 0xFFFFFF, 0xBBBBBB );
    	scene.add( hemisphereLight );

      // stl
      loadingManager.loadStlMesh('orders/62692.stl', material.phong).then(function(jaw){
        meshHelper.center(jaw);
        meshHelper.saveMesh(jaw, 'jaw');
        cameraManager.updateViewSize(meshHelper.getMeshSize(jaw));
        scene.add(jaw);
        loadingManager.stopLoading();
      }).catch(function(error){console.log(error);});
      scene.add( new THREE.GridHelper( 200, 10 ) );
      scene.add(new THREE.AxisHelper(1000));
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
