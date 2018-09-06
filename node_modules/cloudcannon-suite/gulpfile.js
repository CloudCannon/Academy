const gulp = require("gulp");
const suite = require(".");

suite.jekyllDocs(gulp);
suite.screenshots(gulp);
suite.help(gulp);
