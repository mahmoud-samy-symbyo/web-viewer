function onWindowKeyUp (event) {
	switch ( event.keyCode ) {
		//case 17: // Ctrl
		//	meshControl.setTranslationSnap( null );
		//	meshControl.setRotationSnap( null );
		//	break;
	}
}
function onWindowKeyDown( event ) {
	switch ( event.keyCode ) {
		/*
		case 81: // Q
			meshControl.setSpace( meshControl.space === "local" ? "world" : "local" );
			break;

		case 17: // Ctrl
			meshControl.setTranslationSnap( 100 );
			meshControl.setRotationSnap( THREE.Math.degToRad( 15 ) );
			break;

		case 87: // W
			meshControl.setMode( "translate" );
			break;

		case 69: // E
			meshControl.setMode( "rotate" );
			break;

		case 49: // 1
			meshControl.attach( mesh1 );
			break;
		case 50: // 2
			//meshControl.attach( mesh2 );
			break;

		case 82: // R
			meshControl.setMode( "scale" );
			break;

		case 187:
		case 107: // +, =, num+
			meshControl.setSize( meshControl.size + 0.1 );
			break;

		case 189:
		case 109: // -, _, num-
			meshControl.setSize( Math.max( meshControl.size - 0.1, 0.1 ) );
			break;
		*/
	}
}
function onContainerMouseDown(event){
	event.preventDefault();

	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

	// find intersections
	raycaster.setFromCamera( mouse, camera );
	var intersects = raycaster.intersectObjects( scene.children );
	console.log(intersects);
	if ( intersects.length > 0 ) {
		meshControl.attach( intersects[0].object );
		/*if ( INTERSECTED != intersects[ 0 ].object ) {

			if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

			INTERSECTED = intersects[ 0 ].object;
			INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
			INTERSECTED.material.emissive.setHex( 0xff0000 );
		}*/
	} else {
		//if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
		//INTERSECTED = null;
		meshControl.unattach();
	}
}

function onWindowResize() {
	//camera.aspect = window.innerWidth / window.innerHeight;
	//camera.updateProjectionMatrix();

	//renderer.setSize( window.innerWidth, window.innerHeight );

	trackballControls.handleResize();
	render();
}

function animate() {
	requestAnimationFrame( animate );
	stats.update();
	trackballControls.update();
	render();
}

function render() {
	//meshControl.update();
	renderer.render( scene, camera );
}
