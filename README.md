# Postcss-salad
[![Build Status][travis-img]][travis]
[![Version][version]](https://github.com/ElemeFE/postcss-salad/blob/master/CHANGELOG.md)

> Postcss-salad 是一个能够帮助你更加写出更加简洁、优雅的CSS的样式解决方案。

Postcss-salad不仅提供了下一代css语法支持，还提供了基础的sass的语法、属性顺时针简写、rem填充、基础图形绘制、可定制样式的inline-svg以及bem类名自动转化等实用的功能。

---

## Examples

#### 下一代css语法

```css
/* before */
:root {
  --mainColor: red;
}
@custom-media --small-viewport (max-width: 30em);

@media (--small-viewport) {
  a {
    color: var(--mainColor);
  }
}

/* after */
@media (max-width: 30em) {
  a {
    color: red;
  }
}
```

#### 顺时针简写

```css
/* before */
a {
  position: absolute 1em 2em 3em 4em;
  margin: 30px *;
}
b {
  position: absolute 1em * * 4em;
  padding: 30px *;
}

/* after */
a  {
  top: 1em;
  right: 2em;
  bottom: 3em;
  left: 4em;
  position: absolute;
  margin-top: 30px;
  margin-bottom: 30px;
}
b  {
  top: 1em;
  left: 4em;
  position: absolute;
  padding-top: 30px;
  padding-bottom: 30px;
}
```

#### rem填充

```css
/* before */
a {
  width: 10rem;
  margin: 30px 2rem 1rem 10px;
}

/* after */
a {
  width: 160px;
  margin: 30px 32px 16px 10px;
}
```

#### 基础图形绘制

```css
/* before */
.rect {
  rect: 10px 20px #f00;
}
.cirlce {
  circle: 50px #ff0;
}
.triangle {
  triangle: 5px left #ff0;
}

/* after */
.rect {
  width: 10px;
  height: 20px;
  background-color: #f00;
}
.cirlce {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.triangle {
  display: inline-block;
  width: 0;
  height: 0;
  border: solid transparent;
  border-width: 5px;
  border-right-color: #ff0;
}
```

#### 可定制的inline-svg

```css
/* before */
@svg-load nav url(../svgs/nav.svg) {
  path:nth-child(2){
    fill:#0ff
  };
}
h1 {
  background: svg-inline(nav)
}

/* after */
h1 {
  background: url("data:image/svg+xml;charset=utf-8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 50 50\'><path d=\'M10 12h30v4H10z\'/><path d=\'M10 22h30v4H10z\' fill=\'#0ff\'/><path d=\'M10 32h30v4H10z\'/></svg>");
}
```

#### 基础sass语法

```css
/* before */
$pass: green !default;

@define-placeholder foo {
  background: pink;
}

.bar {
  @extend foo;

  background-color: @color;
  color: $pass;
}

/* after */
.bar {
  background: pink;
}

.bar {

  background-color: green;
  color: green;
}
```

#### bem类名

```css
/* before */
@utility utilityName {
    color: green;
}

@utility utilityName small {
    color: blue;
}

@component ComponentName {
    color: cyan;

    @modifier modifierName {
        color: yellow;
    }

    @descendent descendentName {
        color: navy;
    }

    @when stateName {
        color: crimson;
    }
}

@component-namespace nmsp {
    @component ComponentName {
        color: red;
    }
}

/* after */
.u-utilityName {
    color: green;
}

.u-sm-utilityName {
    color: blue;
}

.ComponentName {
    color: cyan;
}

.ComponentName--modifierName {
    color: yellow;
}

.ComponentName-descendentName {
    color: navy;
}

.ComponentName.is-stateName {
    color: crimson;
}

.nmsp-ComponentName {
    color: red;
}
```

## Usage

Add [Postcss salad] to your build tool:

```bash
npm install postcss-salad --save-dev
```

#### Node

```js
require('postcss-salad').process(YOUR_CSS, { /* options */ });
```

#### PostCSS

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

#### Gulp

Add [Gulp PostCSS] to your build tool:

```bash
npm install gulp-postcss --save-dev
```

Enable [Postcss salad] within your Gulpfile:

```js
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

## options

***you can change the plugin's behaviour by the options***

```
var options = {
  browser: ['ie > 8', 'last 2 version'],
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
- [postcss-bem]: implementing BEM as at-rules
- [postcss-calc]: plugin to reduce calc()
- [postcss-initial]: fallback initial keyword
- [postcss-inline-svg]: reference an SVG file and control its attributes with CSS syntax.
- [postcss-short-font-size]: extends the font-size property so that line-height may be set by the second value.
- [postcss-short-spacing]: lets you write shorthand margin and padding properties while omitting edges in CSS.
- [postcss-color-function]: W3C color methods
- [postcss-short-size]: Write shorthand size properties in CSS
- [postcss-short-position]: Define edges inside the position property in CSS
- [postcss-salad]: draw basic salad with specified syntax in css rule
- [node-pixrem]: generates pixel fallbacks for rem units.
- [autoprefixer]: parse CSS and add vendor prefixes to CSS rules using values from Can I Use

[travis-img]: https://travis-ci.org/ElemeFE/postcss-salad.svg
[travis]: https://travis-ci.org/ElemeFE/postcss-salad
[precss]: https://github.com/jonathantneal/precss
[postcss-bem]: https://github.com/ileri/postcss-bem
[postcss-calc]: https://github.com/postcss/postcss-calc
[postcss-initial]: https://github.com/maximkoretskiy/postcss-initial
[postcss-inline-svg]: https://github.com/TrySound/postcss-inline-svg
[postcss-short-font-size]: https://github.com/jonathantneal/postcss-short-font-size
[postcss-short-spacing]: https://github.com/jonathantneal/postcss-short-spacing
[postcss-color-function]: https://github.com/postcss/postcss-color-function
[postcss-short-size]: https://github.com/jonathantneal/postcss-short-size
[postcss-short-position]: https://github.com/jonathantneal/postcss-short-position
[node-pixrem]: https://github.com/robwierzbowski/node-pixrem
[autoprefixer]: https://github.com/postcss/autoprefixer
[Postcss-salad]: https://github.com/ElemeFE/postcss-salad
[version]: https://img.shields.io/npm/v/postcss-salad.svg
