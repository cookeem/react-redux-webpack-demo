var path = require('path');

var config = {
	entry: './index.js',
    output: {
        path: path.resolve(__dirname, './js'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [ {
            test: /.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
		}]
    }
};

module.exports = config;
