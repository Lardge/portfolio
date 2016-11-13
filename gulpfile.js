var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('default', function () {
    return gulp.src('./css/style.css')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});
