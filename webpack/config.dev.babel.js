const express = require('express');
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlFileNames = fs.readdirSync('./src/html/');

const getEntries = () => {
    const entries = [
        './src/css/index.less'
    ];

    htmlFileNames.forEach(filename => {
        entries.push(`./src/html/${filename}`);
    });

    return entries;
};

const getPlugins = () => {
    const plugins = [
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsWebpackPlugin({
            clearConsole: true,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:8].css',
        })
    ];
    htmlFileNames.forEach(filename => {
        const splitted = filename.split('.');
        if (splitted[1] === 'html') {
            plugins.push(
                new HtmlWebpackPlugin({
                    template: `./src/html/${filename}`,
                    filename: `./${filename}`
                }),
            );
        }
    });

    return plugins;
};

module.exports = {
    entry: getEntries(),
    output: {
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: './src/html',
        watchContentBase: true,
        hot: true,
        open: true,
        inline: true,
        quiet: true,
        historyApiFallback: true,
        before: function (app) {
            app.use('/assets', express.static('./src/assets'));
            app.use('/img', express.static('./src/assets/img'));
        }
    },
    plugins: getPlugins(),
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(html)$/,
                loader: path.resolve(__dirname, 'loader/html-loader.js'),
                options: {
                    html: htmlFileNames
                }
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    emitWarning: true,
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },
                    'css-loader',
                ],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',  //img图片路径
                        },
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            url: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            sourceMap: true,
                            plugins: () => [
                                require('autoprefixer')({
                                    overrideBrowserslist:['last 2 version','>1%','ios 7']
                                }),
                            ]
                        }
                    },
                    {
                        loader: "less-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jpg', '.html', '.less'],
    },
};
