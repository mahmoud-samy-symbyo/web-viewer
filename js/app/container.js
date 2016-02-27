define( ["stats"], function (Stats) {
  //return document.getElementById( 'threejs-container' );

	// graphics container
	container = document.createElement( 'div' );
	document.body.appendChild( container );

	// stats
	stats = new Stats();
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.top = '0px';
	container.appendChild( stats.domElement );

	return container;
} );
