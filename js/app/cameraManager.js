define( ["three", "container", "appConfig", "camera", "scene"], function ( THREE, container, appConfig, camera, scene ) {

	 var pointTo = function (mesh){
     //mesh.scale.set( 0.005, 0.005, 0.005 );
     var bbox = new THREE.Box3().setFromObject(mesh);
     var center = bbox.center();
     //mesh.scale(2,2,2);
     mesh.rotateX( -Math.PI/2 );
     mesh.translateX( -center.x );
     mesh.translateY( -center.y );
     mesh.translateZ( -center.z );
     scene.add( mesh );
     //controls.attach( mesh );
     //scene.add( controls );
   }

   return {
     pointTo: pointTo
   };
} );
