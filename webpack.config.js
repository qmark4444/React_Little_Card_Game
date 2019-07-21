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
        extensions: ['*', '.js', '.jsx', '.scss']
    }
}