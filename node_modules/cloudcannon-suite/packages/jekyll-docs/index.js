var defaults = require("defaults"),
	jekyllDev = require("../jekyll-dev");

module.exports = function (gulp, config) {
	config = config || {};
	config = defaults(config, {
		namespace: "docs",
		jekyll: {
			src: "docs",
			dest: "dist/docs"
		},
		serve: {
			port: 5000,
			open: true,
			path: "/"
		}
	});

	return jekyllDev(gulp, config);
};