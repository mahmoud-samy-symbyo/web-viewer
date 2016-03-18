({
	name: '../main',
	baseUrl: '../src/js/app',
	optimize: 'none',
	exclude: ['jquery'],
	mainConfigFile: '../src/js/config.js',
	out: '../dist/viewer.js',
	paths: {
		jquery: "../libs/jquery-1.12.1.min",
	}
})
