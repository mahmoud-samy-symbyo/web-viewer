define( ["three", "scene"], function ( THREE, scene ) {
	var hemisphereLight = new THREE.HemisphereLight( 0xFFFFFF, 0xBBBBBB );
	scene.add( hemisphereLight );
	return hemisphereLight;
} );
