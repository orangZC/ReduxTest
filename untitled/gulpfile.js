/**
 * Created by lb on 2016/11/17.
 */
let gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    port = process.env.port || 3200,
    reactify = require("reactify");

gulp.task('browserify',function () {
    gulp.src('./app/container/app.js')
        .pipe(browserify({
            transform:reactify
        }))
        .pipe(gulp.dest('./dist/js'))
});

gulp.task('connect',function () {
    connect.server({
        root:'./',
        port:port,
        livereload:true
    })
});

gulp.task('js',function () {
    gulp.src('./dist/**/*.js')
        .pipe(connect.reload())
});

gulp.task('html',function () {
    gulp.src('./*.html')
        .pipe(connect.reload())
});

gulp.task('watch',function () {
    gulp.watch('./dist/**/*.js',['js']);
    gulp.watch('./*.html',['html']);
    gulp.watch('./dist/**/*.js',['browserify']);
});

gulp.task('defult',['browserify']);

gulp.task('server',['browserify','connect','watch']);