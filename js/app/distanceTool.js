define( ["three","camera","scene","meshesManager","renderer"],
function( THREE , camera , scene , meshesManager , renderer ){
  // Measurement Code
  var line;
  var mouse = new THREE.Vector2();
  var raycaster = new THREE.Raycaster();
  var pointA = new THREE.Vector3( 0, 1, 0 );
  var pointB = new THREE.Vector3();
  var markerA = new THREE.Mesh(
    new THREE.SphereGeometry( 0.1, 16, 16 ),
    new THREE.MeshBasicMaterial( { color: 0x5555FF, depthTest: false, depthWrite: false } ) );
  var markerB = markerA.clone();
  scene.add( markerA );
  scene.add( markerB );

  function getLine( vectorA, vectorB ) {
    var geometry = new THREE.Geometry();
    geometry.vertices.push( vectorA );
    geometry.vertices.push( vectorB );
    var material = new THREE.LineBasicMaterial({
      color: 0x5555FF,
      depthWrite: false,
      depthTest: false
    });
    line = new THREE.Line( geometry, material );
    return line;
  }

  function onMouseUp( event ) {
    mouse.x =   ( event.clientX / renderer.domElement.width  ) * 2 - 1;
    mouse.y = - ( event.clientY / renderer.domElement.height ) * 2 + 1;
    raycaster.setFromCamera( mouse, camera );
    var model = meshesManager.getMesh('mainMesh');
    var intersects = raycaster.intersectObjects( [model], true );

    if( intersects.length > 0 ){

      if ( ! pointB.equals( pointA ) ) {
        pointB = intersects[ 0 ].point;
      } else {
        pointB = pointA;
      }
      pointA = intersects[ 0 ].point;
      markerA.position.copy( pointA );
      markerB.position.copy( pointB );

      var distance = pointA.distanceTo( pointB );

      if ( line instanceof THREE.Line ) {
        scene.remove( line );
      }
      if ( distance > 0 ) {
        console.log( "distance", distance );
  			line = getLine( pointA, pointB );
        scene.add(line);
      }
    }
  }
  window.addEventListener( 'mouseup', onMouseUp, false );
} );
