// Configure Require.js
var require = {
  baseUrl: '../src/viewer',
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
    three: '../libs/three.config',
    threeCore: '../libs/three',
    TrackballControls: '../libs/controls/TrackballControls',
    OrbitControls: '../libs/controls/OrbitControls',
    TransformControls: '../libs/controls/TransformControls',
    STLLoader: '../libs/loaders/STLLoader',
    PLYLoader: '../libs/loaders/PLYLoader',
    OBJLoader: '../libs/loaders/OBJLoader',
    detector: '../libs/Detector',
    stats: '../libs/stats.min',
    datgui: '../libs/dat.gui.min',
    text: '../libs/text',
    shader: '../libs/shader',
    shaders: '../shaders',
    jquery: "../libs/jquery-1.12.1.min",
    rsvp: '../libs/rsvp-latest.min'
  }
};
