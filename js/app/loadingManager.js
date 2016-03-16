define( ["jquery", "three"], function ( $, THREE ) {
  var loadingManager = new THREE.LoadingManager();
  loadingManager.onLoad = function ( ) {
    setTimeout(function(){
      $(".loader").fadeOut("slow");
    }, 3000);
  };
  loadingManager.onProgress = function ( item, loaded, total ) {
  };
  loadingManager.onError = function ( ) {
  };

  return loadingManager;
} );
