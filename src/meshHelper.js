define(    ["three"],
  function ( THREE ) {

    var namedMeshes = [];
    var center = function (mesh){
      var bbox = new THREE.Box3().setFromObject(mesh);
      var center = bbox.center();
      mesh.rotateX( -Math.PI/2 );
      mesh.translateX( -center.x );
      mesh.translateY( -center.y );
      mesh.translateZ( -center.z );
    };

    var getMeshSize = function(mesh){
      var bbox = new THREE.Box3().setFromObject(mesh);
      var dis = bbox.min.distanceTo(bbox.max);
      return dis;
    };

    var getMesh = function(name){
      if (!!!namedMeshes[name]) {
        console.error("mesh doesn't exists: "+ name);
      }
      return namedMeshes[name];
    };

    var saveMesh = function(mesh, name){
      if (name) {
        if (namedMeshes[name]) {
          console.warn("mesh exists with the same name: "+ name);
        }
        namedMeshes[name] = mesh;
      }
    };

    return {
      center: center,
      getMeshSize: getMeshSize,
      saveMesh: saveMesh,
      getMesh: getMesh
    };

} );
