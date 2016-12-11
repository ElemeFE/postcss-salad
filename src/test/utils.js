/**
 * Module dependencies
 */
var fs = require("fs");
var path = require("path");

/**
 * Exposes functions
 *
 * @type {Object}
 */
module.exports = {
  /**
   * get fixture path
   * @param {String} name
   * @param {String} ext (optional extension, default to ".css")
   * @return the fixture filename
   */
  fixturePath(name, ext) {
    ext = (ext !== undefined ? ext : ".css")
    return path.join("src", "test", name + ext)
  },

  /**
   * read a fixture
   * @param {String} name
   * @param {String} ext (optional extension, default to ".css")
   * @return the fixture content
   */
  readFixture(name, ext) {
    return fs.readFileSync(this.fixturePath(name, ext), "utf8")
  },

  exists(name, ext) {
    return fs.existsSync(this.fixturePath(name, ext))
  },

  /**
   * read a fixture
   * @param {String} name
   * @param {String} ext (optional extension, default to ".css")
   * @return the fixture content
   */
  write(name, content) {
    return fs.writeFileSync(name, content)
  },
}
