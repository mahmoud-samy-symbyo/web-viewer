define( ["three", "STLLoader"], function ( THREE ) {
  
 	/*
	var plyLoader = new THREE.PLYLoader();
	plyLoader.load( 'orders/demo-s.ply', function ( geometry ) {
		var mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( -100, 0, 0 );
		mesh.rotation.set( - Math.PI/2 , 0, 0 );
		//mesh.scale.set( 0.005, 0.005, 0.005 );
		mesh1 = mesh;
		scene.add( mesh );
	} );
	stlLoader.load( 'orders/62692.stl', function ( geometry ) {
        var mesh = new THREE.Mesh( geometry, material.phong );
        mesh.position.set( 0, 0, 0 );
        mesh.rotation.set( - Math.PI/2 , 0, 0 );
        //mesh.scale.set( 0.005, 0.005, 0.005 );
        scene.add( mesh );
      } );
	*/

	var stlLoader = new THREE.STLLoader();	
	return stlLoader;
} );