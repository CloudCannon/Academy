var gutil = require("gulp-util"),
	path = require("path"),
	defaults = require("defaults"),
	gulpSequence = require("gulp-sequence"),
	webserver = require("gulp-webserver"),
	childProcess = require("child_process");

var configDefaults = {
	namespace: "dev",
	jekyll: {
		src: "src",
		dest: "dist/site",
	},
	tasks: [],
	serve: {
		port: 4000,
		open: true,
		path: "/"
	}
};

module.exports = function (gulp, config) {
	config = config || {};

	config.jekyll = defaults(config.jekyll, configDefaults.jekyll);
	config.serve = defaults(config.serve, configDefaults.serve);
	config.namespace = config.namespace || configDefaults.namespace;
	config.tasks = config.tasks || configDefaults.tasks;

	var cwd = process.cwd();
	config.jekyll._src = config.jekyll.src;
	config.jekyll._dest = config.jekyll.dest;
	config.jekyll.src = path.join(cwd, config.jekyll.src);
	config.jekyll.dest = path.join(cwd, config.jekyll.dest);

	var nspc = config.namespace;

	// ------
	// Jekyll

	var JEKYLL_OPTIONS = {
		"--destination": config.jekyll.dest
	};

	function runBundleCommand(commands, done) {
		gutil.log(gutil.colors.blue("$") + " bundle " + commands.join(" "));
		return childProcess.spawn("bundle", commands, {
				cwd: config.jekyll.src,
				stdio: "inherit"
			}).on("close", done);
	}

	gulp.task(nspc + ":build", function (done) {
		var commands = ["exec", "jekyll", "build"];
		for (var arg in JEKYLL_OPTIONS) {
			if (JEKYLL_OPTIONS.hasOwnProperty(arg)) {
				commands.push(arg, JEKYLL_OPTIONS[arg]);
			}
		}

		return runBundleCommand(commands, done);
	});

	gulp.task(nspc + ":install", function (done) {
		return runBundleCommand(["install"], done);
	});

	// ------------
	// Custom Tasks

	var customTasks = [];
	for (var taskName in config.tasks) {
		if (config.tasks.hasOwnProperty(taskName)) {
			gulp.task(nspc + ":" + taskName, config.tasks[taskName].task);
			customTasks.push(nspc + ":" + taskName);
		}
	}

	// -----
	// Serve

	gulp.task(nspc + ":watch", function () {
		var jekyllWatchFiles = [config.jekyll._src + "/**/*"];
		for (var taskName in config.tasks) {
			if (config.tasks.hasOwnProperty(taskName)) {
				gulp.watch(config.tasks[taskName].watch, [nspc + ":" + taskName]);

				config.tasks[taskName].watch.forEach(function (glob) {
					jekyllWatchFiles.push("!" + glob);
				});
			}
		}

		gulp.watch(jekyllWatchFiles, [nspc + ":build"]);
	});

	gulp.task(nspc + ":serve", function() {
		var options = {
			port: config.serve.port
		};

		if (config.serve.open) {
			options.open = config.serve.path || "/";
		}

		return gulp.src(config.jekyll.dest)
			.pipe(webserver(options));
	});


	// -------
	// Default

	if (customTasks.length > 0) {
		gulp.task(nspc, gulpSequence(customTasks, nspc + ":build", [nspc + ":watch", nspc + ":serve"]));
	} else {
		gulp.task(nspc, gulpSequence(nspc + ":build", [nspc + ":watch", nspc + ":serve"]));
	}
};