# koa2-demo

## Getting Start

```
git clone https://github.com/17koa/koa2-demo.git
cd koa2-demo
npm install
npm start
```

open in browser

http://127.0.0.1:3000/ 

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
app.use(convert(views(__dirname + '/views', {
  extension: 'jade'
})));
```

### ejs

```
npm i -S ejs
```

in app.js

```
app.use(convert(views(__dirname + '/views-ejs', {
  extension: 'ejs' 
})));
```

