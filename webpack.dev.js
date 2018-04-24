const webpack = require('webpack')
const path = require('path');
const merge = require('webpack-merge')
const common = require('./webpack.common')

console.log("process.env.NODE_ENV 的值是(webpack.config.js)："+ process.env.NODE_ENV)

module.exports = merge(common,{
    entry:{
        main:'./src/index.js', 
        vendor:["react","react-dom","antd","react-redux","react-router-dom","redux","redux-thunk"]
    },
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
    plugins:[
        //new webpack.HotModuleReplacementPlugin()
        new webpack.DefinePlugin({
        //定义src目录下都可以访问到的环境变量<!~!>
            'process.env.NODE_ENV': JSON.stringify('自定义的dev噢奥')
        })
    ]
})
