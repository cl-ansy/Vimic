var gulp = require('gulp');

var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


// Lint all JS
gulp.task('lint', function() {
    return gulp.src('Vimic/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Concat and Minify
gulp.task('dist', function() {
    return gulp.src([
            'Vimic/input.js',
            'Vimic/engine.js',
            'Vimic/maps.js',
            'Vimic/renderer.js',
            'Vimic/vimic.js'])
        .pipe(concat('vimic.all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('vimic.all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Default task
gulp.task('default', ['']);
