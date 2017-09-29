webpack-dev-server作为一个文件服务器
## 使用
```
yarn
webpack-dev-server webpack-dev-server.config.js 或 npm run dev(有错)
打开 http://localhost:8080/src/可查看结果
```
## 存在问题
根目录永远都是项目当前目录，contentBase设置无效????

npm run dev运行会报错: cannot find module webpack,但命令行输入webpack-dev-server webpack-dev-server.config.js不会报错？？