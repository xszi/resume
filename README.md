## :boy: 个人简历项目
* ~[简历在线查看](https://xszi.github.io/resume/index.html)
* 使用Webpack, Html, Less, ESlint构建
* 使用GitHub Actions 部署在GitHub Pages
* webpack配置参考自[html-sass-babel-webpack-boilerplate
](https://github.com/izica/html-sass-babel-webpack-boilerplate)，样式参考自[resume](https://github.com/mcc108/resume)，感谢~

## 项目启用 / 打包

* 获取仓库
~~~
git clone git@github.com:xszi/resume.git
~~~
* 启动打包
~~~
yarn install (或者npm install) // 安装依赖
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
* 知识点
    * HTML hot reload(Livereload)
    * LESS
    * Babel
    * ES6 / ES7
    * Autoprefixer
    * Minifier
    * PostCSS
    * Eslint

## 简历预览

<img src="https://github.com/xszi/resume/blob/master/resume.jpg">
