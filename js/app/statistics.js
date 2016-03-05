define( ["stats"], function (Stats) {
	var container = document.getElementById( 'container' );
	var stats = new Stats();
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.buttom = '0px';
	container.appendChild( stats.domElement );

	return stats;
} );
