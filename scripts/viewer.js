

if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var container, stats;
var camera, raycaster, scene, renderer, meshControl, trackballControls;
var mesh1, mesh2;
var mouse = new THREE.Vector2(), INTERSECTED;

init();
animate();

function init() {

	
	
	// control
	/*
	meshControl = new THREE.TransformControls( camera, renderer.domElement );
	meshControl.addEventListener( 'change', render );
	scene.add( meshControl );
	*/

	// raycaster
	raycaster = new THREE.Raycaster();

	//window.addEventListener( 'keydown', onWindowKeyDown);
	//window.addEventListener( 'keyup', onWindowKeyUp);
	//container.addEventListener( 'mousedown', onContainerMouseDown , false);
}
