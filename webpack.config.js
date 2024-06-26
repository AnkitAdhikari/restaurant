const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development', // OR 'production'
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    entry: {
        index: './src/index.js',
        menu: './src/menu.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|webp|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};