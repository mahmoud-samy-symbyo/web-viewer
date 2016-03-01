define( ["three", "container"], function ( THREE, container ) {
	var camera = new THREE.PerspectiveCamera( 50, container.offsetWidth / container.offsetHeight, 1, 1500 );
	camera.position.set( 0, 100, 200 );
	camera.rotation.x = -0.3;

	var updateSize = function () {
		camera.aspect = container.offsetWidth / container.offsetHeight;
		camera.updateProjectionMatrix();
	};
	window.addEventListener( 'resize', updateSize, false );
	updateSize();

	return camera;
} );
