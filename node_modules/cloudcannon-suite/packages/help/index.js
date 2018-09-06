var taskListing = require('gulp-task-listing');

module.exports = function (gulp, config) {
	config = config || {};

	gulp.task('help', taskListing.withFilters(/:/));
};