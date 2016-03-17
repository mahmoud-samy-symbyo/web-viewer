define( ["rsvp","three","appConfig","material","loadingManager","STLLoader"],
function( RSVP , THREE , appConfig , material , loadingManager ) {

  var stlLoader = new THREE.STLLoader(loadingManager);
  var namedMeshes = [];

  var centerfiy = function (mesh){
    var bbox = new THREE.Box3().setFromObject(mesh);
    var center = bbox.center();
    mesh.rotateX( -Math.PI/2 );
    mesh.translateX( -center.x );
    mesh.translateY( -center.y );
    mesh.translateZ( -center.z );
  };

  var loadStl = function (url) {
    return new RSVP.Promise(function(resolve, reject){
			stlLoader.load(
        url,
        function ( geometry ) { resolve(geometry); },
        function(progress){console.log(progress);},
        function(error) {reject(error);}
      );
	  });
	};

  var loadStlMesh = function(url, mat, setToCenter, name){
    return new RSVP.Promise(function(resolve, reject){
      loadStl(url).then(function(geometry){
        var mesh = new THREE.Mesh( geometry, mat );
        if (setToCenter) { centerfiy(mesh); }
        if (name) {
          if (namedMeshes[name]) {
            console.warn("mesh exists with the same name: "+ name);
          } else {
            namedMeshes[name] = mesh;
          }
        }
        resolve(mesh);
      });
    });
  };

  var getMesh = function(name){
    if (!!!namedMeshes[name]) {
      console.error("mesh doesn't exists: "+ name);
    }
    return namedMeshes[name];
  };

  var getViewSize = function(name){
    if (namedMeshes[name]) {
      var bbox = new THREE.Box3().setFromObject(namedMeshes[name]);
      var dis = bbox.min.distanceTo(bbox.max);
      return dis;
    }
    return  appConfig.viewSize;
  };

  return {
    loadStlMesh: loadStlMesh,
    getMesh: getMesh,
    getViewSize: getViewSize
  };

} );
