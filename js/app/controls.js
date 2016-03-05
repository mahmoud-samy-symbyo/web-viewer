define( ["three", "camera", "container", "datgui", "renderer", "TrackballControls"],
	function( THREE, camera, container, dat, renderer) {
	// "OrbitControls"
	/*
	controls = new THREE.OrbitControls( camera, renderer.domElement );
	controls.minDistance = 50;
	controls.maxDistance = 200;
	return controls;
	*/

	// "TrackballControls"

	var controls = new THREE.TrackballControls( camera, renderer.domElement  );
	controls.rotateSpeed = 1.0;
	controls.zoomSpeed = 1.2;
	controls.panSpeed = 0.8;
	controls.noZoom = false;
	controls.noPan = false;
	controls.staticMoving = true;
	controls.dynamicDampingFactor = 0.3;
	controls.keys = [ 65, 83, 68 ];
	return controls;

	// "TransformControls"
	/*
	var control = new THREE.TransformControls( camera, renderer.domElement );
	//control.addEventListener( 'change', render );

	var Options = function() {
		this.world 			= false;
		this.rotate    	= function() { control.setMode( "rotate" ); };
		this.translate 	= function() { control.setMode( "translate" ); };
	};
	var options = new Options();

  var gui = new dat.GUI();
	var isWorld = gui.add(options, 'world')
  gui.add(options, 'rotate');
  gui.add(options, 'translate');

	isWorld.onFinishChange(function(value) {
	  control.setSpace( options.world ? "world" : "local" );
	});

	return control;
	*/
} );
