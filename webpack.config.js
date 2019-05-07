const path = require('path');

module.exports = {

    mode: "pruduction",
    entry: "./app/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "ace.bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
        ]}
}