const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src'),
	],
  module: {
		loaders: [
      {
        test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
        include: path.join(__dirname, 'src')
			},
		]
	},
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
}
