
/*!
 * Express - FileView
 * Copyright(c) 2010 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var View = require('./view')
  , fs = require('fs')
  , readFileSync = fs.readFileSync
  , statSync = fs.statSync;

/**
 * Expose `FileView`.
 */

exports = module.exports = FileView;

/**
 * Initialize a new `FileView` with the given `view` path and `options`. This
 * default `View` subclass uses the file-system to retrieve view contents.
 *
 * @param {String} view
 * @param {Object} options
 * @api private
 */

function FileView(view, options) {
  View.call(this, view, options);
};

// Inherit from `View`.
FileView.prototype.__proto__ = View.prototype;
FileView.prototype.constructor = FileView;

/**
 * Check if the view path exists.
 *
 * @api public
 */

View.prototype.__defineGetter__('exists', function(){
  try {
    statSync(this.path);
    return true;
  } catch (e) {
    return false;
  }
});

/**
 * Get view contents.
 *
 * @api public
 */

View.prototype.__defineGetter__('contents', function(){
  return readFileSync(this.path, 'utf8');
});
