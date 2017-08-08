module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: [
			'test/test.js',
		],
		exclude: [
		],
		preprocessors: {
			"test/test.js": ["webpack", "sourcemap"]
		},
		webpack: require("./webpack/test.webpack.js"),
		webpackMiddleware: {
			stats: "errors-only",
			noInfo: true
		},
		reporters: ['spec'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['Chrome'],
		singleRun: false,
		concurrency: Infinity,
		browserNoActivityTimeout: 60000, // 60 seconds
	})
}
