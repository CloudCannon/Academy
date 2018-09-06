'use strict';

module.exports = rewriteCssUrls;

//////////////////////////////

/**
 * Rewrite the urls in a css using the provided function.
 *
 * @param css
 * @param fn
 * @returns {*}
 */
function rewriteCssUrls(css, fn) {
  var replacePairs = replacePairsForResources(css, fn).concat(replacePairsForImports(css, fn));
  replacePairs.forEach(function(replacePair) {
    css = css.replace(replacePair[0], replacePair[1]);
  });

  return css;
}

/**
 * Find the replace pairs for @import tags without the `url()` tag.
 *
 * @param css
 * @param fn
 * @returns {Array}
 */
function replacePairsForImports(css, fn) {
  var matches = css.match(/@import(\s+)('|")(.+?)('|")/ig) || [];
  return matches.map(function(match) {
    var url = match.replace(/@import|'|"/gi, '').trim();
    return [match, '@import url("' + fn(url) + '")'];
  });
}

/**
 * Find the replace pairs for resources using the `url()` tag.
 *
 * @param css
 * @param fn
 * @returns {Array}
 */
function replacePairsForResources(css, fn) {
  var matches = css.match(/url\(.+?\)/ig) || [];
  return matches.map(function(match) {
    var url = match.replace(/url\(|\)|'|"/gi, '').trim();
    return [match, 'url("' + fn(url) + '")'];
  });
}
