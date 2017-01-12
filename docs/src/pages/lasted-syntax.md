@[toc]

# Lasted CSS Syntax
> 提供了 <a href="https://drafts.csswg.org/selectors-4/">下一代的 CSS 语法规则</a>
> 包括 <a href="https://github.com/postcss/postcss-custom-properties">自定义的变量</a>、<a href="https://github.com/postcss/postcss-custom-media">自定义媒体查询</a>、<a href="https://github.com/postcss/postcss-custom-selectors">自定义选择器</a> 以及 <a href="https://github.com/jonathantneal/postcss-nesting">选择器嵌套</a> 等等

## 变量

```css
:root {
  --color: red;
}

div {
  color: var(--color);
}
```

## 选择器
*input:*
```css
@custom-selector :--heading h1, h3, h3, h4, h5, h6;

article :--heading + p {
  margin-top: 0;
}
```

*output:*
```css
article h1 + p,
article h3 + p,
article h3 + p,
article h4 + p,
article h5 + p,
article h6 + p {
  margin-top: 0;
}
```

## 媒体查询
*input:*
```css
@custom-media --small-viewport (max-width: 30em);

@media (--small-viewport) {
  /* styles for small viewport */
}
```

*output:*
```css
@media (max-width: 30em) {
  /* styles for small viewport */
}
```

## 嵌套
*input:*
```css
a, b {
    color: red;

    & c, & d {
        color: white;
    }

    & & {
        color: blue;
    }

    &:hover {
        color: black;
    }

    @media (min-width: 30em) {
        color: yellow;

        @media (min-device-pixel-ratio: 1.5) {
            color: green;
        }
    }
}
```

*output:*
```css
a, b {
    color: red;
}

a c, a d, b c, b d {
    color: white;
}

a a, b b {
    color: blue;
}

a:hover, b:hover {
    color: black;
}

@media (min-width: 30em) {
    a, b {
        color: yellow;
    }
}

@media (min-width: 30em) and (min-device-pixel-ratio: 1.5) {
    color: green;
}
```

## 选择器匹配
*input:*
```css
p:matches(:first-child, .special) {
  color: red;
}
```

*output:*
```css
p:first-child, p.special {
  color: red;
}
```

*input:*
```css
p:not(:first-child, .special) {
  color: red;
}
```

*output:*
```css
p:not(:first-child), p:not(.special) {
  color: red;
}
```