const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Weather App',
        }),
        new ESLintWebpackPlugin(),
    ],
    devServer: {
        static: './dist',
    },
    devtool: 'inline-source-map',
};
