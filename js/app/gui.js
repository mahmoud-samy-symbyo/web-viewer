define( ["datgui", "appConfig"], function( dat, appConfig ) {
	var gui = new dat.GUI();
  var viewSizeChanged = gui.add(appConfig, 'viewSize', 50, 250).listen();

	viewSizeChanged.onFinishChange(function (){
		// TODO: fix for Internet Explorer
		var ev = new CustomEvent('resize');
		ev.initEvent('resize');
		window.dispatchEvent(ev);
	});
} );
