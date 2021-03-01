## :boy: 个人简历项目
* 使用Webpack, Html, Less, ESlint构建
* 使用GitHub Actions 部署在GitHub Pages ~ [resume](https://xszi.github.io/resume/index.html)

## 项目启用 / 打包

* 获取仓库
~~~
git clone git@github.com:xszi/resume.git
~~~
* 启动打包
~~~
yarn install + yarn start (或者npm install + npm start)
npm start // 启动
npm run build // 构建打包
~~~
* HTML页面，CSS样式分模块
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Example doc</title>
    </head>
    <body>
        <include>_header.html</include>
        <h1>Content</h1>
        <include>_footer.html</include>
    </body>
</html>
```
* 设计Webpack知识点
    * HTML hot reload(Livereload)
    * LESS
    * jQuery already installed
    * Babel
    * ES6
    * ES7
    * Class syntax + Class properties
    * etc
    * Autoprefixer
    * Minifier
    * PostCSS
    * Eslint (airbnb-base config)
    * Eslinting on the fly (while dev)
    * Pretty console output (Friendly errors webpack plugin)

## 简历预览

<img src="https://github.com/xszi/resume/blob/master/resume.jpg">
