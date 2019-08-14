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
    entry: "./src/browser/index.jsx",
    output: {
        path: __dirname + '/public',
        // filename: '/js/bundle.js',//not work
        filename: 'js/bundle.js',
    },
    target: 'web', 
    devtool: '#sourcemap',
    stats: {
        colors: true,
        reasons: true
    },
    module: {
        rules: [
            // { 
            //     test: /\.css$/, 
            //     // loader: 'style-loader!css-loader'

            //     // use: 'style-loader!css-loader' //execute order: right to left
            //     // use: ['isomorphic-style-loader', {loader: 'style-loader!css-loader'}]

            //     use: extractCSS.extract({
            //         // use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: ['css-loader']
            //     })
            // },
            // {
            //     test: /\.scss$/,
                
            //     //separate css from js bundle, to avoid cache issue.
            //     // use: [ 
            //     //     //execute order: bottom to top
            //     //     'style-loader', // creates style nodes from JS strings
            //     //     'css-loader', // translates CSS into CommonJS
            //     //     'sass-loader' // compiles Sass to CSS, using Node Sass by default
            //     // ]

            //     use: extractSASS.extract({
            //         // use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: ['css-loader', 'sass-loader']
            //     })
            // },

            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: './public/css',//no effect
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
        // new ExtractTextPlugin({
        //     filename: 'css/bundle.css'
        // })
        // extractCSS,
        // extractSASS

        new MiniCssExtractPlugin({
            // filename: devMode ? 'css/[name].css' : '[name].[hash].css',
            filename: 'css/bundle.css', 
            // chunkFilename: devMode ? 'css/[id].css' : '[id].[hash].css',
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