define( ["three", "loadingManager", "STLLoader"], function ( THREE, loadingManager ) {
	var stlLoader = new THREE.STLLoader(loadingManager);
	return stlLoader;
} );
