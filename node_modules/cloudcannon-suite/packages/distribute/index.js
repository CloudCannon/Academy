var del = require("del"),
	gutil = require("gulp-util"),
	path = require("path"),
	defaults = require("defaults"),
	webserver = require("gulp-webserver"),
	htmlRewrite = require("./plugins/html"),
	cssRewrite = require("./plugins/css"),
	rename = require("gulp-rename"),
	gulpSequence = require("gulp-sequence");

var configDefaults = {
	dist: {
		src: "dist/site",
		dest: "dist/prod",
		baseurl: ""
	},
	serve: {
		port: 9000,
		open: true,
		path: "/"
	}
};

module.exports = function (gulp, config) {
	config = config || {};

	config.dist = defaults(config.dist, configDefaults.dist);
	config.serve = defaults(config.serve, configDefaults.serve);

	if (!config.dist.baseurl) {
		gutil.log(gutil.colors.yellow("Warning:") + " Missing dist baseurl");
		return;
	}

	var cwd = process.cwd();
	config.dist._src = config.dist.src;
	config.dist._dest = config.dist.dest;
	config.dist.src = path.join(cwd, config.dist.src);
	config.dist.dest = path.join(cwd, config.dist.dest);

	var fullDest = path.join(config.dist.dest, config.dist.baseurl);

	gulp.task("dist:clean", function () {
		return del(config.dist.dest);
	});

	gulp.task("dist:rewrite-html", function () {
		return gulp.src(config.dist.src + "/**/*.html")
			.pipe(htmlRewrite({baseurl: config.dist.baseurl}))
			.pipe(gulp.dest(fullDest));
	});

	gulp.task("dist:rewrite-css", function () {
		return gulp.src(config.dist.src + "/**/*.css")
			.pipe(cssRewrite({baseurl: config.dist.baseurl}))
			.pipe(gulp.dest(fullDest));
	});

	gulp.task("dist:clone-assets", function () {
		return gulp.src([
				config.dist.src + "/**/*",
				"!" + config.dist.src + "/**/*.html",
				"!" + config.dist.src + "/**/*.css"
			], { nodir: true })
			.pipe(gulp.dest(fullDest));
	});

	gulp.task("dist:build", gulpSequence("dist:clean", ["dist:rewrite-html", "dist:rewrite-css", "dist:clone-assets"]));

	// -----
	// Serve

	gulp.task("dist:watch", function () {
		gulp.watch(config.dist._src + "/**/*", ["dist:build"]);
	});

	gulp.task("dist:serve", ["dist:build"], function() {
		return gulp.src(config.dist.dest)
			.pipe(webserver({
				open: path.join(config.dist.baseurl, config.serve.path),
				port: config.serve.port
			}));
	});


	// -------
	// Default

	gulp.task("dist", gulpSequence("dist:serve", "dist:watch"));
};