define( ["three", "camera", "container", "datgui", "renderer", "OrbitControls"],
	function( THREE, camera, container, dat, renderer) {
		controls = new THREE.OrbitControls( camera, renderer.domElement );
		controls.minDistance = 50;
		controls.maxDistance = 200;
		controls.enablePan = false;
		controls.enableZoom = true;
		controls.enableRotate = true;
		return controls;
} );
