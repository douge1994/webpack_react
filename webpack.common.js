var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

//初始webpack插件
var plugins=[
     // new webpack.HotModuleReplacementPlugin(),
     new webpack.NamedModulesPlugin(),
     new CleanWebpackPlugin(['dist']),//
     //new ExtractTextPlugin('./css/[name].css'),
     new HtmlWebpackPlugin({
         template: __dirname + '/src/index.html',
     
     }),
]
//生产环境下提高打包速度引入下方的2个插件
if(process.env.NODE_ENV == 'pro'){
    plugins = plugins.concat([
        new webpack.HashedModuleIdsPlugin(),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./lib/manifest.json')
        }),
        new ExtractTextPlugin('./css/[name].css'),
     ]);
}
//开发环境下提高编译速度将第三方包弄到vender里面来...有个问题就是hash并不能满足需求，vendor得hash也会跟随main的改变---一个bug;如果是在生产环境下使用chunkhash则不会产生这个bug
if(process.env.NODE_ENV == 'dev'){
    plugins = plugins.concat([
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor','manifest'],
            minChunks: Infinity
          }),
       
     ]);
}
module.exports = {
    resolve: {  
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名   
         alias: require('./config-other/config-alias') 
    }, 
    module:{
        rules:[
            {
                test: /(\.jsx|\.js)$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.(jpg|png|gif|jpeg|bmp)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:8192, 
                        name: 'images/[name].[ext]'
                    }
                }
            },
            {
                test:/\.css$/,
                use:(process.env.NODE_ENV == 'pro')?ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader" 
                    }):['style-loader','css-loader', { loader: 'postcss-loader', options: { plugins:[require("autoprefixer")("last 100 versions")] } }]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {loader: 'css-loader',
                        options: {importLoaders: 2}
                    },
                    {loader: 'postcss-loader',
                        options:{ident:"postcss",plugins:[require("autoprefixer")("last 100 versions")]}
                    },
                    'sass-loader'
                ]
            },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
            { test: /\.(woff|woff2)$/, loader:"url-loader?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" }
        ]
    },
    //html 
    plugins:plugins
};






/**-------下方全是注释哦-------***/ 
[
    /*
    *仅仅在生产环境下使用
    *使用webpack.DllPlugin插件分离第三方库并打包后index.html找不到分离的的vendor。
    *故我在index.html入口body前手动的将该Dll.js（第三方分离的）注入其中===简单粗暴
    */ 
    // new webpack.HashedModuleIdsPlugin(),//解决vendor的hash变化,最好是用于生产环境
    // new webpack.DllReferencePlugin({
    //     context: __dirname,
    //     manifest: require('./lib/manifest.json')
    // })
    /*
    下方和hash配合使用并不能达到vendor的hash不变化。但是和chunkhash配合的话可以达到目的。我也不知道为神马
    new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor','manifest'],
        minChunks: Infinity
      }),
    */ 
]