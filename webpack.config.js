const path = require('path');

module.exports = {

    mode: "development",
    entry: "./app/app.js",
    devtool: 'eval-source-map',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "ace.bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: function () {
                            return [
                                require('autoprefixer')
                            ];
                        }
                    }
                },
                {
                    loader: 'sass-loader',
                }
                ]
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
            }
        ]
    }
}