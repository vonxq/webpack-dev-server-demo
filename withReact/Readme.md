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

## 更新日志
10.24 加入babel-preset-stage-0,在class中使用箭头函数报unexpected token错误