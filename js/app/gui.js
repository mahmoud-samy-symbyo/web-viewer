define( ["datgui","appConfig", "meshesManager"],
function( dat    , appConfig ,  meshesManager ) {
	var gui = new dat.GUI();

	controller = gui.add(appConfig, 'mode', [ 'Move', 'Measure' ] );
	/*controller.onChange(function(value) {
	  // Fires on every change, drag, keypress, etc.
	});*/

	return gui;
} );
