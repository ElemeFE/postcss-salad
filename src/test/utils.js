const fs = require("fs")
const path = require("path")

module.exports = {
  fixturePath(name, ext = '.css') {
    return path.join('src/test/features',  name + ext)
  },

  readFixture(name, ext) {
    return fs.readFileSync(this.fixturePath(name, ext), "utf8")
  },

  exists(name, ext) {
    return fs.existsSync(this.fixturePath(name, ext))
  },

  write(name, content) {
    return fs.writeFileSync(name, content)
  },
}
