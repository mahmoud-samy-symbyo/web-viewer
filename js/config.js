// Configure Require.js
var require = {
  // Default load path for js files
  baseUrl: 'js/app',
  shim: {
    // --- Use shim to mix together all THREE.js subcomponents
    'threeCore': { exports: 'THREE' },
    'TrackballControls': { deps: ['threeCore'], exports: 'THREE' },
    'STLLoader': { deps: ['threeCore'], exports: 'THREE' },
    'PLYLoader': { deps: ['threeCore'], exports: 'THREE' },
    'OBJLoader': { deps: ['threeCore'], exports: 'THREE' },
    "CanvasRenderer": { deps: ['threeCore'], exports: 'THREE' },
    // --- end THREE sub-components
    'detector': { exports: 'Detector' },
    'stats': { exports: 'Stats' },
    'bootstrap': { deps: ['jquery'] }
  },
  // Third party code lives in js/lib
  paths: {
    // --- start THREE sub-components
    three: '../lib/three.config',
    threeCore: '../lib/three.min',
    TrackballControls: '../lib/controls/TrackballControls',
    STLLoader: '../lib/loaders/STLLoader',
    PLYLoader: '../lib/loaders/PLYLoader',
    OBJLoader: '../lib/loaders/OBJLoader',
    // --- end THREE sub-components
    detector: '../lib/Detector',
    stats: '../lib/stats.min',
    // Require.js plugins
    text: '../lib/text',
    shader: '../lib/shader',
    // Where to look for shader files
    shaders: '../shaders',
    // bootstrap & jquery
    bootstrap: ["//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min", "../lib/bootstrap.min"],
    jquery: ["//code.jquery.com/jquery-2.2.1.min", "../lib/jquery-2.2.1.min"]
  }
};
