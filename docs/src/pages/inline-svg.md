@[toc]

# inline-svg

> 提供了通过 `@svg-load [name] url([imgPath])` 语法来预定义 SVG 图标的功能，并可以在配置参数里修改 SVG 的相关属性。<a class="link-ul" href="https://github.com/TrySound/postcss-inline-svg">Plugin documentation</a>

## 概览
在我们的项目开发中，如果对同一个 SVG 图标文件有不同颜色的需求时，我们不得不维护多套 SVG 图片，而对 SVG 图片颜色修改也比较麻烦。

而沙拉为你解决了这个问题，*利用沙拉你可以直接在 CSS 中自定义 SVG 的属性值，包括它的 fill、stroke、path 等属性。*

## 用法一

第一种用法属于预定义的方式

*syntax:*
```css
/* define */
@svg-load [name] url([imgPath]) {
    fill: [fill color],
    path: nth-child([index]) {
        fill: [path color];
    },
    stroke: [stroke color]
}
```
*input:*
```css
@svg-load nav url(img/nav.svg) {
    fill: #cfc;
    path:nth-child(2) {
        fill: #ff0;
    }
}
.nav {
    background: svg-inline(nav);
}
```

*output: *
```css
.nav {
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg fill='%23cfc'%3E%3Cpath d='...'/%3E%3Cpath d='...' fill='%23ff0'/%3E%3Cpath d='...'/%3E%3C/svg%3E");
}
```

## 用法二

第二种用法是属于快捷引入的方式，但这种法式引入 svg 图片无法修改其 path 的颜色。

*input:*
```css
.up {
    background: svg-load(img/arrow-up.svg, fill=#000, stroke=#fff);
}
```