var gulp = require('gulp'),
    webshot = require('./');

gulp.task('webshot', function() {
  return gulp.src('./theme/*.html')
        .pipe(webshot({ dest:'build/',root:'theme'}));
});


gulp.task('default',gulp.series('webshot'));
