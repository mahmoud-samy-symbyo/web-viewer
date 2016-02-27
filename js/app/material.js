define( ["three"], function ( THREE ) {

  return {
    phong: new THREE.MeshPhongMaterial( { color: 0xFFFFFF, specular: 0x999999, shininess: 200 } ),
    solid: new THREE.MeshLambertMaterial( { color: 0xdcdcdc }),
    wire: new THREE.MeshBasicMaterial( { wireframe: true } )
  };
  
} );
