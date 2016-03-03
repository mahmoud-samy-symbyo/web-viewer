define( ["three", "container"], function ( THREE, container ) {

  var width = container.offsetWidth, height = container.offsetHeight;
  var camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1500 );
	camera.position.set( 0, 0, 700 );
	camera.rotation.x = -0.5;

	var updateSize = function () {
		camera.aspect = container.offsetWidth / container.offsetHeight;
		camera.updateProjectionMatrix();
	};
	window.addEventListener( 'resize', updateSize, false );
	updateSize();

	return camera;
} );
