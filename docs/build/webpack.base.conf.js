var path = require('path')
var hljs = require('highlight.js')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../../')
var docsRoot = path.resolve(__dirname, '../')
import markdownItTocAndAnchor from "markdown-it-toc-and-anchor"

module.exports = {
  entry: {
    app: [path.join(docsRoot, 'src/main.js')]
  },
  output: {
    path: path.join(docsRoot, 'dist'),
    publicPath: "/",
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../../node_modules')],
    alias: {
      'node_modules': path.resolve(projectRoot, 'node_modules'),
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
      vue$: 'vue/dist/vue.common.js'
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.md$/,
        loader: 'vue-html!markdown-it',
      },
    ]
  },
  postcss: function (webpack) {
    return [require(path.join(projectRoot, 'src/index'))({
      partialImport: {
        addDependencyTo: webpack
      }
    })];
  },
  'markdown-it': {
    preset: 'default',
    html: true,
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (__) {}
      }

      return '';
    },
    use: [
      [markdownItTocAndAnchor, {
        tocFirstLevel: 2,
        tocClassName: 'fixed-nav'
      }]
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    loaders: utils.cssLoaders({ sourceMap: true }),
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ]
  }
}
