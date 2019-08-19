# taro-redux

demo 数据参考了网易严选的接口数据结构以及苏宁电器的在线图片;

#技术栈
taro + redux + es6 + sass

#运行

1. 全局安装 taro-cli

```bash
npm install -g @tarojs/cli
```

2. 安装依赖

```bash
npm install
```

3. 启动相对应的编译

```bash
npm run dev:weapp    --小程序（目前其他端小白还在努力修复中 ~ ）
```

#主目录

```javascript
|--- config                           🔒 此目录具体看taro官网
|    |--- dev.js
|    |--- index.js
|    |--- prod.js
|--- src
|    |--- action                      🔒 redux-action
|    |--- assets                      🔒 静态文件-图片等
|    |--- components                  🔒 自定义公用组件
|    |--- constants                   🔒 需经第三方判断的状态
|    |--- pages                       🔒 业务模块
|    |--- reducers                    🔒 redux-reducers
|    |--- store                       🔒 redux-store
|    |--- styles                      自定义样式与app.scss作用相似
|    |--- untils                      🔒 公用方法
|    |--- app.js                      -
|    |--- app.scss                    -
|    |--- index.html                  -
...
..
.
```

注：很多个性化组件没做单独封装，如需要可自行封装到 components 里;
（小白还在努力学习中...）
