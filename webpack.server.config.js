var path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
var serverConfig = {
    mode: 'development',//webpack v2.xxx: an unknown property 'mode'.
    entry: './src/server/index.js',
    target: 'node',//compile for usage in a “Node.js like environment” and also helps externals know what to ignore (built in node modules like path, fs, etc)
    externals: [webpackNodeExternals()],//so the servers node_modules aren’t bundled with it
    output: {
        path: __dirname,
        filename: 'server.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
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

module.exports = [serverConfig];