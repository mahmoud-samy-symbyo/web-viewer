({
	name: 'webviewer',
	baseUrl: '../src',
	optimize: 'uglify2',
	//exclude: ['jquery'],
	include: ['requireLib'],
	mainConfigFile: '../src/config.js',
	paths: {
		//jquery: "../libs/jquery-1.12.1.min",
		requireLib: "../modules/require",
		webviewer: "../src/webviewer"
	}
})
