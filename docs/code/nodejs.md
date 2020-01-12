# nodejs

JavaScript 跟 python 一样也是类似的脚本语言，可以做一些计算和互动。

后来 Google 开发了chrome 之后工作量不饱和，又基于其 V8 引擎打造了 nodejs ，让 javascript 能够在服务器上运行。

曾经的前端工程师都在向全栈靠拢。

## 运行模式

跟 python 一样，既可以写好 js 文件用`node xxx.js`运行，也可以在交互模式下运行。

## npm

node 自带的包管理器（类似 python 中的 conde ）

```node
npm install 包名 [-g] // g = global
npm run xxx
npm uninstall 包名  //卸载
```

在项目的`package.json`写好的依赖项，

```
···
  "dependencies":  {  
     "accepts":  "~1.2.12",
     "array-flatten":  "1.1.1"
   }
···
```


这样每次输入`npm install`就可以配置好其环境。

```cmd
// npm下载源换为淘宝npm镜像
npm config set registry http://registry.npm.taobao.org/
```


