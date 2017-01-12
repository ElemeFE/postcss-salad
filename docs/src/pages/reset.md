@[toc]

# Reset and Normalize

> 提供了 PC 和移动端下的全局样式的重置，以及单个元素的常用属性重置功能。</p>
> 全局的重置样式是在 <a href="https://github.com/necolas/normalize.css/">normalize.css</a> 的基础上进行了一层包装而成的。</p><a class="link-ul" href="https://github.com/baiyaaaaa/postcss-css-reset">Plugin documentation</a>

## 语法

### @reset-global: [pc|mobile];
进行全局的样式重置

```css
/* before */
@reset-global pc;

/* after */
html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%
}
body {
    margin: 0
}
article, aside, details, figcaption, figure, footer, header, main, menu, nav, section, summary {
    display: block
}
audio,
canvas,
progress,
video {
    display: inline-block
}
audio:not([controls]) {
    display: none;
    height: 0
}
progress {
    vertical-align: baseline
}
template, [hidden] {
    display: none
}
a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects
}
a:active,
a:hover {
    outline-width: 0
}
abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted
}
b,
strong {
    font-weight: inherit
}
b,
strong {
    font-weight: bolder
}
dfn {
    font-style: italic
}
h1 {
    font-size: 2em;
    margin: 0.67em 0
}
mark {
    background-color: #ff0;
    color: #000
}
small {
    font-size: 80%
}
sub,
sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline
}
sub {
    bottom: -0.25em
}
sup {
    top: -0.5em
}
img {
    border-style: none
}
svg:not(:root) {
    overflow: hidden
}
code,
kbd,
pre,
samp {
    font-family: monospace, monospace;
    font-size: 1em
}
figure {
    margin: 1em 40px
}
hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible
}
button,
input,
optgroup,
select,
textarea {
    color: inherit;
    font: inherit;
    margin: 0;
    vertical-align: middle
}
optgroup {
    font-weight: bold
}
button,
input {
    overflow: visible
}
button,
select {
    text-transform: none
}
button, html [type="button"], [type="reset"], [type="submit"] {
    -webkit-appearance: button
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0
}
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText
}
fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em
}
legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal
}
textarea {
    overflow: auto;
    resize: none;
    vertical-align: top
}
input,
select,
textarea {
    outline: 0
}
[disabled] {
    cursor: default
}
[type="checkbox"],
[type="radio"] {
    box-sizing: border-box;
    padding: 0
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
    height: auto
}
[type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px
}
[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none
}
input::-moz-placeholder,
textarea::-moz-placeholder {
    color: $colorPlaceholder
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
    color: $colorPlaceholder
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
    color: $colorPlaceholder
}
input::-ms-clear,
input::-ms-reveal {
    display: none
}
::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit
}
table {
    border-collapse: collapse;
    border-spacing: 0
}
td,
th {
    padding: 0
}
h1, h2, h3, h4, h5, h6, p, figure, form, blockquote {
    margin: 0
}
ul, ol, li, dl, dd {
    margin: 0;
    padding: 0
}
ul, ol {
    list-style: none outside none
}
h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
    font-weight: normal
}
```

### @reset-nested: [tabel|tabel-cell|list|font|boxModel]

在选择器内进行常用元素的样式重置

```css
/* before */
.table {
  @reset-nested tabel;
}
.table th,
.table td {
  @reset-nested tabel-cell;
}
ul, ol {
  @reset-nested list;
}
.regular-font {
  @reset-nested font;
}
.box {
  @reset-nested boxModel;
}

/* after */
.table {
  border-collapse: collapse;
  border-spacing: 0;
  vertical-align: middle;
}
.table th,
.table td {
  background-color: #fff;
  text-align: left;
  font-weight: normal;
  vertical-align: middle;
  margin: 0;
  padding: 0;
}
ul, ol {
  list-style: none;
  margin: 0;
  padding: 0;
}
.regular-font {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
}
.box {
  margin: 0;
  padding: 0;
  width: auto;
  height: auto;
}
```