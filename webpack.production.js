var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var browserConfig = {
    mode: "production",
    entry: {
        bundleJS: [
            path.resolve(__dirname, "src/browser/index.jsx")
        ],
        bundleCSS: [
            path.resolve(__dirname, "src/browser/css/cardgame.scss")
            // ,
            // path.resolve(__dirname, "src/browser/css/navbar.css")
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
        })
    ]
};

const webpackNodeExternals = require('webpack-node-externals');

var serverConfig = {
    mode: "production",
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
    plugins: []
};

module.exports = [browserConfig, serverConfig];