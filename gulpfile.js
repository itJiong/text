var gulp = require('gulp');
var minifyCss = require('gulp-clean-css');
gulp.task('default', function() {
    return gulp.src('*.css')
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist'));
});