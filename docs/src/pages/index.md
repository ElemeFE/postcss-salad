<h1>概览</h1>
<blockquote class="blockquote-card">
  <p>沙拉是一个基于 <a href="http://postcss.org/">PostCSS</a> 的 CSS 解决方案，它提供了一系列快捷的 at-rule 和默认语法声明来帮助你快速地搭建项目样式与类库，它只在调用时才输出代码，而不是直接提供 CSS 类库。</p>  
</blockquote>

<h2>特性</h2>
<ul class="docs-list">
  <li>不同平台下的标准的 reset 样式的引入，以及单个元素的常用属性重置功能。</li>
  <li>提供额外的属性的顺时针简写方式，如 position、border-radius 和 font 等等。</li>
  <li>下一代 CSS 的语法规则支持，如自定义的变量、媒体查询、选择器等等。</li>
  <li>常用的 CSS 基础图形绘制的快捷声明，如三角、圆、矩形、环等等。</li>
  <li>在 CSS 下可自定义 path 颜色的 inline-svg 引入功能。</li>
  <li>rem to px 的转换功能</li>
  <li>常用的 CSS 功能片段的快捷声明，如 clearfix、超长溢出省略号、图片替换文字等。</li>
  <li>BEM 类名的转换</li>
  <li>网格系统的快速搭建</li>
</ul>

<h2>安装</h2>
{% highlight bash %}
npm install postcss-salad --save-dev
{% endhighlight %}

<h2>使用</h2>
<h3>Node</h3>
{% highlight javascript %}
require('postcss-salad').process(YOUR_CSS, { /* options */ });
{% endhighlight %}

<h3>PostCSS</h3>
<em>把 <a href="http://postcss.org/">PostCSS</a> 添加到你的构件工具当中：</em>
{% highlight javascript %}
npm install postcss --save-dev
{% endhighlight %}
<em>添加 <a href="">Postcss salad</a> 插件：</em>
{% highlight javascript %}
postcss([
  require('postcss-salad')({ /* options */ })
]).process(YOUR_CSS, /* options */);
{% endhighlight %}

<h3>Gulp</h3>
{% highlight javascript %}
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
{% endhighlight %}

<h3>webpack</h3>
{% highlight javascript %}
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
{% endhighlight %}
 No newline at end of file
