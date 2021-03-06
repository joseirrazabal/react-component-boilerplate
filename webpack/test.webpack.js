var path = require('path')
var webpack = require('webpack')

const rootFolder = path.resolve(__dirname, '..')

module.exports = {
	context: rootFolder,

	resolveLoader: {
		modules: [path.join(rootFolder, 'node_modules')],
		moduleExtensions: ['-loader'],
	},

	resolve: {
		modules: [path.resolve(rootFolder, 'src'), 'node_modules'],
		descriptionFiles: ['package.json'],
		moduleExtensions: ['-loader'],
		extensions: ['.js', '.jsx', '.scss', '.css']
	},

	module: {
		rules: [
      // {
      //   enforce: "pre",
      //   test: /\.jsx$/,
      //   // test: /\.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   loader: "eslint-loader",
      // },
			{
				test: /\.(js|jsx)$/,
				use: "babel-loader",
				exclude: [/node_modules/]
			},
			{
				test: /\.(css|scss)$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							localIdentName: '[local]',
							modules: true
						}
					},
					'resolve-url-loader',
					'sass-loader?sourceMap',
					{
						loader: 'sass-resources-loader',
						options: {
							resources: [ path.resolve(rootFolder, 'node_modules/aln-globalStyle/lib/scss/main.scss') ]
						},
					},
				]
			},
			{
				test: /\.png$/,
				loader: "url-loader?limit=100000"
			},
			{
				test: /\.jpg$/,
				loader: "file-loader"
			},
			{
				test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=10000&mimetype=application/font-woff'
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=10000&mimetype=application/octet-stream'
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file'
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url?limit=10000&mimetype=image/svg+xml'
			}
		],
	},

	plugins: [
		new webpack.DefinePlugin({'process.env': { NODE_ENV: '"development"' }}),
		new webpack.NamedModulesPlugin(),
	],

	node: {
		fs: 'empty',
		vm: 'empty',
		net: 'empty',
		tls: 'empty'
	}
}
