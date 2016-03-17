define( ["jquery", "three"], function ( $, THREE ) {
  var loadingManager = new THREE.LoadingManager();
  loadingManager.onLoad = function ( ) {
    setTimeout(function(){
      var ev = new CustomEvent('resize');
      ev.initEvent('resize');
      window.dispatchEvent(ev);
      $(".loader").fadeOut("slow");
    }, 500);
  };
  loadingManager.onProgress = function ( item, loaded, total ) {
  };
  loadingManager.onError = function ( ) {
  };

  return loadingManager;
} );
