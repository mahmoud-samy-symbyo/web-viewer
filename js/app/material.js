define( ["three"], function ( THREE ) {

  return {
    wire: new THREE.MeshBasicMaterial( { wireframe: true } ),
    solid: new THREE.MeshLambertMaterial( { color: 0xdcdcdc }),
    phong: new THREE.MeshPhongMaterial( { color: 0xFFFFFF, specular: 0x999999, shininess: 20 } )
  };

} );
