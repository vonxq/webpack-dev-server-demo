# webpack+webpack-dev-server+React
webpack进行预处理并打包
webpack-dev-server作为文件服务器
webpack-dev-server是自动热重载的
注意：
webpack-dev-server --config webpack-dev-config.js会调用webpack处理相关文件并生成out的文件，但这样生成时动态的，之后不可见，要生成可运行的包可运行npm run build
## 使用
克隆程序，然后执行:
```
cd ./withWebpack
yarn
npm run dev
打开http://localhost:8080/即可查看
# 项目打包
npm run build
```
## 加载css样式
### 实现按需加载antd样式
1. 使用[babel-pligin-import](https://github.com/ant-design/babel-plugin-import)插件，按官方说明配置.babelrc
```
{
  "presets": ["react", "es2015"],
  "plugins": [["import", { "libraryName": "antd", "style": "css" }]]
}
```
2. 配置webpack的css loader和style loader，记得在css-loader的include加入antd目录，无include字段会默认对所有文件打包
```javascript
const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, './out'),
        filename: 'build.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ['babel-loader?cacheDirectory=true'],
          include: path.join(__dirname, 'src')
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          include: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules/antd')],
        }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'out')
    }
};   
```



## 更新日志
10.24 加入babel-preset-stage-0,在class中使用箭头函数报unexpected token错误