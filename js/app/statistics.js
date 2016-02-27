define( ["container", "stats"], function (container, Stats) {
	// stats
	var stats = new Stats();
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.top = '0px';
	container.appendChild( stats.domElement );

	return stats;
} );
