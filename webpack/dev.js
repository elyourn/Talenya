const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');

const CONFIG = require('./common');

const { DEVELOPMENT, PATH_DIST } = require('./constants');

const HOST = process.env.HOST || 'localhost';
const PORT = 3000;

module.exports = webpackMerge(CONFIG, {
    mode: DEVELOPMENT,
    output: {
        filename: '[name].js',
        publicPath: '/',
    },
    devtool: 'eval-source-map',
    devServer: {
        hot: true,
        host: HOST,
        port: PORT,
        open: true,
        contentBase: PATH_DIST,
        historyApiFallback: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.SourceMapDevToolPlugin()],
});
