const gulp = require("gulp");
const suite = require("@cloudcannon/suite");

suite.jekyllDev(gulp, {
	serve: {
		port: 4001
	}
});

suite.screenshots(gulp);

suite.help(gulp);

gulp.task("default", ["help"]);
