const ExtractTextPlugin = require('extract-text-webpack-plugin');

const { IS_DEV } = require('./constants');

const extractSass = new ExtractTextPlugin({
    filename: '[name].[md5:contenthash:hex:20].css',
    disable: IS_DEV,
    allChunks: true,
});

module.exports = {
    extractSass,
};
