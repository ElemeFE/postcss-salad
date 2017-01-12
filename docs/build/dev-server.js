if (!process.env.NODE_ENV) process.env.NODE_ENV = 'devlopment';
var WebpackDevServer = require('webpack-dev-server');
var path = require('path')
var webpack = require('webpack')
var webpackConfig = require('./webpack.dev.conf')

webpackConfig.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");
// default port where dev server listens for incoming traffic
var port = process.env.PORT || 8998
var compiler = webpack(webpackConfig)

new WebpackDevServer(compiler, {
  contentBase: webpackConfig.output.path,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
    // hide all chunk dependencies because it's unreadable
    chunkModules: false,
    // noize
    assets: false
  }
  // noInfo: true
}).listen(8080, () => {
  console.log('listen on http://localhost:8080/postcss-salad');
});
