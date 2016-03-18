define( ["three","cameraManager","renderer", "OrbitControls"],
function( THREE , cameraManager , renderer ) {
		controls = new THREE.OrbitControls( cameraManager.camera, renderer.domElement );
		controls.minDistance = 50;
		controls.maxDistance = 200;
		controls.enablePan = false;
		controls.enableZoom = true;
		controls.enableRotate = true;
		return controls;
} );
