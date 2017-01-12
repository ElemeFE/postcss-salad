@[toc]

# sass-synatax.md

> 提供类 <a href="http://sass-lang.com/">Sass</a> 的基础语法功能（非全部），包括变量、逻辑、循环、Mixins、Extends、Imports等</p>
> 但要注意的是，部分的语法与原生的 <a href="http://sass-lang.com/">Sass</a> 语法略有差别。</p>
<a class="link-ul" href="https://github.com/jonathantneal/precss">Plugin documentation</a>

## Variables
```css
$blue: #056ef0;
$column: 200px;

.menu {
    width: calc(4 * $column);
}

.menu_link {
    background: $blue;
    width: $column;
}

/* after */

.menu {
    width: calc(4 * 200px);
}

.menu_link {
    background: #056ef0;
    width: 200px;
}
```

## Conditionals
```css
/* before */

.notice--clear {
    @if 3 < 5 {
        background: green;
    }
    @else {
        background: blue;
    }
}

/* after */

.notice--clear {
    background: green;
}
```

## Loops
```css
/* before */

@for $i from 1 to 3 {
    .b-$i { width: $(i)px; }
}

/* after */

.b-1 {
    width: 1px
}
.b-2 {
    width: 2px
}
.b-3 {
    width: 3px
}
```

## Mixins
```css
/* before */

@define-mixin icon $name {
    padding-left: 16px;

    &::after {
        content: "";
        background-url: url(/icons/$(name).png);
    }
}

.search {
    @mixin icon search;
}

/* after */

.search {
    padding-left: 16px;
}

.search::after {
    content: "";
    background-url: url(/icons/search.png);
}
```

## Extends
```css
/* before */

@define-extend bg-green {
    background: green;
}

.notice--clear {
    @extend bg-green;
}

/* after */

.notice--clear {
    background: green;
}
```

## Imports
```css
/* Before */

@import "partials/base"; /* Contents of partials/_base.css: `body { background: black; }` */


/* After */

body { background: black; }
```

## Property Lookup
```css
/* Before */

.heading {
    margin: 20px;
    padding: @margin;
}

/* After */

.heading {
    margin: 20px;
    padding: 20px;
}
```