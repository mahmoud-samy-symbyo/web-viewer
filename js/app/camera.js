define( ["three", "container", "appConfig"], function ( THREE, container, appConfig ) {
	var camera;

	if (appConfig.useOrthoCamera) {
		camera = new THREE.OrthographicCamera();
	} else {
		camera = new THREE.PerspectiveCamera( 50, container.offsetWidth / container.offsetHeight, 1, 1500 );
	}

	camera.position.set( 0, 0, 300 );

	var updateSize = function () {
		if (appConfig.useOrthoCamera) {
	    var width = container.offsetWidth, height = container.offsetHeight;
	    var viewSize = appConfig.viewSize;
	    var aspectRatio = width/height;
	    camera.left  = -aspectRatio * viewSize / 2;
	    camera.right =  aspectRatio * viewSize / 2;
	    camera.top   =  viewSize / 2;
	    camera.bottom= -viewSize / 2;
	    camera.near  = 1;
	    camera.far   = 1500;
			camera.aspect = aspectRatio;
			camera.updateProjectionMatrix();
		} else {
			camera.aspect = container.offsetWidth / container.offsetHeight;
			camera.updateProjectionMatrix();
		}
	};
	window.addEventListener( 'resize', updateSize, false );
	updateSize();

	return camera;
} );
