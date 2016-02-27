define( ["three", "camera", "container", "TrackballControls"], function( THREE, camera, container ) { 
/*
  var controls = new THREE.TrackballControls( camera, container );
  controls.noPan = false;
  return controls;
*/
	var controls = new THREE.TrackballControls( camera );
	controls.rotateSpeed = 1.0;
	controls.zoomSpeed = 1.2;
	controls.panSpeed = 0.8;
	controls.noZoom = false;
	controls.noPan = false;
	controls.staticMoving = true;
	controls.dynamicDampingFactor = 0.3;
	controls.keys = [ 65, 83, 68 ];
	
	return controls;
} );
