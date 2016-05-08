'use strict';

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var fs = require('fs');
var path = require('path');

gulp.task('default', () => {
  return gulp.src('./src/**/*.css').pipe(
    postcss([
      require('postcss-salad')({ /* options */ }),
      require('postcss-discard-comments')({})
    ])
  ).pipe(gulp.dest('./asserts'));
});

gulp.watch('./src/**/*.css', ['default']);