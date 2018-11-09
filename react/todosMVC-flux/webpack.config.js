const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry:  './src/index.js',
    output : {
        path : path.resolve(__dirname, "dist"), 
        filename: "index.bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use : {
                    loader: 'babel-loader'
                }
            }, 
            {
                test:/\.scss$/,
                use : ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }, 
    devServer:{
       // watchContentBase:true,
        host:'localhost', // default is localhost!
       // publicPath:path.resolve('index.bundle.html'),
        inline:true,
        port:3000,
        proxy: {
            '/api': 'http://localhost:3001',
            secure:false 
        }
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
}


