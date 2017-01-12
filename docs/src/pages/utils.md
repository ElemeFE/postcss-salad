@[toc]

# utils

> 提供了 CSS 中常用代码片断的快捷声明，如清除浮动，文本超长溢出省略号、垂直居中、图片代替文字等等<a class="link-ul" href="https://github.com/baiyaaaaa/postcss-utils">Plugin documentation</a>

## Ellipsis
文本超长溢出省略号，如果参数 rows 省略，则默认解析为单行溢出，如果传入 rows 参数，则会被解析为多行溢出省略（多行溢出省略的 <a href="http://caniuse.com/#search=-webkit-line-clamp">兼容性</a>）

```css @utils-ellipsis [rows]; ```

*input:*
```css
.ellipsis {
  @utils-ellipsis;
}
.ellipsis2 {
  @utils-ellipsis 3;
}
```

*output:*
```css
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ellipsis2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
```

## Clearfix

建立 BFC 清除元素内部的浮动，使元素获得应有的高度。参见 <a href="http://nicolasgallagher.com/micro-clearfix-hack/">A new micro clearfix hack。</a>

```css @utils-clearfix; ```

*input:*
```css
.clearfix {
  @utils-clearfix;
}
```

*output:*
```css
.clearfix {
}
.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both
}
```

## 图片替代文字

在元素中将隐藏文字

```css @utils-irt; ```
*input:*
```css
.irt {
  @utils-irt;
}
```

*output:*
```css
.irt {
  font: 0/0 none;
  text-shadow: none;
  color: transparent;
}
```

## User Select

设定页面元素可供光标选择的内容

```css @utils-user-select [none|text]; ```
*input:*
```css
.usn {
  @utils-user-select none;
}
```

*output:*
```css
.usn {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
```


## Disabled

设定元素在 disabled 状态时的 ui 状态

```css @utils-disabled [background-color] [border-color] [color]; ```

*input:*
```css
.disabled {
  @utils-disabled #ccc #f00 #333;
}
```

*output:*
```css
.disabled {
  background-color: #ccc;
  border-color: #f00;
  color: #333;
  cursor: default;
  pointer-events: none;
}
```

## Vertical Center

利用伪元素的方式，让子元素实现垂直居中

```css @utils-vertical-center; ```
*input:*
```css
.vam-box {
  @utils-vertical-center;
}
```

*output:*
```css
.vam-box {
}
.vam-box:after {
    display: inline-block;
    content: "";
    height: 100%;
    vertical-align: middle
}
```