const webpack = require('webpack')
const path = require('path');
const merge = require('webpack-merge')
const common = require('./webpack.common')


module.exports = merge(common,{
    entry:'./src/index.js', 
    devtool:'eval-source-map',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].[chunkhash].js'
    },
    plugins:[

    ]
})