const index = require('./pages/index.md');
const reset = require('./pages/reset.md');
const lastedSyntax = require('./pages/lasted-syntax.md');
const shortProperty = require('./pages/short-property.md');
const RemToPixel = require('./pages/Rem-to-Pixel.md');
const inlineSvg = require('./pages/inline-svg.md');
const utils = require('./pages/utils.md');
const basicShape = require('./pages/basic-shape.md');
const grid = require('./pages/grid.md');
const sassSyntax = require('./pages/sass-syntax.md');

export default [
  {
    path: '/',
    component: {
      template: `<div>${index}</div>`,
    },
  },
  {
    path: '/index',
    component: {
      template: `<div>${index}</div>`,
    },
  },
  {
    path: '/reset',
    component: {
      template: `<div>${reset}</div>`,
    },
  },
  {
    path: '/lasted-syntax',
    component: {
      template: `<div>${lastedSyntax}</div>`,
    },
  },
  {
    path: '/short-property',
    component: {
      template: `<div>${shortProperty}</div>`,
    },
  },
  {
    path: '/Rem-to-Pixel',
    component: {
      template: `<div>${RemToPixel}</div>`,
    },
  },
  {
    path: '/inline-svg',
    component: {
      template: `<div>${inlineSvg}</div>`,
    },
  },
  {
    path: '/utils',
    component: {
      template: `<div>${utils}</div>`,
    },
  },
  {
    path: '/basic-shape',
    component: {
      template: `<div>${basicShape}</div>`,
    },
  },
  {
    path: '/grid',
    component: {
      template: `<div>${grid}</div>`,
    },
  },
  {
    path: '/sass-syntax',
    component: {
      template: `<div>${sassSyntax}</div>`,
    },
  },
];
