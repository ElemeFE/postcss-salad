@[toc]

# Rem-to-Pixel

> 基于 <a href="http://caniuse.com/rem">browser data</a> 来为不支持 rem 的浏览器或者场景下，提供 rem 的转化成 px 的功能。</a><a href="https://github.com/robwierzbowski/node-pixrem" class="link-ul">Plugin documentation</a>

## Example

*input:*
```css
.sky {
  margin: 2.5rem 2px 3em 100%;
  color: blue;
}

@media screen and (min-width: 20rem) {
  .leaf {
    margin-bottom: 1.333rem;
    font-size: 1.5rem;
  }
}
```

*output:*
```css
.sky {
  margin: 80px 2px 3em 100%;
  margin: 2.5rem 2px 3em 100%;
  color: blue;
}

@media screen and (min-width: 20rem) {
  .leaf {
    margin-bottom: 1.333rem;
    font-size: 1.5rem;
  }
}
```