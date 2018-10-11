const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    output : {
        path : path.resolve(__dirname, "dist"), 
        filename: "index.bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use : ["babel-loader"]
            }, 
            {
                test:/\.css$/,
                use : ['style-loader', 'css-loader']
            }
        ]
    }, 
    devServer:{
        watchContentBase:true,
        host:'localhost', // default is localhost!
     // publicPath:path.resolve('index.html'),
        hot:true,
        inline:true,
        port:3000,
        proxy: {
            '/api': 'http://localhost:3001',
            secure:false 
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        }),
        new webpack.HotModuleReplacementPlugin({
            multiStep:true 
        })
    ]
}


