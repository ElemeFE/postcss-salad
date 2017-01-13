# Postcss-salad <img align="right" width="96" height="96" src="https://cdn.rawgit.com/ElemeFE/postcss-salad/master/salad-logo.svg">

[![Build Status][travis-img]][travis]
[![Version][version]](https://github.com/ElemeFE/postcss-salad/blob/master/CHANGELOG.md)

> Postcss-salad 是一个基于 <a href="http://postcss.org/">PostCSS</a> 的 CSS 解决方案，它提供了一系列快捷的 at-rule 和默认语法声明来帮助你快速地搭建项目样式与类库，它只在调用时才输出代码，而不是直接提供 CSS 类库。<br>
> 沙拉不仅提供了下一代css语法支持，还提供了基础的sass的语法、属性顺时针简写、rem填充、基础图形绘制、可定制样式的inline-svg以及bem类名自动转化等实用的功能。

### [Documents]

## Demo

**input:**
 
```css
/* short property */
.box {
  position: fixed 0 0 *;
}
/* utils */
.ellipsis2 {
  @utils-ellipsis 3;
}
/* shape */
.circle-a {
  circle: 50px #ff0;
}
```

**output:**

```css
.box {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}
.ellipsis2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.circle-a {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ff0;
}
```

## Usage

- [Node](#node)
- [PostCSS](#postcss)
- [Gulp](#gulp)
- [webpack](#webpack)

Add [Postcss salad] to your build tool:

```bash
npm install postcss-salad --save-dev
```

#### [Node](id:Node)

```js
require('postcss-salad').process(YOUR_CSS, { /* options */ });
```

#### [PostCSS](id:a-PostCSS)

Add [PostCSS] to your build tool:

```bash
npm install postcss --save-dev
```

Load [Postcss salad] as a PostCSS plugin:

```js
postcss([
  require('postcss-salad')({ /* options */ })
]).process(YOUR_CSS, /* options */);
```

#### [Gulp](id:Gulp)

Add [Gulp PostCSS]:  to your build tool:

```bash
npm install gulp-postcss --save-dev
```

Enable [Postcss salad] within your Gulpfile:

```js
var gulp = require('gulp');
var postcss = require('gulp-postcss');

gulp.task('css', function () {
  return gulp.src('./src/*.css').pipe(
    postcss([
      require('postcss-salad')({ /* options */ })
    ])
  ).pipe(
    gulp.dest('.')
  );
});
```
#### [webpack](id:webpack)

```js
module.exports = {
  module: {
    loaders: [
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      }
    ]
  },
  postcss: function () {
    return [require('postcss-salad')];
  }
}
```

## options

沙拉里每一个特性都是依赖于对应的插件的，因此他们都有自己的配置。 你可以通过 features 属性类为每一个插件传入它的配置，假设某个特性传入的值为false，则该特性会被关闭:

*example:*

```js
var options = {
  browsers: ['ie > 8', 'last 2 version'],
  features: {
    "bem": false, //pass boolean false can disable the plugin
    "inlineSvg": {
      "path": "src/svgs"
    }
  }
}
```


### Plugins

Postcss-salad powered by the following plugins (in this order):

- [precss]: a tool that allows you to use Sass-like markup in your CSS files
- [postcss-css-reset]: reset style is dependent on normalize.css and combined with best practice.
- [postcss-utils]: help you create functional fragments quickly via at-rules. 
- [postcss-bem]: implementing BEM as at-rules
- [postcss-calc]: plugin to reduce calc()
- [postcss-initial]: fallback initial keyword
- [postcss-inline-svg]: reference an SVG file and control its attributes with CSS syntax.
- [postcss-short]: lets you write styles more logically by extending shorthand properties in CSS.
- [postcss-shape]: draw basic shape with specified syntax in css rule
- [node-pixrem]: generates pixel fallbacks for rem units.
- [autoprefixer]: parse CSS and add vendor prefixes to CSS rules using values from Can I Use

[precss]: https://github.com/jonathantneal/precss
[postcss-css-reset]: https://npmjs.com/package/postcss-css-reset
[postcss-utils]: https://github.com/baiyaaaaa/postcss-utils
[postcss-bem]: https://github.com/ileri/postcss-bem
[postcss-calc]: https://github.com/postcss/postcss-calc
[postcss-initial]: https://github.com/maximkoretskiy/postcss-initial
[postcss-inline-svg]: https://github.com/TrySound/postcss-inline-svg
[postcss-short]: https://github.com/jonathantneal/postcss-short
[postcss-shape]: https://github.com/baiyaaaaa/postcss-shape
[node-pixrem]: https://github.com/robwierzbowski/node-pixrem
[autoprefixer]: https://github.com/postcss/autoprefixer
[Postcss salad]: https://github.com/ElemeFE/postcss-salad
[version]: https://img.shields.io/npm/v/postcss-salad.svg
[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[PostCSS]: http://postcss.org/
[travis-img]: https://travis-ci.org/ElemeFE/postcss-salad.svg
[travis]: https://travis-ci.org/ElemeFE/postcss-salad
[Documents]: http://elemefe.github.io/postcss-salad/
