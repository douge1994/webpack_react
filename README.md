说明:
    config-other--->配置的是引入别名文件

    lib--->由webpack.Dll.js在生产环境下产生的第三方库文件

    logs--->随便写的

    other-important-project--->一个使用create-react-app生成的react项目(使用redux/react-reudx/按需加载/react-thunk/react-router-dom)

    src--->项目目录

    babelrc--->babel编译配置+引入antd配置+react热加载

    webpack.config.js--->简易的配置（仅供参考）

    webpack分为了生产环境和开发环境

    开发环境：
        webpakc.dev.js + webpack.common.js
    生产环境：
        webpack.dll.js<解放第三方库需要预先编译>+webpack.pro.js+webpack.common.js
        .\node_modules\.bin\webpack webpack.dll.js


    还是需要改进...