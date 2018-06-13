var gutil = require('gulp-util');
var through = require('through2');
var webshot = require('webshot');
var path = require("path");
var connect = require("connect");
var serveStatic = require('serve-static');
var url = require('url');


module.exports = function(opt) {

  if (!opt) {
    opt = {};
  }

  opt.p = opt.p || 9000;
  opt.streamType = opt.streamType || 'png';

  var app = connect();
  var resolvedRoot = path.resolve(opt.root);
  app.use(serveStatic(resolvedRoot));
  var server = app.listen(opt.p);


  return through.obj(function(file, enc, next) {
    if (!opt.root) {
      this.emit('error', new gutil.PluginError('gulp-webshot', 'Please root directory'));
      gutil.log(gutil.colors.red('Please root directory', ' root:"Theme" '));
      return next();
    }

    if (!opt.screenSize && !opt.dest && !opt.dest) {
      opt.screenSize = {
        width: 1440,
        height: 900
      };
      opt.dest = 'snapshot/';
    }


    if (file.isNull()) {
      this.push(file);
      return next();
    }

    if (file.isStream()) {
      this.emit('error', new gutil.PluginError('gulp-webshot', 'Streaming not supported'));
      return next();
    }


    if (opt.root) {
      var pathArr = path.dirname(file.path).split(path.sep);
      var baseIndex = pathArr.indexOf(opt.root);
      var basepath = path.relative(opt.root, path.dirname(file.path));
    }



    var parsep = path.basename(file.relative);
    var name = path.basename(file.relative, '.html');
    var filename = path.join(basepath, name + '.' +opt.streamType);
    if(opt.filename){
      filename = opt.filename+ '.' +opt.streamType;
    }
    if(opt.flatten) {
      separator = /[._-a-zA-Z0-9]+/.test(opt.flatten) ? opt.flatten : '__';
      filename = filename.replace(/\//g, separator);
    }
    filename = path.join(opt.dest, filename);
    var relativeFilePath = path.join(path.sep, basepath, parsep);
    var urlPath = url.resolve('http://localhost:' + opt.p, relativeFilePath);


    webshot(urlPath, filename, opt, function(err, stream) {
      if (err) {
        this.emit('error', new gutil.PluginError('gulp-webshot', err));
        server.close();
      } else {
        gutil.log('gulp-webshot:', gutil.colors.green(' ✔ ') + file.relative + gutil.colors.gray(' ( Save screenshot ) '));
        next();
      }
    }.bind(this));

    this.push(file);

}, function(done) {

    server.close(function() {
      gutil.log('gulp-webshot:', gutil.colors.yellow(' Everything is fine :) '));
      done();
    });

  });

};
