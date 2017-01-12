@[toc]

# Short Property

> 沙拉为你提供了常用属性的缩写声明规则<a class="link-ul" href="https://github.com/jonathantneal/postcss-short">Plugin documentation</a>

## Size
我们提供了 size 属性来将 width 和 height 两个属性的值写在一起。

*input:*
```css
.icon {
    size: 48px;
}
```

*output:*
```css
.icon {
    width: 48px;
    height: 48px;
}
```

## Position
我们可以在 position 的属性值之后以顺时针的顺序来接着编写 top、right、bottom、left 这几个值。其中如果不需要声明的属性我们可以用 “*” 号来跳过。
*input:*
```css
.banner {
    position: fixed 0 0 *;
}
```

*output:*
```css
.banner {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
}
```

## Color
color 属性现在可以接受两个值，这样我们可以同时将 color 和 background-color 的值写在一起。
*input:*
```css
.canvas {
    color: #abccfc #212231;
}
```

*output:*
```css
.canvas {
    color: #abccfc;
    background-color: #212231;
}
```

## Font-Size
font-size 属性现在可以接受两个值，这样我们可以同时将 font-size 和 line-height 的值写在一起。
*input:*
```css
.heading {
    font-size: 1.25em 2;
}
```

*output:*
```css
.heading {
    font-size: 1.25em;
    line-height: 2;
}
```

## Border

border 属性现在允许我们以顺时针的顺序来同时编写 top、right、bottom、left 这几个 border 的值。

*input:*
```css
.container {
    border: 1px 2px #343434;
}
```

*output:*
```css
.container {
    border-width: 1px 2px;
    border-color: #343434;
}
```