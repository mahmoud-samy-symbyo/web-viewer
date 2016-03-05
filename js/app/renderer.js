define( ["three", "container", "controls"], function ( THREE, container, controls ) {

  //container.innerHTML = "";
  var renderer = new THREE.WebGLRenderer( { antialias: false } );

  renderer.setClearColor( 0x9F9F9F );
  if (window.devicePixelRatio) {
    // There are no callbacks or events to listen to when this value changes (for example, if you drag the window between displays with different densities).
    renderer.setPixelRatio( window.devicePixelRatio );
  }
  renderer.setSize( container.offsetWidth, container.offsetHeight );

  //renderer.sortObjects = false;
  //renderer.autoClear = true;

  //renderer.setClearColor( 0x9F9F9F );
  //renderer.setPixelRatio( window.devicePixelRatio );
  //renderer.setSize( window.innerWidth, window.innerHeight );
  container.appendChild( renderer.domElement );

  var updateSize = function () {
    renderer.setSize( container.offsetWidth, container.offsetHeight );
  };
  window.addEventListener( 'resize', updateSize, false );
  updateSize();

  return renderer;
} );
