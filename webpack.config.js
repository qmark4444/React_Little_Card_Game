var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin'); // replaced by mini-css-extract-plugin after webpack v4
// const extractCSS = new ExtractTextPlugin('css/[name].css'); 
// const extractSASS = new ExtractTextPlugin('css/sass-bundle.css');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';

var browserConfig = {
    mode: "development",
    entry: {
        bundleJS: [
            path.resolve(__dirname, "src/browser/index.jsx")
        ],
        bundleCSS: [
            path.resolve(__dirname, "src/browser/css/cardgame.scss"),
            path.resolve(__dirname, "src/browser/css/navbar.css")
        ]
    },
    output: {
        path: __dirname + '/public',
        filename: 'js/[name].js',
    },
    target: 'web', 
    devtool: '#sourcemap',
    stats: {
        colors: true,
        reasons: true
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: process.env.NODE_ENV === 'development',
                    },
                },
                'css-loader',
                'sass-loader',
                ],
            },

            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss'] 
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css', 
        }),
    //     new webpack.DefinePlugin({
    //         isBrowser: "true" //added to global namespace, can be called in any React component
    //                              // I think should avoid this (in React component hard to know where it comes from???)
    //     }),
    //     new HtmlWebpackPlugin({
    //         template: 'home.html'
    //     })
    ]
};

const webpackNodeExternals = require('webpack-node-externals');
var serverConfig = {
    mode: "development",
    entry: './src/server/index.js',
    target: 'node',//compile for usage in a “Node.js like environment” and also helps externals know what to ignore (built in node modules like path, fs, etc)
    externals: [webpackNodeExternals()],//so the servers node_modules aren’t bundled with it
    output: {
        path: __dirname,
        filename: 'server.js',
        publicPath: '/' 
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    },
    resolve: { //must have this, otherwise webpack can't find the module without extension (.jsx implicitly)
        extensions: ['*', '.js', '.jsx'] //webpack 2. can remove '' or '*'
    },
    plugins: [
        new webpack.DefinePlugin({
            isBrowser: "false"
        })
    ]
};

module.exports = [browserConfig, serverConfig];