define ( ["jquery","rsvp","three","require","STLLoader"],
function ( $      , RSVP , THREE , require , STLLoader ) {
  // Setup ThreeJs Loading Manager
  var loadingManager = new THREE.LoadingManager();
  var showLoading = function () {
    $(".loader").fadeIn("slow");
  };
  var stopLoading = function () {
    $(".loader").fadeOut("slow");
  };

  loadingManager.onLoad = function ( ) {
    //setTimeout(stopLoading, 500);
  };
  loadingManager.onProgress = function ( item, loaded, total ) {
  };
  loadingManager.onError = function ( ) {
  };

  // STL
  var stlLoader = new THREE.STLLoader(loadingManager);
  var loadStlGeometry = function (url) {
    return new RSVP.Promise(function(resolve, reject){
			stlLoader.load(
        url,
        function ( geometry ) { resolve(geometry); },
        function ( progress ) { console.log(progress);},
        function ( error    ) { reject(error);}
      );
	  });
	};

  var loadStlMesh = function(url, material ){
    return new RSVP.Promise(function(resolve, reject){
      loadStlGeometry(url).then(function(geometry){
        var mesh = new THREE.Mesh( geometry, material );
        resolve(mesh);
      });
    });
  };

  return {
    showLoading: showLoading,
    stopLoading: stopLoading,
    loadStlGeometry: loadStlGeometry,
    loadStlMesh: loadStlMesh,
  };

} );
