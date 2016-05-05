'use strict';

var gulp = require('gulp');
var postcss = require('postcss');

gulp.task('default', () => {
  return gulp.src('./src/**/*.css').pipe(
    postcss([
      require('postcss-salad')({ /* options */ })
    ])
  ).pipe(
    gulp.dest('./asserts')
  );
});

gulp.watch('./src/**/*.css', ['default']);