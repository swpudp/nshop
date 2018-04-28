const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: "./src/app.jsx",
    output: {
        path: path.resolve(__dirname, "dist"), //路径
        filename: "js/bundle.js" //文件名称
    },
    module: {
        rules: [{
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "react"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            { //处理图片
                test: /\.(png|jpg|gif)$/,
                use: [{
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            //name: "resource/[name].[ext]"
                        }
                    }

                ]
            },
            { //字体配置
                test: /\.(eot|svg|ttf|woff|woff2|otf)/,
                use: [{
                    loader: "url-loader",
                    //name: "resource/[name].[ext]"
                }]
            }
        ]
    },
    plugins: [
        //html模板
        new HtmlWebpackPlugin({
            template: "./assets/index.html",
            title: "index"
        }),
        //提取css文件
        new MiniCssExtractPlugin({
            filename: "index.css",
            chunkFilename: "css/index.css"
        })
        //,
        // //提取公共模块
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "comon",
        //     filename: "js/base.js"
        // })
    ],
    optimization: {
        splitChunks: {
            name: "common",
            filename: "js/base.js"
        }
    },
    devServer: {
        port: 18001
    }
};