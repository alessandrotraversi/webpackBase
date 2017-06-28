const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require('glob');
const helpers = require('./helpers');

module.exports = function (options) {
    isProd = options.env === 'production';
    return {
        entry: {
            app: './src/app.js',
            vendor: ['jquery', 'uikit']
        },

        resolve: {
            extensions: ['.ts', '.js']
        },

        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader'],
                        publicPath: '/dist'
                    })
                },
                {
                    test: /\.ts$/,
                    use: 'awesome-typescript-loader'
                },
                {
                    test: /\.html$/,
                    use: 'html-loader'
                },
                {
                    test: /\.pug$/,
                    use: ['html-loader', 'pug-html-loader?pretty=true']
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    use: [
                        'file-loader?name=images/[name].[ext]',
                        'image-webpack-loader?bypassOnDebug'
                    ]
                },
                {//verify
                    test: /\.(woff2?|ttf|svg|eot)$/i,
                    use: 'url-loader?name=fonts/[name].[ext]'
                }
            ]
        },

        plugins: [

            new webpack.optimize.CommonsChunkPlugin({
                name: ['app', 'vendor']
            }),

            new HtmlWebpackPlugin({
                template: 'src/app.pug',
                hash:true
            }),
            new ExtractTextPlugin({
                filename: '[name].css',
                disable: false,
                allChunks: true
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin(),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            })
        ]
    }
}