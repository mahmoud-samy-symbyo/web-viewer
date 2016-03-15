define( ["rsvp", "three", "loadingManager", "STLLoader"], function ( RSVP, THREE, loadingManager ) {
	var stlLoader = new THREE.STLLoader(loadingManager);

	return function(url) {
	  var promise = new RSVP.Promise(function(resolve, reject){
				try {
					stlLoader.load( url, function ( geometry ) {
						resolve(geometry);
					} );
				} catch (e) {
					reject(e);
				}
	  });
	  return promise;
	};

} );
