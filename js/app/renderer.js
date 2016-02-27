define( ["three", "container", "controls"], function ( THREE, container, controls ) {
/*
  container.innerHTML = "";
  var renderer = new THREE.WebGLRenderer( { clearColor: 0x000000 } );
  renderer.sortObjects = false;
  renderer.autoClear = false;
  container.appendChild( renderer.domElement );

  var updateSize = function () {
    renderer.setSize( container.offsetWidth, container.offsetHeight );
  };
  window.addEventListener( 'resize', updateSize, false );
  updateSize();

  return renderer;
*/
  var renderer = new THREE.WebGLRenderer( { antialias: false } );
  renderer.setClearColor( 0x9F9F9F );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  container.appendChild( renderer.domElement );

  var updateSize = function () {
    renderer.setSize( container.offsetWidth, container.offsetHeight );
    //controls.update();
  };
  window.addEventListener( 'resize', updateSize, false );
  updateSize();

  return renderer;
} );
