define( ["three"], function ( THREE ) {
  var loadingManager = new THREE.LoadingManager();
  loadingManager.onLoad = function ( ) {
  	console.log( "onLoad" );
    debugger;
  };
  loadingManager.onProgress = function ( item, loaded, total ) {
  	console.log( item, loaded, total );
  };
  loadingManager.onError = function ( ) {
    console.log( "onError" );
    debugger;
  };
  return loadingManager;
} );
