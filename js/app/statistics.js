define( ["container", "stats"], function (container, Stats) {

	var stats = new Stats();
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.buttom = '0px';
	container.appendChild( stats.domElement );
	
	return stats;
} );
