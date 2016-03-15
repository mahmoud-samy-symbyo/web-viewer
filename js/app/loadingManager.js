define( ["three", "scene"], function ( THREE, scene ) {
  var textMesh;
  var fontLoader = new THREE.FontLoader();
  fontLoader.load( 'js/fonts/helvetiker_bold.typeface.js', function ( font ) {
    var materialFront = new THREE.MeshBasicMaterial( { color: 0xffffff } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var materialArray = [ materialFront, materialSide ];
    var textGeom = new THREE.TextGeometry( "Loading ...", {
      font: font, size: 10
    });

    var textMaterial = new THREE.MeshFaceMaterial(materialArray);
    textMesh = new THREE.Mesh( textGeom, textMaterial );

    textGeom.computeBoundingBox();
    var textWidth = textGeom.boundingBox.max.x - textGeom.boundingBox.min.x;

    textMesh.position.set( -0.5 * textWidth, 0, 0 );
    //textMesh.rotation.x = -Math.PI / 4;
    scene.add(textMesh);
  });

  var loadingManager = new THREE.LoadingManager();
  loadingManager.onLoad = function ( ) {
    if(textMesh) {
      scene.remove(textMesh);
    }
  };
  loadingManager.onProgress = function ( item, loaded, total ) {
  };
  loadingManager.onError = function ( ) {
  };

  return loadingManager;
} );
