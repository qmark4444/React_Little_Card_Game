var path = require('path');
// var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const TerserPlugin = require('terser-webpack-plugin');
// module.exports = {
//   mode: 'production',
//   optimization: {
//     minimizer: [new TerserPlugin({ /* additional options here */ })],
//   },
// };

// var browserConfig = {
module.exports = {
    mode: 'development',//an unknown property 'mode'.
    //change to production: https://webpack.js.org/guides/production/
    // https://reactjs.org/docs/optimizing-performance.html#use-the-production-build
    entry: "./src/browser/index.jsx",
    output: {
        // path: __dirname + '/public/js',
        // filename: 'bundle.js'
        //path: path.resolve(__dirname, 'public/js'),//file path
        filename: 'bundle.js',
        //publicPath: '/' //not file path
    },
    // devtool: '#sourcemap',
    // stats: {
    //     colors: true,
    //     reasons: true
    // },
    devServer: {
        contentBase: path.join(__dirname),
        compress: true,
        port: 8080,
        historyApiFallback: true
    },
    module: {
        loaders: [
            { 
                test: /\.css$/, 
                loader: 'style-loader!css-loader' //execute order: right to left
            },
            {
                test: /\.scss$/,
                use: [
                    //execute order: bottom to top
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader' // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: ['babel-loader'],
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.scss'] //webpack 2. can remove '' or '*'
    },
    plugins: [
        new webpack.DefinePlugin({
            isBrowser: "true"
        }),
        new HtmlWebpackPlugin({
            template: 'public/home.html'
        })
    ]
};

// const webpackNodeExternals = require('webpack-node-externals');
// var serverConfig = {
//     // mode: 'development',//an unknown property 'mode'.
//     entry: './src/server/index.js',
//     target: 'node',//compile for usage in a “Node.js like environment” and also helps externals know what to ignore (built in node modules like path, fs, etc)
//     externals: [webpackNodeExternals()],//so the servers node_modules aren’t bundled with it
//     output: {
//         path: __dirname,
//         filename: 'server.js',
//         //publicPath: '/' 
//     },
//     module: {
//         // rules: [
//         //     { test: /\.(js)$/, use: 'babel-loader' }
//         // ]
//         loaders: [
//             {
//                 test: /\.jsx?$/,
//                 exclude: /(node_modules)/,
//                 loader: 'babel-loader'
//             }
//         ]
//     },
//     resolve: { //must have this, otherwise webpack can't find the module without extension (.jsx implicitly)
//         extensions: ['*', '.js', '.jsx'] //webpack 2. can remove '' or '*'
//     },
//     plugins: [
//         new webpack.DefinePlugin({
//             isBrowser: "false"
//         })
//     ]
// };

// module.exports = [browserConfig, serverConfig];