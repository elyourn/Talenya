const path = require('path');
const { extractSass } = require('./plugins');

const rulesCss = {
    test: /\.scss|.css$/,
    use: extractSass.extract({
        use: [
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                    minimize: true,
                    sourceMap: true,
                    camelCase: true,
                    importLoaders: 3,
                    localIdentName: '[name]_[local]_[hash:base64]',
                },
            },
            {
                loader: 'postcss-loader',
            },
            {
                loader: 'resolve-url-loader',
                options: { silent: true },
            },
            {
                loader: 'sass-loader',
            },
        ],
        fallback: { loader: 'style-loader', options: { hmr: false, attrs: { rel: 'preload' } } },
    }),
};

module.exports = {
    rulesCss,
};
