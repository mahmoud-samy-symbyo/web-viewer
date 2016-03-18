({
	name: '../main',
	baseUrl: '../src/js/app',
	optimize: 'uglify2',
	exclude: ['jquery'],
	mainConfigFile: '../src/js/config.js',
	out: '../redist/viewer.min.js',
	paths: {
		jquery: "../libs/jquery-1.12.1.min",
	}
})
