const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const packageJSON = require('./../package.json');

const { PATH_SRC, PATH_DIST, PATH_SRC_INDEX } = require('./constants');

const { rulesCss } = require('./rules');
const { extractSass } = require('./plugins');

const CONFIG = {
    context: path.resolve(__dirname, PATH_SRC),
    entry: [PATH_SRC_INDEX],
    output: {
        path: PATH_DIST,
    },
    resolve: {
        modules: [PATH_SRC, 'node_modules'],
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                include: [PATH_SRC],
                exclude: /node_modules/,
            },
            rulesCss,
            {
                test: /\.pug$/,
                loader: 'pug-loader',
            },
        ],
    },
    plugins: [
        extractSass,
        new HtmlWebpackPlugin({
            template: `${PATH_SRC}/index.pug`,
            inject: true,
            minify: {
                removeComments: false,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                collapseInlineTagWhitespace: true,
            },
        }),
    ],
};

module.exports = CONFIG;
