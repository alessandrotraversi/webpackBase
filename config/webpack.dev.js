const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';

module.exports = function (options) {
    return webpackMerge(commonConfig({env: ENV}), {
        devtool: 'cheap-module-eval-source-map',

        output: {
            path: helpers.root('dist'),
            publicPath: 'http://localhost:8080/',
            filename: '[name].js',
            chunkFilename: '[id].chunk.js'
        },

        devServer: {
            historyApiFallback: true,
            compress: true,
            hot: true,
            open: true,
            stats: 'minimal'
        }
    })
}