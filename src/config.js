var require = {
  baseUrl: 'src',
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
  // 3rd party modules
  paths: {
    three: '../modules/three.config',
    threeCore: '../modules/three',
    TrackballControls: '../modules/controls/TrackballControls',
    OrbitControls: '../modules/controls/OrbitControls',
    TransformControls: '../modules/controls/TransformControls',
    STLLoader: '../modules/loaders/STLLoader',
    PLYLoader: '../modules/loaders/PLYLoader',
    OBJLoader: '../modules/loaders/OBJLoader',
    detector: '../modules/Detector',
    stats: '../modules/stats.min',
    datgui: '../modules/dat.gui.min',
    text: '../modules/text',
    shader: '../modules/shader',
    shaders: '../shaders',
    jquery: "../modules/jquery-1.12.1.min",
    rsvp: '../modules/rsvp-latest.min'
  }
};
