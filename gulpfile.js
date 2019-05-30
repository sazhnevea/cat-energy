'use strict';

var gulp = require('gulp');
var pug = require('gulp-pug');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var server = require('browser-sync').create();

gulp.task('serve', function() {
    server.init({
        server: {
            baseDir: "./build"
        }
    });
});

gulp.task('pug', function() {
  return gulp.src('source/pug/pages/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('build'))
    .on('end', server.reload);
})

gulp.task('less', function() {
  return gulp.src('less/style.less')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build'))
    .on('end', server.reload);
});

gulp.task('watch', function() {
  gulp.watch('**/*.less', gulp.series('less'));
  gulp.watch('source/pug/**/*.pug', gulp.series('pug'));

})

gulp.task('default', gulp.series(
  gulp.parallel('pug', 'less'),
  gulp.parallel('watch', 'serve'),
  ));
