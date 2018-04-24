var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry:'./src/index.js', 
    devtool:'eval-source-map',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].[hash].js'
    },
    devServer:{//使用devserver时不可使用chunckhash
        contentBase:__dirname+'/dist/',
        historyApiFallback:true,
        inline:true,
        port:8881,
        hot:true
    },
    module:{
       rules:[
        {
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader"
            },
            exclude: /node_modules/
        },
        {
            test:/\.css$/,
            use:[
                {
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }
            ]
        }
        ]
    },
    //html 
    plugins:[
        //new webpack.HotModuleReplacementPlugin(),
        // new webpack.NamedModulesPlugin(),
         new CleanWebpackPlugin(['dist']),//
        //new ExtractTextPlugin('./css/[name].css'),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html'
        }),
    ]
};