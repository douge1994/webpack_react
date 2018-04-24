var webpack = require('webpack');
const path = require('path');
module.exports = {
  entry: {
    vendor: [
      "react", 
      "react-dom",
      'antd',
    ]
  },
  output: {
    path: path.join(__dirname, "lib"),//manifest json 文件的绝对路径 (输出文件)
    　　　 filename: "Dll.js",
    　　　 library: "[name]_[hash]"
  },
  plugins: [
    new webpack.DllPlugin({
    　path: path.join(__dirname, "lib", "manifest.json"),//manifest json 文件的绝对路径 (输出文件)
　　　name: "[name]_[hash]",// 暴露出的 DLL 的函数名。和output这里对应
　　　context: __dirname//manifest 文件中请求的上下文(context)(默认值为 webpack 的上下文(context))和webpack.common.js里面DllReferencePlugin一致才行
  })
]
};