const path = require('path');
const { merge } = require('webpack-merge'); // eslint-disable-line
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: '#@cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
    },
});
