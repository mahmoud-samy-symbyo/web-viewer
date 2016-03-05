define( ["three", "container", "controls"], function ( THREE, container, controls ) {
  var renderer = new THREE.WebGLRenderer( { antialias: true } );
  //renderer.sortObjects = false;
  //renderer.autoClear = true;
  renderer.setClearColor( 0x000000 );
  container.appendChild( renderer.domElement );

  var updateSize = function () {
    if (window.devicePixelRatio) {
      // There are no callbacks or events to listen to when this value changes
      // (for example, if you drag the window between displays with different densities).
      renderer.setPixelRatio( window.devicePixelRatio );
    }
    renderer.setSize( container.offsetWidth, container.offsetHeight );
  };
  window.addEventListener( 'resize', updateSize, false );
  updateSize();

  return renderer;
} );
