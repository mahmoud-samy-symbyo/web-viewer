define ( ["three","container"],
function ( THREE , container ) {
	var camera = new THREE.OrthographicCamera();
	var viewSize = 200;

	var setPosition = function(position){
			camera.position.copy(position);
	};

	var updateViewSize = function(newViewSize) {
		viewSize = newViewSize;
    var ev = new CustomEvent('resize');
    ev.initEvent('resize');
    window.dispatchEvent(ev);
	};

	var updateSize = function () {
		var width = container.offsetWidth, height = container.offsetHeight;
		var aspectRatio = width/height;
		camera.left  = -aspectRatio * viewSize / 2;
		camera.right =  aspectRatio * viewSize / 2;
		camera.top   =  viewSize / 2;
		camera.bottom= -viewSize / 2;
		camera.near  = 1;
		camera.far   = 1500;
		camera.aspect = aspectRatio;
		camera.updateProjectionMatrix();
	};
	window.addEventListener( 'resize', updateSize, false );
	updateSize();

	return {
		camera: camera,
		setPosition: setPosition,
		updateViewSize: updateViewSize
	};

} );
