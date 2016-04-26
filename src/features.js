/* eslint-disable max-len */
export default {
  /**
   * REMINDER:
   * ******************
   * order is important
   * ******************
   */

  // https://npmjs.com/package/postcss-bem
  bem: (options) => require("postcss-bem")(options),

  // https://npmjs.com/package/precss
  precss: (options) => require("precss")(options),

  // https://npmjs.com/package/postcss-calc
  calc: (options) => require("postcss-calc")(options),

  // https://npmjs.com/package/postcss-initial
  initial: (options) => require("postcss-initial")(options),

  // https://npmjs.com/package/postcss-inline-svg
  inlineSvg: (options) => require("postcss-inline-svg")(options),

  // https://npmjs.com/package/postcss-short-font-size
  shortFontSize: (options) => require("postcss-short-font-size")(options),

  // https://npmjs.com/package/postcss-short-spacing
  shortSpacing: (options) => require("postcss-short-spacing")(options),

  // https://npmjs.com/package/postcss-short-size
  shortSize: (options) => require("postcss-short-size")(options),

  // https://npmjs.com/package/postcss-short-position
  shortPosition: (options) => require("postcss-short-position")(options),

  // https://npmjs.com/package/postcss-shape
  shape: (options) => require("postcss-shape")(options),

  // https://npmjs.com/package/pixrem
  rem: (options) => require("pixrem")(options),

  // https://npmjs.com/package/autoprefixer
  autoprefixer: (options) => require("autoprefixer")(options)
}
