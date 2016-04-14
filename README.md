# koa2-demo

[![npm version](https://badge.fury.io/js/koa2-demo.svg)](http://badge.fury.io/js/runkoa)
[![Build](https://travis-ci.org/17koa/koa2-demo.svg?branch=master)](https://travis-ci.org/17koa/koa2-demo)



这个项目是express风格的最新的Koa 2项目的示例，已集成到[koa-generator](https://github.com/17koa/koa-generator)里，算是集成一些所谓的最佳实践吧

## Tech Stack

- Koa 2
- nodemon + runkoa（支持async/await，且不需关心babel）
- pm2 for deployment（服务器部署）
- express-style middlewares
  - koa-router
  - koa-views
  - koa-static
  - koa-bodyparser

## Getting Start

```
git clone https://github.com/17koa/koa2-demo.git
cd koa2-demo
npm install
npm start
```

open in browser

http://127.0.0.1:3000/ 

## 启动方式

最简单启动方式

```
node bin/run
```

最常用的集成nodemon的方式,代码变动会自动重载(其实就是nodemon去执行bin/run)

```
npm start
```

支持pm2部署

```
 #npm run pm2
 pm2 start bin/run 
```
## 支持koa2的3种中间件写法

Koa 2是一个 middleware framework, 它提供了 3 种不同类型的中间件写法

- common function
- async function（新增）
- generatorFunction

详见[koa 2的文档](https://github.com/koajs/koa/blob/v2.x/Readme.md)

## 支持view层多种模板


`koa-views` is using [consolidate](https://github.com/tj/consolidate.js) under the hood.

[List of supported engines](https://github.com/tj/consolidate.js#supported-template-engines)


需要注意的koa2使用的koa-views也是下一版本的koa-views@next，当前项目已经处理过了，不需要再处理的，哈哈


### jade 

```
npm i -S jade
```

in app.js

```
app.use(views(__dirname + '/views', {
  extension: 'jade'
}));
```

### ejs

```
npm i -S ejs
```

in app.js

```
app.use(views(__dirname + '/views-ejs', {
  extension: 'ejs' 
}));
```

## 目录结构

```
➜  koa2-demo git:(master) tree . -L 2
.
├── LICENSE
├── README.md
├── app.js
├── bin
│   ├── run
│   └── www
├── node_modules
│   ├── co
│   ├── debug
│   ├── ejs
│   ├── jade
│   ├── koa
│   ├── koa-bodyparser
│   ├── koa-convert
│   ├── koa-json
│   ├── koa-logger
│   ├── koa-onerror
│   ├── koa-router
│   ├── koa-static
│   ├── koa-views
│   ├── nodemon
│   └── runkoa
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
├── routes
│   ├── index.js
│   └── users.js
├── views
│   ├── error.jade
│   ├── index.jade
│   └── layout.jade
└── views-ejs
    ├── error.ejs
    └── index.ejs

24 directories, 13 files
```

说明

- bin/run(runkoa执行bin/www)
- bin/www是常规koa启动文件，和express的一样
- views是放默认的jade文件
- views-ejs是放ejs文件


## 推荐

如果你喜欢express风格的生成，推荐[koa-generator](https://github.com/17koa/koa-generator)

如果你喜欢babel + koa2可以参考[Minimal koa v2 boilerplate.](https://github.com/geekplux/koa2-boilerplate)