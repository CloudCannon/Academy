var gutil = require("gulp-util"),
	through = require("through2").obj,
	cheerio = require("cheerio"),
	srcsetParser = require("srcset"),
	path = require("path");

var IGNORE_URL_REGEX = /^([a-z]+\:|\/\/|\#)/;
module.exports = function (options) {
	options = options || {};

	function rewritePath(file, href) {
		if (IGNORE_URL_REGEX.test(href)) {
			return href;
		}
		return "/" + path.join(options.baseurl, href);
	}

	return through(function (file, encoding, callback) {
		if (file.isNull()) {
			return callback(null, file);
		}
		if (file.isStream()) {
			return callback(new gutil.PluginError("cloudcannon-suite-dist-html", "Streaming not supported"));
		}

		file.sitePath = "/" + file.path.substring(file.base.length);
		file.sitePath = file.sitePath.replace(/\/index.html?/i, "/");

		var $ = cheerio.load(file.contents.toString(encoding));

		$("[href]").each(function () {
			var $el = $(this),
				href = $el.attr("href"),
				updated = rewritePath(file, href);

			if (updated !== href) {
				$el.attr("href", updated);
			}
		});

		$("[src]").each(function () {
			var $el = $(this),
				src = $el.attr("src"),
				updated = rewritePath(file, src);

			if (updated !== src) {
				$el.attr("src", updated);
			}
		});

		$("[srcset]").each(function () {
			var $el = $(this),
				srcset = $el.attr("srcset"),
				parsed = srcsetParser.parse(srcset);

			for (var i = 0; i < parsed.length; i++) {
				parsed[i].url = rewritePath(file, parsed[i].url);
			}

			var updated = srcsetParser.stringify(parsed);

			if (updated !== srcset) {
				$el.attr("srcset", updated);
			}
		});

		$("meta[http-equiv='refresh']").each(function () {
			var $el = $(this),
				content = $el.attr("content"),
				parts = content.split(";");

			for (var i = 0; i < parts.length; i++) {
				if (parts[i].indexOf("url=") === 0) {
					var href = parts[i].substring(4),
						updated = rewritePath(file, href);

					if (updated !== href) {
						parts[i] = "url=" + updated;
						$el.attr("content", parts.join(";"));
					}
					return;
				}
			}
		});

		file.contents = new Buffer($.html());
		this.push(file);
		callback();
	});
};