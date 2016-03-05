// Configure Require.js
var require = {
  baseUrl: 'js/app',
  shim: {
    'threeCore': { exports: 'THREE' },
    'TrackballControls': { deps: ['threeCore'], exports: 'THREE' },
    'OrbitControls': { deps: ['threeCore'], exports: 'TREE' },
    'TransformControls': { deps: ['threeCore'], exports: 'TREE' },
    'STLLoader': { deps: ['threeCore'], exports: 'THREE' },
    'PLYLoader': { deps: ['threeCore'], exports: 'THREE' },
    'OBJLoader': { deps: ['threeCore'], exports: 'THREE' },
    'Projector': { deps: ['threeCore'], exports: 'THREE' },
    'detector': { exports: 'Detector' },
    'stats': { exports: 'Stats' },
    'datgui': { exports: 'dat' }
  },
  // Third party code lives in js/lib
  paths: {
    three: '../lib/three.config',
    threeCore: '../lib/three',
    TrackballControls: '../lib/controls/TrackballControls',
    OrbitControls: '../lib/controls/OrbitControls',
    TransformControls: '../lib/controls/TransformControls',
    STLLoader: '../lib/loaders/STLLoader',
    PLYLoader: '../lib/loaders/PLYLoader',
    OBJLoader: '../lib/loaders/OBJLoader',
    detector: '../lib/Detector',
    stats: '../lib/stats.min',
    datgui: '../lib/dat.gui.min',
    text: '../lib/text',
    shader: '../lib/shader',
    shaders: '../shaders',
    jquery: ["//code.jquery.com/jquery-2.2.1.min", "../lib/jquery-2.2.1.min"]
  }
};
