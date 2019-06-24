'use strict';

var gulp = require('gulp');
var pug = require('gulp-pug');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var server = require('browser-sync').create();
var postcss = require('gulp-postcss');
var concat = require('gulp-concat');
var svgmin = require('gulp-svgmin');
var cwebp = require('gulp-cwebp');

gulp.task('serve', function() {
    server.init({
        server: {
            baseDir: "./build"
        }
    });
});

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

gulp.task('js', function() {
  return gulp.src('js/*.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('build'))
    .on('end', server.reload);
});

gulp.task('watch', function() {
  gulp.watch(['less/**/*.less', 'less/*.less'], gulp.series('less'));
  gulp.watch('js/*.js', gulp.series('js'));
  gulp.watch('build/*.html').on('change', server.reload);
})

gulp.task('default', gulp.series(
  gulp.parallel('less', 'js'),
  gulp.parallel('watch', 'serve'),
  ));



gulp.task('svgo', function () {
    return gulp.src('test/1/test.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('test/out'));
});


 
gulp.task('cwebp', function () {
    return gulp.src('test/1/test.jpg')
    .pipe(cwebp())
    .pipe(gulp.dest('test/out'));
});
