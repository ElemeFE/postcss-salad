@[toc]

# 基础图形
> 提供了基础图形快捷声明，如矩形、圆形、三角形等<a class="link-ul" href="https://github.com/baiyaaaaa/postcss-shape">Plugin documentation</a>

## 矩形
通过 rect 属性来声明一个矩形。

*syntax:*

```css
rect: [width] [height] [background-color]
```

*input:*

```css
.rect-a {
  rect: 30px 50px #ff0;
}
.rect-b {
  rect: 30px * #ff0;
}
```

*output:*

```css
.rect-a {
  width: 30px;
  height: 50px;
  background-color: #ff0;
}
.rect-b {
  width: 30px;
  background-color: #ff0;
}
```

## 圆形
通过 circle 属性来声明一个圆形。

*syntax:*

```css
circle: [diameter] [background-color]
```

*input:*

```css
.circle-a {
  circle: 50px #ff0;
}
.circle-b {
  circle: 50px *;
}
```

*output:*

```css
.circle-a {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ff0;
}
.circle-b {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
```

## 三角形
通过 triangle 属性来绘制一个等腰直角三角形。

*syntax:*

```css
triangle: [size] [direction] [color]
```

*input:*

```css
.triangle-a {
  triangle: 5px top #ff0;
}
```

*output:*

```css
.triangle-a {
  display: inline-block;
  width: 0;
  height: 0;
  border: solid transparent;
  border-width: 5px;
  border-bottom-color: #ff0;
}
```