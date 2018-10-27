const $ = require("jquery");
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        'app.bundle': path.resolve(__dirname, "./src/app.js"),
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "js/[name].js",
        publicPath: path.build
    },
    devServer: {
        inline: true,
        port: 8008
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: {
                    loader: "pug-loader",
                    options: {
                        pretty: true
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015']
                        }
                    }
                ],
            },
            { // sass / scss loader for webpack
                test: /\.(sass|scss|css)$/,
                //loader: 'postcss-loader!sass-loader'
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['postcss-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|jpg|gif|svg|eot|otf|ttf|woff|woff2)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, "./dist/index.html"),
            template: path.resolve(__dirname, "./src/pages/index.pug"),
            hash: true
        }),
        // new HtmlWebpackPlugin({
        //     filename: path.resolve(__dirname, "./dist/belarus.html"),
        //     template: path.resolve(__dirname, "./src/pages/belarus.pug"),
        //     hash: true
        // }),
        // new HtmlWebpackPlugin({
        //     filename: path.resolve(__dirname, "./dist/russia.html"),
        //     template: path.resolve(__dirname, "./src/pages/russia.pug"),
        //     hash: true
        // }),
        // new HtmlWebpackPlugin({
        //     filename: path.resolve(__dirname, "./dist/china.html"),
        //     template: path.resolve(__dirname, "./src/pages/china.pug"),
        //     hash: true
        // }),
        // new HtmlWebpackPlugin({
        //     filename: path.resolve(__dirname, "./dist/usbekistan.html"),
        //     template: path.resolve(__dirname, "./src/pages/usbekistan.pug"),
        //     hash: true
        // }),
        // new HtmlWebpackPlugin({
        //     filename: path.resolve(__dirname, "./dist/india.html"),
        //     template: path.resolve(__dirname, "./src/pages/india.pug"),
        //     hash: true
        // }),
        // new HtmlWebpackPlugin({
        //     filename: path.resolve(__dirname, "./dist/vietnam.html"),
        //     template: path.resolve(__dirname, "./src/pages/vietnam.pug"),
        //     hash: true
        // }),
        // new HtmlWebpackPlugin({
        //     filename: path.resolve(__dirname, "./dist/egipt.html"),
        //     template: path.resolve(__dirname, "./src/pages/egipt.pug"),
        //     hash: true
        // }),
        // new HtmlWebpackPlugin({
        //     filename: path.resolve(__dirname, "./dist/impressum.html"),
        //     template: path.resolve(__dirname, "./src/pages/impressum.pug"),
        //     hash: true
        // }),
        // new HtmlWebpackPlugin({
        //     filename: path.resolve(__dirname, "./dist/agbs.html"),
        //     template: path.resolve(__dirname, "./src/pages/agbs.pug"),
        //     hash: true
        // }),
        // new HtmlWebpackPlugin({
        //     filename: path.resolve(__dirname, "./dist/terms.html"),
        //     template: path.resolve(__dirname, "./src/pages/terms.pug"),
        //     hash: true
        // }),
        // new HtmlWebpackPlugin({
        //     filename: path.resolve(__dirname, "./dist/fragen.html"),
        //     template: path.resolve(__dirname, "./src/pages/fragen.pug"),
        //     hash: true
        // }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            slick: 'slick'
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].css',
            allChunks: true
        }),
        new CopyWebpackPlugin([
            {from: 'src/img', to: 'img'},
            // {from: 'src/fonts', to: 'fonts'}
        ])
    ]
};
