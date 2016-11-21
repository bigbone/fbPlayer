var gulp            = require('gulp');
var browserify      = require('gulp-browserify');
var uglify          = require('gulp-uglify');
var webserver       = require('gulp-webserver');
var gutil           = require('gulp-util');
var rename = require('gulp-rename');

gulp.task('build', function() {
    gulp.src('./src/js/music/index.js')
        .pipe(browserify().on('error', gutil.log))
        .pipe(rename('musicplayer.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dest'));
});
gulp.task('watch', ['build'], function() {
    gulp.watch('./src/**/*', ['build']);
    gulp.src('./').pipe(webserver({
        livereload: true,
        directoryListing: true
    }));
});

gulp.task('default', ['watch', 'build']);