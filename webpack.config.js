module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: __dirname + '/js',
        filename: 'bundle.js'
    },
    devtool: '#sourcemap',
    stats: {
        colors: true,
        reasons: true
    },
    module: {
        loaders: [
            { 
                test: /\.css$/, 
                loader: 'style-loader!css-loader' 
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: ['babel-loader'],
                // query:
                // options:
                // {
                //     presets:['react']
                // }//Error: options/query cannot be used with loaders (use options for each array item)
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.scss']
    }
}