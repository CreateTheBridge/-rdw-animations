"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgHeader(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 560 650"
  }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient",
    x1: 290.29,
    y1: 1011.91,
    x2: 285.17,
    y2: 793.86,
    gradientTransform: "translate(0 -322.59)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0,
    stopColor: "#ff8789"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.53,
    stopColor: "#84a2fc"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.72,
    stopColor: "#205fe3"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#030f28"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-2",
    x1: -2979.47,
    y1: -410.72,
    x2: -2808.56,
    y2: -271.85,
    gradientTransform: "matrix(-.87 -.5 0 1 -2063.26 -813.68)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0,
    stopColor: "#ff8789"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.52,
    stopColor: "#84a2fc"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.72,
    stopColor: "#205fe3"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#030f28"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-3",
    x1: -2910.42,
    y1: -272.67,
    x2: -2808.12,
    y2: -371.79,
    gradientTransform: "matrix(-.87 -.5 0 1 -2063.26 -813.68)",
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-4",
    x1: 168.5,
    y1: 1162.89,
    x2: 339.41,
    y2: 1301.76,
    gradientTransform: "matrix(.87 -.5 0 1 -96.99 -808.92)",
    xlinkHref: "#header_svg__linear-gradient-2"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-5",
    x1: 237.66,
    y1: 1301.54,
    x2: 339.96,
    y2: 1202.41,
    gradientTransform: "matrix(.87 -.5 0 1 -96.99 -808.92)",
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-6",
    x1: 290.29,
    y1: 986.88,
    x2: 285.17,
    y2: 768.82,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-7",
    x1: 255.59,
    y1: 1033.98,
    x2: 286.94,
    y2: 728.81,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-8",
    x1: 119.83,
    y1: 492.72,
    x2: 365.83,
    y2: 885.98,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-9",
    x1: 400.98,
    y1: 949.63,
    x2: 163.13,
    y2: 505.55,
    gradientTransform: "translate(0 -322.59)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.04,
    stopColor: "#ff8789"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.53,
    stopColor: "#84a2fc"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.72,
    stopColor: "#205fe3"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#030f28"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-10",
    x1: 152,
    y1: 853.81,
    x2: 301.29,
    y2: 688.98,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-11",
    x1: 188.14,
    y1: 511.33,
    x2: 331.73,
    y2: 811.54,
    gradientTransform: "translate(0 -322.59)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0,
    stopColor: "#ffa687"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.53,
    stopColor: "#84a2fc"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.72,
    stopColor: "#205fe3"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#030f28"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-12",
    x1: 386.35,
    y1: 915.57,
    x2: 259.9,
    y2: 633.17,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-13",
    x1: 291.18,
    y1: 765.65,
    x2: 281.52,
    y2: 629.57,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-14",
    x1: 355.29,
    y1: 886.78,
    x2: 292.96,
    y2: 508.87,
    gradientTransform: "translate(0 -322.59)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0,
    stopColor: "#ff8789"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.53,
    stopColor: "#84a2fc"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.72,
    stopColor: "#205fe3"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#030f28",
    stopOpacity: 0
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-15",
    x1: 57.3,
    y1: 147.96,
    x2: -110.24,
    y2: 269.39,
    gradientTransform: "matrix(.87 .5 .87 -.5 143.55 424.96)",
    xlinkHref: "#header_svg__linear-gradient-14"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-16",
    x1: -40.75,
    y1: 170.31,
    x2: -116.51,
    y2: 290.18,
    gradientTransform: "matrix(.87 .5 .87 -.5 144.93 547.24)",
    xlinkHref: "#header_svg__linear-gradient-14"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-17",
    x1: 31.94,
    y1: 213.88,
    x2: -94.37,
    y2: 259.08,
    gradientTransform: "matrix(.87 .5 .87 -.5 144.93 488.99)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0,
    stopColor: "#ff8789"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.53,
    stopColor: "#84a2fc"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.72,
    stopColor: "#205fe3"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#030f28",
    stopOpacity: 0.46
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-18",
    x1: 192.4,
    y1: 468.36,
    x2: 379.43,
    y2: 468.36,
    gradientTransform: "translate(0 -322.59)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0,
    stopColor: "#0071bc"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#1b1464"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-19",
    x1: 283.52,
    y1: 513.77,
    x2: 376.53,
    y2: 508.69,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-20",
    x1: 229.57,
    y1: 596.78,
    x2: 282.97,
    y2: 503.79,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-21",
    x1: 274.9,
    y1: 502.39,
    x2: 336.77,
    y2: 355.4,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-22",
    x1: -2965.18,
    y1: -348.7,
    x2: -2884.17,
    y2: -320.26,
    gradientTransform: "matrix(-.87 -.5 0 1 -2396.75 -833.47)",
    xlinkHref: "#header_svg__linear-gradient-2"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-23",
    x1: -2934.97,
    y1: -319.65,
    x2: -2880.85,
    y2: -342.31,
    gradientTransform: "matrix(-.87 -.5 0 1 -2396.75 -833.47)",
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-24",
    x1: -2958.43,
    y1: -376.19,
    x2: -2879.98,
    y2: -325.29,
    gradientTransform: "matrix(-.87 -.5 0 1 -2412.98 -829.87)",
    xlinkHref: "#header_svg__linear-gradient-2"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-25",
    x1: 158.32,
    y1: 612.96,
    x2: 238.52,
    y2: 713.49,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-26",
    x1: -2962.64,
    y1: -409.94,
    x2: -2832.22,
    y2: -290.15,
    gradientTransform: "matrix(-.87 -.5 0 1 -2289.4 -774.21)",
    xlinkHref: "#header_svg__linear-gradient-2"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-27",
    x1: -2909.22,
    y1: -291.8,
    x2: -2832.81,
    y2: -375.49,
    gradientTransform: "matrix(-.87 -.5 0 1 -2289.4 -774.21)",
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-28",
    x1: 144.34,
    y1: 594.37,
    x2: 212.99,
    y2: 703.99,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-29",
    x1: -2990.08,
    y1: -420.89,
    x2: -2780.66,
    y2: -250.73,
    gradientTransform: "matrix(-.87 -.5 0 1 -2289.21 -689.45)",
    xlinkHref: "#header_svg__linear-gradient-2"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-30",
    x1: -2905.35,
    y1: -251.6,
    x2: -2780.01,
    y2: -373.06,
    gradientTransform: "matrix(-.87 -.5 0 1 -2289.21 -689.45)",
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-31",
    x1: 210.29,
    y1: -354.41,
    x2: 290.7,
    y2: -317.71,
    gradientTransform: "matrix(.87 .5 0 1 -75.37 601.43)",
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-32",
    x1: 211.2,
    y1: -356.42,
    x2: 277.1,
    y2: -326.34,
    gradientTransform: "matrix(.87 .5 0 1 11.11 701.32)",
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-33",
    x1: 213.21,
    y1: -360.85,
    x2: 247.26,
    y2: -345.31,
    gradientTransform: "matrix(.87 .5 0 1 -12 689.4)",
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-34",
    x1: 218.02,
    y1: -369.1,
    x2: 315.8,
    y2: -295.61,
    gradientTransform: "matrix(.87 .5 0 1 -19.46 630.29)",
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-35",
    x1: 235.34,
    y1: -373.23,
    x2: 247.64,
    y2: -340.92,
    gradientTransform: "matrix(.87 .5 0 1 -75.37 657.34)",
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-36",
    x1: 235.33,
    y1: -373.23,
    x2: 247.63,
    y2: -340.92,
    gradientTransform: "matrix(.87 .5 0 1 -75.37 672.99)",
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-37",
    x1: 223.2,
    y1: -370.79,
    x2: 240.2,
    y2: -345.01,
    gradientTransform: "matrix(.87 .5 0 1 -75.37 686.41)",
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-38",
    x1: 110.66,
    y1: 695.82,
    x2: 162.88,
    y2: 710.03,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-39",
    x1: 104.74,
    y1: 695.81,
    x2: 156.96,
    y2: 710.02,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-40",
    x1: 188.84,
    y1: 787.39,
    x2: 242.27,
    y2: 803.43,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-41",
    x1: 185.18,
    y1: 787.37,
    x2: 238.61,
    y2: 803.41,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-42",
    x1: 166.16,
    y1: 727.21,
    x2: 245.04,
    y2: 747.45,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-43",
    x1: 160.2,
    y1: 727.21,
    x2: 239.08,
    y2: 747.45,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-44",
    x1: 157.95,
    y1: 1152.67,
    x2: 367.36,
    y2: 1322.83,
    gradientTransform: "matrix(.87 -.5 0 1 136.35 -689.09)",
    xlinkHref: "#header_svg__linear-gradient-2"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-45",
    x1: 242.71,
    y1: 1322.59,
    x2: 368.05,
    y2: 1201.13,
    gradientTransform: "matrix(.87 -.5 0 1 136.35 -689.09)",
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-46",
    x1: -2935.97,
    y1: 1216.15,
    x2: -2881.33,
    y2: 1241.1,
    gradientTransform: "matrix(-.87 .5 0 1 -2077.89 597.24)",
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-47",
    x1: -2939.67,
    y1: 1224.3,
    x2: -2825.71,
    y2: 1276.31,
    gradientTransform: "matrix(-.87 .5 0 1 -2144.12 637.5)",
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-48",
    x1: -2902.44,
    y1: 1199.27,
    x2: -2891.07,
    y2: 1237.17,
    gradientTransform: "matrix(-.87 .5 0 1 -2144.12 713.54)",
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-49",
    x1: -2901.75,
    y1: 1199.83,
    x2: -2892.09,
    y2: 1235.01,
    gradientTransform: "matrix(-.87 .5 0 1 -2144.12 728.45)",
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-50",
    x1: 469.38,
    y1: 679.36,
    x2: 425.08,
    y2: 692.67,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-51",
    x1: 472.42,
    y1: 679.37,
    x2: 428.12,
    y2: 692.67,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-52",
    x1: 416.97,
    y1: 704.9,
    x2: 471.03,
    y2: 748.1,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-53",
    x1: 427.54,
    y1: 707.35,
    x2: 481.59,
    y2: 750.55,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-54",
    x1: 332.33,
    y1: 733.32,
    x2: 416.59,
    y2: 775.42,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-55",
    x1: 344.25,
    y1: 733.33,
    x2: 428.51,
    y2: 775.43,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-56",
    x1: 212.72,
    y1: 1131.97,
    x2: 340.78,
    y2: 1299.4,
    gradientTransform: "matrix(.87 -.5 0 1 136.35 -775.53)",
    xlinkHref: "#header_svg__linear-gradient-2"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-57",
    x1: 267.26,
    y1: 1294.94,
    x2: 337.95,
    y2: 1184.72,
    gradientTransform: "matrix(.87 -.5 0 1 136.35 -775.53)",
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-58",
    x1: -2935.75,
    y1: 1214.36,
    x2: -2848.87,
    y2: 1262.8,
    gradientTransform: "matrix(-.87 .5 0 1 -2154.56 559.97)",
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-59",
    x1: -2929.93,
    y1: 1205.04,
    x2: -2832.16,
    y2: 1278.52,
    gradientTransform: "matrix(-.87 .5 0 1 -2077.77 517.47)",
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-60",
    x1: 463.11,
    y1: 614.12,
    x2: 384.23,
    y2: 634.36,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-61",
    x1: 469.08,
    y1: 614.12,
    x2: 390.2,
    y2: 634.36,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-62",
    x1: 320.42,
    y1: 656.7,
    x2: 391.4,
    y2: 668.2,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-63",
    x1: 324.89,
    y1: 656.69,
    x2: 395.88,
    y2: 668.19,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-64",
    x1: 28.54,
    y1: 176.35,
    x2: -140.93,
    y2: 289.09,
    gradientTransform: "matrix(.87 .5 .87 -.5 -49.59 781.36)",
    xlinkHref: "#header_svg__linear-gradient-14"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-65",
    x1: -96.16,
    y1: 260.78,
    x2: -24.44,
    y2: 285.59,
    gradientTransform: "matrix(.87 .5 .87 -.5 -49.4 781.63)",
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-66",
    x1: -11.52,
    y1: 203.03,
    x2: -127.13,
    y2: 279.94,
    gradientTransform: "matrix(.87 .5 .87 -.5 -49.4 781.63)",
    xlinkHref: "#header_svg__linear-gradient-14"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-67",
    x1: -96.14,
    y1: 260.72,
    x2: -24.42,
    y2: 285.54,
    gradientTransform: "matrix(.87 .5 .87 -.5 -49.4 777.59)",
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-68",
    x1: -11.52,
    y1: 203.02,
    x2: -127.14,
    y2: 279.93,
    gradientTransform: "matrix(.87 .5 .87 -.5 -49.4 777.59)",
    xlinkHref: "#header_svg__linear-gradient-14"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-69",
    x1: 109.13,
    y1: 802.11,
    x2: 154,
    y2: 777.95,
    gradientTransform: "translate(0 -322.59)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0,
    stopColor: "#ff8789"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.53,
    stopColor: "#84a2fc"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.72,
    stopColor: "#205fe3"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.97,
    stopColor: "#030f28"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-70",
    x1: 66.44,
    y1: 887.48,
    x2: 79.11,
    y2: 928.73,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-71",
    x1: 121.56,
    y1: 888.4,
    x2: 92.41,
    y2: 949.1,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-72",
    x1: 93.3,
    y1: 736.25,
    x2: 99.13,
    y2: 775.72,
    gradientTransform: "translate(0 -322.59)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0,
    stopColor: "#ff8789"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.65,
    stopColor: "#84a2fc"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.83,
    stopColor: "#205fe3"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#030f28"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-73",
    x1: 103.39,
    y1: 798.6,
    x2: 154.83,
    y2: 771.39,
    xlinkHref: "#header_svg__linear-gradient-69"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-74",
    x1: 119.73,
    y1: 793.1,
    x2: 155.83,
    y2: 802.02,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-75",
    x1: 132.45,
    y1: 948.71,
    x2: 67.55,
    y2: 773.95,
    gradientTransform: "translate(0 -322.59)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0,
    stopColor: "#ff8789"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.35,
    stopColor: "#84a2fc"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.47,
    stopColor: "#205fe3"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#030f28",
    stopOpacity: 0
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-76",
    x1: 28.53,
    y1: 176.33,
    x2: -140.94,
    y2: 289.07,
    gradientTransform: "matrix(.87 .5 .87 -.5 327.64 786.28)",
    xlinkHref: "#header_svg__linear-gradient-14"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-77",
    x1: -96.13,
    y1: 260.68,
    x2: -24.4,
    y2: 285.49,
    gradientTransform: "matrix(.87 .5 .87 -.5 327.83 786.56)",
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-78",
    x1: -11.54,
    y1: 202.99,
    x2: -127.16,
    y2: 279.91,
    gradientTransform: "matrix(.87 .5 .87 -.5 327.83 786.56)",
    xlinkHref: "#header_svg__linear-gradient-14"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-79",
    x1: -96.15,
    y1: 260.74,
    x2: -24.42,
    y2: 285.55,
    gradientTransform: "matrix(.87 .5 .87 -.5 327.83 782.51)",
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-80",
    x1: -11.53,
    y1: 203,
    x2: -127.15,
    y2: 279.92,
    gradientTransform: "matrix(.87 .5 .87 -.5 327.83 782.51)",
    xlinkHref: "#header_svg__linear-gradient-14"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-81",
    x1: 437.18,
    y1: 904.15,
    x2: 489.17,
    y2: 918.77,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-82",
    x1: 419.68,
    y1: 914.81,
    x2: 467.26,
    y2: 931.86,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-83",
    x1: 434.72,
    y1: 746.26,
    x2: 482.13,
    y2: 753.94,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-84",
    x1: 430.21,
    y1: 839.37,
    x2: 444.69,
    y2: 845.34,
    xlinkHref: "#header_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "header_svg__linear-gradient-85",
    x1: 494.6,
    y1: 955.25,
    x2: 452.58,
    y2: 769.1,
    gradientTransform: "translate(0 -322.59)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0.06,
    stopColor: "#ff8789"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.35,
    stopColor: "#84a2fc"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.47,
    stopColor: "#205fe3"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#030f28",
    stopOpacity: 0
  })), /*#__PURE__*/React.createElement("clipPath", {
    id: "header_svg__clip-path"
  }, /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-1",
    d: "M64.4 408.8h85.7V619H64.4z"
  })), /*#__PURE__*/React.createElement("clipPath", {
    id: "header_svg__clip-path-2"
  }, /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-1",
    d: "M418.3 402.5h74.6v211h-74.6z"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "header_svg__radial-gradient",
    cx: -1361.85,
    cy: -47.6,
    r: 1,
    gradientTransform: "matrix(-27.01 -194.24 249.42 -34.69 -24722.67 -265932.66)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0,
    stopColor: "#ff8789"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.57,
    stopColor: "#84a2fc"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.8,
    stopColor: "#205fe3"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#030f28"
  })), /*#__PURE__*/React.createElement("style", null, ".header_svg__cls-1,.header_svg__cls-68{fill:none}.header_svg__cls-3{opacity:.2}.header_svg__cls-4{opacity:.8}.header_svg__cls-10{opacity:.5}.header_svg__cls-17{opacity:.6}.header_svg__cls-23{fill:#091e4c}.header_svg__cls-36{fill:#fff}.header_svg__cls-37{opacity:.3}.header_svg__cls-68{stroke:#fff;stroke-width:.37px}.header_svg__cls-88{fill:#070b8a}.header_svg__cls-92{fill:#1f2294}.header_svg__cls-93{fill:#2e3192}.header_svg__cls-94{fill:#4060ce}.header_svg__cls-96{opacity:.4}.header_svg__cls-106{fill:#00156c}.header_svg__cls-109{fill:#202496}")), /*#__PURE__*/React.createElement("g", {
    id: "header_svg__bgstructure"
  }, /*#__PURE__*/React.createElement("g", {
    id: "header_svg__bgstructure-2",
    "data-name": "bgstructure"
  }, /*#__PURE__*/React.createElement("g", {
    id: "header_svg__bgstructure-3",
    "data-name": "bgstructure"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M526.7 475c14.5 8.5 14.5 22 .2 30.5L312.6 630.3c-14.5 8.5-37.9 8.5-52.4 0L44.6 505.5c-14.5-8.5-14.7-22-.2-30.5l214.3-124.8c14.5-8.5 37.9-8.5 52.4 0z",
    stroke: "url(#header_svg__linear-gradient)",
    strokeWidth: 0.75,
    strokeMiterlimit: 10,
    fill: "none"
  }), /*#__PURE__*/React.createElement("g", {
    className: "header_svg__cls-3"
  }, /*#__PURE__*/React.createElement("g", {
    className: "header_svg__cls-4"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M468.6 282.6L366 223.4c-4.3-2.5-7.8-.5-7.8 4.5v78.5c0 5 3.5 11.1 7.8 13.6l102.6 59.2c4.3 2.5 7.8.5 7.8-4.5v-78.5c.1-5-3.4-11.1-7.8-13.6z",
    fill: "url(#header_svg__linear-gradient-2)",
    fillOpacity: 0.8
  }), /*#__PURE__*/React.createElement("path", {
    d: "M468.6 282.6L366 223.4c-4.3-2.5-7.8-.5-7.8 4.5v78.5c0 5 3.5 11.1 7.8 13.6l102.6 59.2c4.3 2.5 7.8.5 7.8-4.5v-78.5c.1-5-3.4-11.1-7.8-13.6z",
    stroke: "url(#header_svg__linear-gradient-3)",
    strokeWidth: 0.67,
    fill: "none"
  }))), /*#__PURE__*/React.createElement("g", {
    className: "header_svg__cls-3"
  }, /*#__PURE__*/React.createElement("g", {
    className: "header_svg__cls-4"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M97.6 287.1l102.6-59.2c4.3-2.5 7.8-.5 7.8 4.5v78.5c0 5-3.5 11.1-7.8 13.6L97.6 383.7c-4.3 2.5-7.8.5-7.8-4.5v-78.5c0-5 3.5-11.1 7.8-13.6z",
    fill: "url(#header_svg__linear-gradient-4)",
    fillOpacity: 0.8
  }), /*#__PURE__*/React.createElement("path", {
    d: "M97.6 287.1l102.6-59.2c4.3-2.5 7.8-.5 7.8 4.5v78.5c0 5-3.5 11.1-7.8 13.6L97.6 383.7c-4.3 2.5-7.8.5-7.8-4.5v-78.5c0-5 3.5-11.1 7.8-13.6z",
    stroke: "url(#header_svg__linear-gradient-5)",
    strokeWidth: 0.67,
    fill: "none"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M526.7 449.9c14.5 8.5 14.5 22 .2 30.5L312.6 605.3c-14.5 8.5-37.9 8.5-52.4 0L44.6 480.5c-14.5-8.5-14.7-22-.2-30.5l214.3-124.8c14.5-8.5 37.9-8.5 52.4 0z",
    stroke: "url(#header_svg__linear-gradient-6)",
    strokeWidth: 0.75,
    strokeMiterlimit: 10,
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M470.7 401.3c11 6.5 11.2 16.7.2 23.2L307 519.6c-11 6.5-28.9 6.5-40.2 0l-165-95.1c-11-6.5-11.2-16.7-.2-23.2l163.9-95.1c11-6.5 28.9-6.5 40.2 0z",
    fill: "url(#header_svg__linear-gradient-7)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M479.1 412.9v.8a1.8 1.8 0 01-.2 1c0 .2-.2.6-.2.8s-.2.6-.2.8-.2.4-.4.8-.2.6-.4 1c-.2.2-.2.4-.4.6a3.51 3.51 0 01-.8 1 3.51 3.51 0 01-.8 1l-.2.2-1.1 1.1a4.36 4.36 0 01-1 .8c-.2.2-.6.4-.8.6a2 2 0 00-1 .8 2.84 2.84 0 00-1.1.8l-163.9 95.1a8.45 8.45 0 01-2.7 1.3c-.2.2-.6.2-.8.4a10.5 10.5 0 01-2.3.8c-.2 0-.6.2-.8.2-.6.2-1 .2-1.5.4s-.8.2-1.1.4c-.6.2-1 .2-1.5.4-.4 0-.8.2-1.1.2a17.5 17.5 0 01-3.2.4h-1c-.6 0-1.3.2-1.9.2h-5.4a2.74 2.74 0 01-1.3-.2c-.4 0-1-.2-1.3-.2s-.8-.2-1.3-.2-1-.2-1.5-.2-.8-.2-1.1-.2c-.6-.2-1.1-.2-1.7-.4-.4 0-.6-.2-1-.2-1-.4-2.1-.6-3-1-.6-.2-1-.4-1.5-.6-.2-.2-.6-.2-.8-.4a21.16 21.16 0 00-2.1-1.1l-165-95.1c-5.5-3.2-8.4-7.4-8.4-11.8l.2 43.5c0 4.2 2.9 8.6 8.4 11.8l165 95.1a21.16 21.16 0 002.1 1.1c.2.2.6.2.8.4.4.2.8.4 1.3.6h.2a21.08 21.08 0 003 1h.2c.2 0 .6.2.8.2a5.26 5.26 0 001.7.4c.2 0 .4 0 .4.2a1.51 1.51 0 01.8.2c.6 0 1 .2 1.5.2a.73.73 0 01.6.2h.8c.4 0 1 .2 1.3.2h7a6.15 6.15 0 001.9-.2h1c1.1-.2 2.1-.2 3.2-.4h.2c.4 0 .6-.2 1-.2a15.46 15.46 0 001.5-.4 2.1 2.1 0 001.1-.4c.6-.2 1-.2 1.5-.4h.4c.2 0 .4-.2.6-.2.8-.2 1.5-.6 2.3-.8.2-.2.6-.2.8-.4 1-.4 1.9-1 2.7-1.3l163.9-95.1c.2 0 .2-.2.4-.2.2-.2.6-.4.8-.6a2 2 0 001-.8c.2-.2.6-.4.8-.6a3.51 3.51 0 001-.8.2.2 0 00.2-.2l1-1 .2-.2.6-.6a.7.7 0 00.2-.4 3.51 3.51 0 01.8-1c0-.2.2-.2.2-.4a.2.2 0 01.2-.2c.2-.4.4-.6.4-.9s.2-.4.2-.6v-.2a1.2 1.2 0 00.2-.8c0-.2.2-.4.2-.6v-.2a1.8 1.8 0 01.2-1v-.8z",
    style: {
      isolation: "isolate"
    },
    fill: "url(#header_svg__linear-gradient-8)",
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("path", {
    d: "M470.1 401.1c11 6.5 11 16.7.2 23.2l-163.5 94.9c-11 6.5-28.9 6.5-40 0l-164.5-94.9c-11-6.5-11.2-16.7-.2-23.2l163.5-94.9c11-6.5 28.9-6.5 40 0z",
    stroke: "url(#header_svg__linear-gradient-9)",
    strokeWidth: 1.49,
    strokeMiterlimit: 10,
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M212.6 405.5c0-.3.1-.7.1-1s.1-.8.2-1.1.1-.7.2-1 .2-.7.3-1.1.2-.7.3-1a4.87 4.87 0 01.4-1.1 6.89 6.89 0 01.4-1 11.73 11.73 0 01.5-1.1c.1-.3.3-.6.4-.9a10.91 10.91 0 01.6-1.1c.2-.3.3-.6.5-.9s.5-.9.8-1.3.3-.5.5-.8a7.55 7.55 0 011.1-1.4c.2-.2.3-.5.5-.7l.3-.3a17.41 17.41 0 011.2-1.4c.1-.1.2-.3.3-.4.5-.5 1-1.1 1.6-1.6l.3-.3a15.38 15.38 0 011.3-1.2c.4-.3.7-.6 1.1-.9s.7-.6 1-.9l1.2-.9a7.63 7.63 0 011.1-.8 14.63 14.63 0 011.3-.9c.4-.3.8-.5 1.2-.8s.9-.6 1.4-.9 1.1-.7 1.7-1.1a22.11 22.11 0 013.4-1.8c.3-.2.7-.3 1-.5.9-.5 1.8-.9 2.7-1.3.3-.1.6-.3.9-.4l3.6-1.5a1.85 1.85 0 01.7-.2c1.1-.4 2.1-.8 3.2-1.1.5-.1.9-.3 1.4-.4l1.8-.6a7.49 7.49 0 011.6-.4c.6-.2 1.2-.3 1.9-.5.5-.1 1-.3 1.6-.4a12.86 12.86 0 011.9-.4l1.6-.3c.7-.1 1.3-.3 2-.4l1.5-.3c1.4-.2 2.7-.5 4.1-.7a1.27 1.27 0 00.6-.1c1.2-.2 2.4-.3 3.6-.4a7.08 7.08 0 011.4-.1c.8-.1 1.6-.1 2.3-.2.5 0 1-.1 1.5-.1a20.08 20.08 0 012.4-.1 6.15 6.15 0 001.4-.1h7.2c.7 0 1.4.1 2.1.1a7.57 7.57 0 011.5.1 15 15 0 012.2.2c.4 0 .9.1 1.3.1l2.6.3c.3 0 .6.1.9.1 1.2.1 2.3.3 3.5.5.2 0 .4.1.6.1a25 25 0 012.9.5 5.07 5.07 0 001.3.2c.8.1 1.5.3 2.2.4l1.2.3c.8.2 1.7.4 2.4.6l1.4.3c.8.2 1.5.4 2.2.6a6.47 6.47 0 011.3.4 33.82 33.82 0 013.4 1.1c.2.1.4.1.6.2 1.3.5 2.6.9 3.9 1.4.5.2 1.1.4 1.6.6s.8.3 1.2.5c.6.3 1.2.5 1.7.8a11.73 11.73 0 011.1.5c.6.3 1.3.6 1.9.9.3.2.6.3.9.5.9.5 1.8 1 2.6 1.5 14.5 8.2 21.7 19.1 21.6 30l.1-39.6c0-10.9-7.2-21.7-21.6-30-.9-.5-1.8-1-2.6-1.5-.3-.2-.6-.3-.9-.5-.6-.3-1.2-.6-1.9-.9a11.73 11.73 0 01-1.1-.5c-.6-.3-1.2-.5-1.7-.8s-.8-.3-1.2-.5-.8-.3-1.2-.5c-.1 0-.3-.1-.4-.1-1.3-.5-2.5-1-3.9-1.4-.2-.1-.4-.1-.6-.2-1.2-.4-2.2-.8-3.4-1.1-.2-.1-.4-.1-.6-.2s-.5-.1-.7-.2c-.8-.2-1.5-.4-2.2-.6l-1.4-.3c-.8-.2-1.7-.4-2.4-.6-.3-.1-.6-.1-.9-.2h-.3a20.69 20.69 0 00-2.2-.4 5.07 5.07 0 00-1.3-.2c-1-.2-2-.3-2.9-.5-.2 0-.4-.1-.6-.1-1.2-.2-2.3-.3-3.5-.5-.3 0-.6-.1-.9-.1l-2.6-.3h-.1c-.4 0-.8-.1-1.2-.1-.8-.1-1.5-.1-2.2-.2a7.57 7.57 0 01-1.5-.1c-.7 0-1.4-.1-2.1-.1h-7.6a3.4 3.4 0 00-1 .1c-.8 0-1.7.1-2.4.1-.5 0-1 .1-1.5.1-.8.1-1.6.1-2.3.2a2.77 2.77 0 00-.9.1 1.27 1.27 0 00-.6.1c-1.2.1-2.4.3-3.6.4a1.27 1.27 0 00-.6.1c-1.4.2-2.7.4-4.1.7a.6.6 0 00-.4.1c-.4.1-.7.1-1.1.2-.7.1-1.3.3-2 .4l-1.6.3c-.6.1-1.3.3-1.9.4s-1.1.3-1.6.4-1.2.3-1.9.5c-.5.1-1 .3-1.6.4l-1.8.6a2.35 2.35 0 01-.8.2c-.2.1-.4.1-.6.2-1.1.4-2.1.7-3.2 1.1a1.85 1.85 0 01-.7.2c-1.3.5-2.4 1-3.6 1.5-.3.1-.6.3-.9.4-.9.4-1.9.9-2.7 1.3-.3.2-.7.3-1 .5-1.2.6-2.2 1.2-3.4 1.8a4.05 4.05 0 01-.9.5c-.3.2-.5.3-.8.5-.5.3-.9.6-1.4.9s-.8.5-1.2.8-.9.6-1.3.9a7.63 7.63 0 01-1.1.8l-1.2.9a9 9 0 00-1 .9c-.4.3-.7.6-1.1.9l-.4.4a6 6 0 00-.8.8l-.3.3-1.6 1.6c-.1.1-.2.3-.3.4a17.41 17.41 0 01-1.2 1.4l-.3.3-.1.1a2.18 2.18 0 01-.4.5c-.4.5-.7 1-1.1 1.5a3.51 3.51 0 00-.5.8 9.13 9.13 0 00-.8 1.3.52.52 0 00-.2.4 2.19 2.19 0 01-.3.5c-.2.4-.4.7-.6 1.1a3.55 3.55 0 00-.4.9 11.73 11.73 0 01-.5 1.1c-.1.2-.2.3-.2.5s-.1.3-.2.5a4.87 4.87 0 01-.4 1.1c-.1.3-.2.7-.3 1s-.2.7-.3 1.1c0 .2-.1.4-.1.6a.6.6 0 01-.1.4c-.1.4-.1.7-.2 1.1s-.1.7-.1 1-.1.8-.1 1.1v1.4l-.1 39.5a5.7 5.7 0 01.1-1.3z",
    fill: "url(#header_svg__linear-gradient-10)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M407 370.3v.9a2.2 2.2 0 01-.1.8c0 .3-.1.6-.1.9s-.1.5-.1.8-.1.6-.1.9-.1.5-.1.8-.1.6-.2 1-.1.5-.1.8-.1.6-.2.9-.1.5-.2.8-.2.6-.3 1-.1.5-.2.8-.2.6-.3 1a1.85 1.85 0 00-.2.7 4.18 4.18 0 01-.4 1 1.85 1.85 0 00-.2.7l-.6 1.5c0 .1-.1.2-.1.3a8 8 0 01-.8 1.6c-.1.2-.2.3-.2.5l-.6 1.2a5.74 5.74 0 01-.4.7c-.2.3-.4.7-.6 1a2.09 2.09 0 01-.4.6c-.2.4-.5.8-.7 1.2-.1.2-.3.5-.4.7-.2.4-.5.7-.7 1.1-.2.2-.3.5-.5.7-.2.4-.5.7-.7 1.1-.2.2-.3.5-.5.7-.3.4-.5.7-.8 1.1-.2.2-.3.4-.5.6a13.72 13.72 0 01-1.6 1.8l-.3.3c-.5.5-.9 1.1-1.4 1.6a2.65 2.65 0 00-.5.6 18.48 18.48 0 01-1.4 1.4l-.5.5a15.37 15.37 0 01-1.9 1.7 4.62 4.62 0 00-.7.7 6.47 6.47 0 01-.9.8c-.3.2-.5.5-.8.7a8.74 8.74 0 01-1 .8 5.72 5.72 0 00-.8.7c-.3.3-.7.5-1 .8s-.6.5-.9.7-.7.5-1 .8a5.5 5.5 0 00-.9.7c-.3.3-.7.5-1 .8s-.6.4-1 .7-.7.5-1.1.7a6.07 6.07 0 00-1 .7c-.4.2-.7.5-1.1.7s-.7.4-1 .6-.8.5-1.2.7c-.6.4-1.2.7-1.9 1.1-1.3.8-2.6 1.5-4 2.2-.4.2-.7.4-1.1.6-1.2.6-2.4 1.3-3.7 1.8-.2.1-.3.2-.5.2-1.4.7-2.8 1.3-4.3 1.9a11.73 11.73 0 00-1.1.5c-1.3.5-2.4 1-3.7 1.5a6.89 6.89 0 00-.8.3c-1.5.6-2.9 1.1-4.5 1.6-.4.1-.7.3-1.1.4-1 .4-2.1.7-3.1 1s-2 .6-2.9.9-1.7.5-2.5.7c-1 .3-2.1.6-3 .8a18.24 18.24 0 00-2.5.7c-1 .3-2.1.5-3.1.7s-1.7.4-2.5.6c-1.1.2-2.1.4-3.1.6s-1.9.4-2.8.5a5.85 5.85 0 01-1.3.2c-1.5.2-2.9.5-4.4.7-.3 0-.5.1-.8.1-1.7.2-3.3.5-5 .7-.4 0-.9.1-1.3.1l-3.1.3-3.9.3c-.8.1-1.7.1-2.4.2-1.4.1-2.7.2-4.1.2-.8 0-1.6.1-2.2.1-1.2 0-2.3.1-3.5.1h-8.4c-1.2 0-2.3-.1-3.4-.1-.8 0-1.7-.1-2.4-.1l-3.7-.3c-.7-.1-1.5-.1-2.1-.2-1.6-.1-3-.3-4.5-.5-.4 0-.9-.1-1.3-.1-2-.2-3.9-.5-5.8-.8-.3 0-.6-.1-.9-.1-1.7-.2-3.3-.5-5-.8-.7-.1-1.4-.3-2.1-.4-1.3-.2-2.5-.5-3.7-.7-.7-.1-1.3-.3-2-.4l-4.1-.9c-.8-.2-1.5-.4-2.2-.6-1.3-.3-2.4-.6-3.7-1-1.1-.3-2.1-.6-3.1-.9a5.64 5.64 0 01-1.2-.4c-1.6-.5-3.1-1-4.6-1.5l-.9-.3c-1.3-.4-2.5-.9-3.8-1.4-.4-.2-.9-.3-1.3-.5-1-.4-2-.8-2.9-1.2l-2.1-.9c-1-.4-1.9-.9-2.8-1.3-.6-.3-1.3-.6-1.9-.9-1-.5-2.1-1-3-1.5-.5-.3-1-.5-1.5-.8-1.5-.8-2.9-1.6-4.4-2.4-23.6-13.8-35.6-31.7-35.6-49.7l-.1 39.5c-.1 17.9 11.9 35.9 35.8 49.6 1.5.8 2.9 1.6 4.4 2.4.5.3 1 .5 1.5.8l3 1.5c.6.3 1.3.6 1.9.9 1 .4 1.9.9 2.8 1.3l2.1.9a16.67 16.67 0 002 .8c.3.1.7.3 1 .4s.9.3 1.3.5c1.3.5 2.5.9 3.8 1.4l.9.3c1.6.5 3 1 4.6 1.5a5.64 5.64 0 011.2.4c.7.2 1.4.4 2 .6.4.1.8.2 1.1.3 1.2.3 2.4.7 3.7 1 .8.2 1.5.4 2.2.6l4.1.9a12.44 12.44 0 011.6.4c.1 0 .3.1.4.1 1.3.3 2.5.5 3.7.7.7.1 1.4.3 2.1.4 1.7.3 3.3.6 5 .8.3 0 .6.1.9.1 2 .3 3.8.5 5.8.8.4 0 .9.1 1.3.1 1.5.2 3 .3 4.6.5h.1a14.08 14.08 0 002 .1l3.7.3c.8 0 1.7.1 2.4.1 1.2.1 2.3.1 3.4.1h8.5c1.2 0 2.3 0 3.5-.1h.7c.6 0 1.1-.1 1.7-.1 1.4-.1 2.7-.1 4.1-.2.8-.1 1.7-.1 2.4-.2l3.9-.3c.5 0 .9-.1 1.4-.1s1.2-.1 1.8-.2c.4 0 .9-.1 1.3-.1 1.7-.2 3.3-.4 5-.7.3 0 .5-.1.8-.1 1.5-.2 2.9-.4 4.4-.7.4-.1.9-.1 1.3-.2s.7-.1 1.1-.2a11.63 11.63 0 001.8-.4c1.1-.2 2.1-.4 3.1-.6s1.8-.4 2.5-.6c1.1-.2 2.1-.5 3.1-.7a18.24 18.24 0 002.5-.7c1-.3 2.1-.5 3-.8s1.7-.5 2.5-.7c1-.3 2-.6 2.9-.9.4-.1.9-.3 1.3-.4l1.8-.6a3.58 3.58 0 001.1-.4c1.5-.5 3-1.1 4.5-1.6a6.89 6.89 0 00.8-.3c1.3-.5 2.4-1 3.7-1.5a11.73 11.73 0 001.1-.5c1.5-.6 2.8-1.3 4.3-1.9.2-.1.3-.2.5-.2 1.3-.6 2.4-1.2 3.7-1.8.4-.2.7-.4 1.1-.6 1.4-.7 2.7-1.5 4-2.2l1.5-.9c.1-.1.2-.1.3-.2.4-.2.8-.5 1.2-.7s.7-.4 1-.6a10.54 10.54 0 001.1-.7c.3-.2.7-.4 1-.6a7.63 7.63 0 001.1-.8 5.5 5.5 0 00.9-.7l1.1-.8a5.5 5.5 0 00.9-.7c.3-.3.7-.5 1-.8a5.5 5.5 0 00.9-.7c.3-.3.7-.5 1-.8a5.72 5.72 0 00.8-.7 8.74 8.74 0 011-.8c.3-.2.5-.5.8-.7a6.47 6.47 0 01.9-.8 4.35 4.35 0 01.7-.6l.1-.1c.6-.6 1.3-1.2 1.9-1.7l.5-.5 1.4-1.4a2.65 2.65 0 00.5-.6c.5-.5.9-1 1.4-1.6l.3-.3c.5-.6 1.1-1.3 1.6-1.8 0-.1.1-.1.1-.2a1.76 1.76 0 01.4-.5 7.63 7.63 0 00.8-1.1c.2-.2.3-.5.5-.7a6.73 6.73 0 00.7-1.1c.2-.2.3-.5.5-.7.2-.4.5-.7.7-1.1.1-.2.3-.5.4-.7.2-.4.5-.8.7-1.2.1-.2.2-.3.3-.5a.1.1 0 01.1-.1c.2-.3.4-.7.6-1a5.74 5.74 0 01.4-.7l.6-1.2c.1-.2.2-.3.3-.5.3-.6.5-1.1.8-1.6 0-.1.1-.2.1-.3l.6-1.5v-.1c.1-.2.1-.4.2-.6a4.18 4.18 0 01.4-1 1.85 1.85 0 00.2-.7c.1-.3.2-.6.3-1s.1-.5.2-.8.2-.6.3-1 .1-.5.2-.8.1-.6.2-.9v-.2c0-.2.1-.4.1-.6s.1-.6.2-1 .1-.5.1-.8.1-.6.1-.9.1-.5.1-.8.1-.6.1-.9a2.2 2.2 0 01.1-.8v-2.3l.1-39.6c-1 .9-1 1.3-1 1.8z",
    fill: "url(#header_svg__linear-gradient-11)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M370.9 320c23.6 13.5 35.3 31.1 35.4 48.6s-11.4 35.1-34.8 48.7-54.3 20.3-85.2 20.3-61.8-6.8-85.4-20.3-35.3-31.1-35.4-48.6 11.4-35.1 34.8-48.7 54.3-20.3 85.2-20.3 61.8 6.8 85.4 20.3zM234 399c14.5 8.3 33.4 12.5 52.3 12.5s37.7-4.1 52.1-12.5 21.7-19.3 21.7-30.5-7.5-22.1-21.9-30.4-33.4-12.5-52.3-12.5-37.7 4.1-52.1 12.5-21.8 19.3-21.7 30.5c-.1 11.2 7.4 22.1 21.9 30.4z",
    fill: "url(#header_svg__linear-gradient-12)",
    stroke: "url(#header_svg__linear-gradient-13)",
    strokeWidth: 1.49
  })))), /*#__PURE__*/React.createElement("g", {
    id: "header_svg__light"
  }, /*#__PURE__*/React.createElement("g", {
    id: "header_svg__light2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M155.8 122.9l10.4 52.9 43.9 189 2.7 14.2c3.4 7 9.8 13.5 19.2 18.9 29.3 16.9 76.6 16.9 105.6 0 12.1-7.1 19.2-16 21.1-25.2h.8L398 175.8l11.2-52.9z",
    fill: "url(#header_svg__linear-gradient-14)",
    id: "header_svg__light2-2",
    "data-name": "light2"
  }))), /*#__PURE__*/React.createElement("g", {
    id: "header_svg__spiral"
  }, /*#__PURE__*/React.createElement("g", {
    id: "header_svg__spiral-2",
    "data-name": "spiral"
  }, /*#__PURE__*/React.createElement("g", {
    id: "header_svg__spira"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: 284.4,
    cy: 246.1,
    rx: 78.2,
    ry: 45.1,
    stroke: "url(#header_svg__linear-gradient-15)",
    strokeWidth: 1.49,
    fill: "none"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 285.8,
    cy: 368.3,
    rx: 36.7,
    ry: 21.2,
    stroke: "url(#header_svg__linear-gradient-16)",
    strokeWidth: 1.49,
    fill: "none"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 285.8,
    cy: 310.1,
    rx: 56.6,
    ry: 32.7,
    stroke: "url(#header_svg__linear-gradient-17)",
    strokeWidth: 1.49,
    fill: "none"
  })))), /*#__PURE__*/React.createElement("g", {
    id: "header_svg__chart"
  }, /*#__PURE__*/React.createElement("g", {
    id: "header_svg__chart-2",
    "data-name": "chart"
  }, /*#__PURE__*/React.createElement("g", {
    id: "header_svg__chart-3",
    "data-name": "chart"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M352.4 192.2v19.6l-66.5-38.3v-19.8z",
    fill: "#326be8"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-23",
    d: "M379.5 155.6a3.4 3.4 0 01-.2 1.4 2.54 2.54 0 01-.2 1.2c0 .4-.2 1-.2 1.4s-.2.8-.2 1.2c-.2.4-.2 1-.4 1.4s-.2.8-.4 1.2-.2 1-.4 1.4-.2.8-.4 1.2-.4 1-.6 1.4l-.6 1.2a5 5 0 01-.8 1.4l-.6 1.2c-.4.6-.6 1.2-1 1.8-.2.4-.4.6-.6 1-.4.6-1 1.4-1.4 2-.2.2-.2.4-.4.6a34.82 34.82 0 01-2.4 2.8c-.2.2-.4.6-.8.8a18.86 18.86 0 01-2 2l-1 1a8.7 8.7 0 01-1.4 1.2 3.59 3.59 0 01-1.4 1c-.4.4-1 .8-1.4 1.2a6.08 6.08 0 01-1.4 1 7 7 0 01-1.6 1 11.16 11.16 0 01-1.6 1 18.45 18.45 0 01-1.6 1 13.45 13.45 0 00-2.2 1.4v19.6l1.2-.6c.4-.2.6-.4 1-.6a11.16 11.16 0 001.6-1c.6-.4 1-.6 1.6-1a7 7 0 011.6-1 6.08 6.08 0 011.4-1c.4-.4 1-.8 1.4-1.2a3.59 3.59 0 011.4-1 8.7 8.7 0 011.4-1.2c.2-.2.4-.2.6-.4l.4-.4a18.86 18.86 0 002-2l.8-.8c.8-1 1.6-1.8 2.4-2.8.2-.2.2-.4.4-.6a12.14 12.14 0 001.4-2c.2-.4.4-.6.6-1a8.11 8.11 0 001-1.8c0-.2.2-.2.2-.4.2-.2.2-.4.4-.8s.6-1 .8-1.4l.6-1.2c.2-.4.4-1 .6-1.4 0-.2.2-.4.2-.6s.2-.4.2-.6a3.71 3.71 0 00.4-1.4c.2-.4.2-.8.4-1.2s.2-1 .4-1.4c0-.2.2-.4.2-.8v-.6c0-.4.2-1 .2-1.4s.2-.8.2-1.2a3.4 3.4 0 01.2-1.4v-19.8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M192.5 153.4V173c0 14 9.2 28.2 27.5 38.7v-19.6c-18.6-10.5-27.7-24.7-27.5-38.7z",
    fill: "#00c5c5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M220 192.2v19.6c-18.3-10.6-27.5-24.8-27.5-38.7v-19.6c-.2 13.9 8.9 28.1 27.5 38.7z",
    fill: "#a99ada"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M352 115.1c36.4 21.2 36.6 55.9.4 77.1l-66.5-38.5-65.9 38.5c-36.6-21.2-36.8-55.9-.6-77.1 36.2-21 96.2-21 132.6 0z",
    fill: "url(#header_svg__linear-gradient-18)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M285.9 153.6v19.8l-66.1 38.3.2-19.6z",
    fill: "#86a2fb"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M347.9 200.6c-14.1 8.4-32.5 13-51 13.8l-7.4-47.5z",
    fill: "url(#header_svg__linear-gradient-19)"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-23",
    d: "M335.7 226a7.1 7.1 0 001.8-.8c1.2-.6 2.6-1 3.8-1.6a6 6 0 001.6-.8c1.8-.8 3.4-1.8 5-2.6v-19.6c-1.6 1-3.4 1.8-5 2.6-.6.2-1 .6-1.6.8a30.77 30.77 0 01-3.8 1.6c-.6.2-1.2.6-1.8.8-1.4.6-2.8 1-4.2 1.6-.4.2-1 .4-1.4.6-.8.2-1.4.4-2.2.6-1.6.4-3.2 1-5 1.4-.8.2-1.8.4-2.6.6-1.6.4-3 .6-4.6 1-1.2.2-2.6.4-3.8.6-.6 0-1.2.2-1.8.2-2 .4-4.2.6-6.2.8l-7 .6V234c2.4-.2 4.6-.2 7-.6 2-.2 4.2-.4 6.2-.8.6 0 1.2-.2 1.8-.2.8-.2 1.6-.2 2.4-.4.4 0 .8-.2 1.4-.2a37.83 37.83 0 004.6-1c1-.2 1.8-.4 2.8-.6 1.6-.4 3.4-1 5-1.4a5.84 5.84 0 011.8-.4.7.7 0 00.4-.2c.4-.2 1-.4 1.4-.6a33.35 33.35 0 004-1.6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M296.9 214.4V234l-7.4-47.5v-19.8z",
    fill: "#8da0f4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M283.1 184.2l7.4 47.3c-23.3 1-47-3.6-64.9-13.8z",
    fill: "url(#header_svg__linear-gradient-20)"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-23",
    d: "M287.9 231.7h-8.4c-2.4 0-4.8-.2-7.2-.4h-.8c-2.4-.2-5-.4-7.4-.8h-.4c-2.6-.4-5.2-.8-7.8-1.4a32 32 0 01-4.2-1 12.75 12.75 0 00-1.4-.4 11.46 11.46 0 01-2.8-.8c-.4 0-.6-.2-1-.2l-3.6-1.2a9.75 9.75 0 01-1.4-.6c-1-.4-2-.8-3.2-1.2a9.75 9.75 0 00-1.4-.6l-5.4-2.4c-.4-.2-.6-.4-1-.4a43 43 0 01-5.2-2.8v19.6c1.6 1 3.4 1.8 5.2 2.8.4.2.6.4 1 .4l5.4 2.4c.2 0 .2.2.4.2.2.2.6.2 1 .4 1 .4 2 .8 3.2 1.2.4.2 1 .4 1.4.6l3.6 1.2c.2 0 .6.2.8.2h.2c1 .2 2 .6 2.8.8a12.75 12.75 0 001.4.4c1.4.4 2.8.6 4.2 1 2.6.6 5.2 1 7.8 1.4h.2c2.4.4 4.8.6 7.4.8h.8c2.4.2 4.8.4 7.2.4h10.8v-19.6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M352 115.1c36.4 21.2 36.6 55.9.4 77.1l-66.5-38.5-65.9 38.5c-36.6-21.2-36.8-55.9-.6-77.1 36.2-21 96.2-21 132.6 0z",
    fill: "url(#header_svg__radial-gradient)",
    fillOpacity: 0.8
  }), /*#__PURE__*/React.createElement("path", {
    d: "M352 115.1c36.4 21.2 36.6 55.9.4 77.1l-66.5-38.5-65.9 38.5c-36.6-21.2-36.8-55.9-.6-77.1 36.2-21 96.2-21 132.6 0z",
    stroke: "url(#header_svg__linear-gradient-21)",
    strokeWidth: 0.75,
    strokeMiterlimit: 10,
    fill: "none"
  })))), /*#__PURE__*/React.createElement("g", {
    id: "header_svg__left-chart",
    "data-spirit-id": "left-chart"
  }, /*#__PURE__*/React.createElement("g", {
    id: "header_svg__element1"
  }, /*#__PURE__*/React.createElement("g", {
    id: "header_svg__element1-2",
    "data-name": "element1"
  }, /*#__PURE__*/React.createElement("g", {
    id: "header_svg__element1-3",
    "data-name": "element1"
  }, /*#__PURE__*/React.createElement("g", {
    className: "header_svg__cls-4"
  }, /*#__PURE__*/React.createElement("path", {
    "data-spirit-id": "left-chart",
    d: "M139.4 265.3L109 247.8c-2-1.1-3.6-.2-3.6 2.1v63.3a7.78 7.78 0 003.6 6.2l30.4 17.5c2 1.1 3.6.2 3.6-2.1v-63.3a7.94 7.94 0 00-3.6-6.2z",
    fill: "url(#header_svg__linear-gradient-22)",
    fillOpacity: 0.8
  }), /*#__PURE__*/React.createElement("path", {
    "data-spirit-id": "left-chart",
    d: "M139.4 265.3L109 247.8c-2-1.1-3.6-.2-3.6 2.1v63.3a7.78 7.78 0 003.6 6.2l30.4 17.5c2 1.1 3.6.2 3.6-2.1v-63.3a7.94 7.94 0 00-3.6-6.2z",
    stroke: "url(#header_svg__linear-gradient-23)",
    strokeWidth: 0.67,
    fill: "none"
  })), /*#__PURE__*/React.createElement("path", {
    "data-spirit-id": "left-chart",
    d: "M122.6 268.4l-39-22.5c-2.1-1.2-3.9-.2-3.9 2.2V287a8.32 8.32 0 003.9 6.7l39 22.5c2.1 1.2 3.9.2 3.9-2.2v-38.9a8.62 8.62 0 00-3.9-6.7z",
    fill: "url(#header_svg__linear-gradient-24)"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-36",
    d: "M122.6 268.1l-39.1-22.6c-2.3-1.3-4.2-.2-4.2 2.4v38.6a9.11 9.11 0 004.2 7.2l39.1 22.6c2.3 1.3 4.2.2 4.2-2.4v-38.6a9.26 9.26 0 00-4.2-7.2zm3.9 45.6c0 2.5-1.7 3.5-3.9 2.2l-39.1-22.6a8.58 8.58 0 01-3.9-6.7V256l46.8 27v30.7zm0-30.9l-46.8-27v-7.7c0-2.5 1.7-3.5 3.9-2.2l39.1 22.6a8.58 8.58 0 013.9 6.7l-.1 7.6z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-36",
    d: "M85.1 275.8l5.6 3.2c.9.5 1.6.1 1.6-.9v-5.3a3.38 3.38 0 00-1.6-2.7l-5.6-3.2c-.9-.5-1.6-.1-1.6.9v5.3a3.85 3.85 0 001.6 2.7zm-1.3-7.9c0-.8.6-1.1 1.3-.7l5.6 3.2a2.85 2.85 0 011.3 2.2v5.3c0 .8-.6 1.1-1.3.7l-5.6-3.2a2.85 2.85 0 01-1.3-2.2v-5.3zM87.9 252.3c-.9-.5-1.6-.1-1.6.9a3.38 3.38 0 001.6 2.7c.9.5 1.6.1 1.6-.9a3.54 3.54 0 00-1.6-2.7zm0 3.3a2.85 2.85 0 01-1.3-2.2c0-.8.6-1.1 1.3-.7a2.85 2.85 0 011.3 2.2c0 .8-.5 1.2-1.3.7zM118.8 270.2c-.9-.5-1.6-.1-1.6.9a3.38 3.38 0 001.6 2.7c.9.5 1.6.1 1.6-.9a4 4 0 00-1.6-2.7zm0 3.2a2.85 2.85 0 01-1.3-2.2c0-.8.6-1.1 1.3-.7a2.85 2.85 0 011.3 2.2c0 .8-.6 1.2-1.3.7zM95.4 281.7l5.6 3.2c.9.5 1.6.1 1.6-.9v-5.3a3.38 3.38 0 00-1.6-2.7l-5.6-3.2c-.9-.5-1.6-.1-1.6.9v5.3a3.54 3.54 0 001.6 2.7zm-1.3-7.9c0-.8.6-1.1 1.3-.7l5.6 3.2a2.85 2.85 0 011.3 2.2v5.3c0 .8-.6 1.1-1.3.7l-5.6-3.2a2.85 2.85 0 01-1.3-2.2v-5.3zM105.6 287.6l5.6 3.2c.9.5 1.6.1 1.6-.9v-5.3a3.38 3.38 0 00-1.6-2.7l-5.6-3.2c-.9-.5-1.6-.1-1.6.9v5.3a3.54 3.54 0 001.6 2.7zm-1.3-7.9c0-.8.6-1.1 1.3-.7l5.6 3.2a2.85 2.85 0 011.3 2.2v5.3c0 .8-.6 1.1-1.3.7l-5.6-3.2a2.85 2.85 0 01-1.3-2.2zM115.9 293.5l5.6 3.2c.9.5 1.6.1 1.6-.9v-5.3a3.38 3.38 0 00-1.6-2.7l-5.6-3.2c-.9-.5-1.6-.1-1.6.9v5.3a3.54 3.54 0 001.6 2.7zm-1.3-7.9c0-.8.6-1.1 1.3-.7l5.6 3.2a2.85 2.85 0 011.3 2.2v5.3c0 .8-.6 1.1-1.3.7l-5.6-3.2a2.85 2.85 0 01-1.3-2.2zM85.1 286.5l5.6 3.2c.9.5 1.6.1 1.6-.9v-5.3a3.38 3.38 0 00-1.6-2.7l-5.6-3.2c-.9-.5-1.6-.1-1.6.9v5.3a3.85 3.85 0 001.6 2.7zm-1.3-7.9c0-.8.6-1.1 1.3-.7l5.6 3.2a2.85 2.85 0 011.3 2.2v5.3c0 .8-.6 1.1-1.3.7l-5.6-3.2a2.85 2.85 0 01-1.3-2.2v-5.3zM95.4 292.4l5.6 3.2c.9.5 1.6.1 1.6-.9v-5.3a3.38 3.38 0 00-1.6-2.7l-5.6-3.2c-.9-.5-1.6-.1-1.6.9v5.3a3.54 3.54 0 001.6 2.7zm-1.3-7.9c0-.8.6-1.1 1.3-.7l5.6 3.2a2.85 2.85 0 011.3 2.2v5.3c0 .8-.6 1.1-1.3.7l-5.6-3.2a2.85 2.85 0 01-1.3-2.2v-5.3zM105.6 298.3l5.6 3.2c.9.5 1.6.1 1.6-.9v-5.3a3.38 3.38 0 00-1.6-2.7l-5.6-3.2c-.9-.5-1.6-.1-1.6.9v5.3a3.38 3.38 0 001.6 2.7zm-1.3-7.8c0-.8.6-1.1 1.3-.7l5.6 3.2a2.85 2.85 0 011.3 2.2v5.3c0 .8-.6 1.1-1.3.7l-5.6-3.2a2.85 2.85 0 01-1.3-2.2zM115.9 304.2l5.6 3.2c.9.5 1.6.1 1.6-.9v-5.3a3.38 3.38 0 00-1.6-2.7l-5.6-3.2c-.9-.5-1.6-.1-1.6.9v5.3a3.38 3.38 0 001.6 2.7zm-1.3-7.8c0-.8.6-1.1 1.3-.7l5.6 3.2a2.85 2.85 0 011.3 2.2v5.3c0 .8-.6 1.1-1.3.7l-5.6-3.2a2.85 2.85 0 01-1.3-2.2z"
  })))), /*#__PURE__*/React.createElement("g", {
    id: "header_svg__element2"
  }, /*#__PURE__*/React.createElement("g", {
    id: "header_svg__element2-2",
    "data-name": "element2"
  }, /*#__PURE__*/React.createElement("g", {
    id: "header_svg__element2-3",
    "data-name": "element2"
  }, /*#__PURE__*/React.createElement("g", {
    className: "header_svg__cls-37"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M198.7 349.9l29.6 17.1-6.5-23.9-5.9 14.9-8.3-30.5zm-9.3-46.3l9.1 46.2-26.3-15.2 6.2-9.8 3.3 9z",
    fill: "url(#header_svg__linear-gradient-25)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-36",
    d: "M198.7 349.9l-.3-.3-.2.4.5.3zm29.6 17.1v.4l.5.3-.2-.6zm-6.6-23.9h.3l-.3-1.1-.3.8zm-5.9 14.9h-.3l.3 1.1.3-.8zm-8.3-30.5h.3l-.3-1.1-.3.8zm-9 22.3v.4l.4.2-.1-.5zm-9.1-46.2l.3.1-.6-.4zm-17.2 31.1l-.3-.3-.3.4.5.3v-.4zm6.3-9.9h.3l-.3-.8-.3.4zm3.3 9.1h-.3l.4 1.1.2-.8zm16.9 16.4l29.6 17.1v-.7l-29.6-17.1zm29.9 16.8l-6.5-23.9-.6-.1L228 367zm-7.2-24.3l-5.9 14.9.6.6 5.9-14.9zm-5.3 15.2l-8.3-30.5-.6-.1 8.3 30.5zm-8.9-30.8l-8.8 22.5.6.6 8.8-22.5zm-8.4 22.7l-9.1-46.2-.6-.2 9.1 46.2zM172.2 335l26.3 15.2v-.7l-26.3-15.2zm6-10.5l-6.2 9.8.6.7 6.2-9.8zm3.9 9.4l-3.3-9h-.6l3.3 9zm7-30.6l-7.7 30.3.6.5 7.7-30.3z"
  })), /*#__PURE__*/React.createElement("g", {
    className: "header_svg__cls-4"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M244.8 323.5L155.7 272c-3-1.8-5.5-.3-5.5 3.2v59.5a12.48 12.48 0 005.5 9.6l89.1 51.5c3 1.8 5.5.3 5.5-3.2V333a11.88 11.88 0 00-5.5-9.5z",
    fill: "url(#header_svg__linear-gradient-26)",
    fillOpacity: 0.8
  }), /*#__PURE__*/React.createElement("path", {
    d: "M244.8 323.5L155.7 272c-3-1.8-5.5-.3-5.5 3.2v59.5a12.48 12.48 0 005.5 9.6l89.1 51.5c3 1.8 5.5.3 5.5-3.2V333a11.88 11.88 0 00-5.5-9.5z",
    stroke: "url(#header_svg__linear-gradient-27)",
    strokeWidth: 0.67,
    fill: "none"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M188.2 352.1l36.2 20.9-8-29.3-7.3 18.2-10.1-37.3zm-11.3-56.7L188 352l-32.1-18.6 7.6-12 4.1 11.1z",
    fill: "url(#header_svg__linear-gradient-28)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-36",
    d: "M188.2 352.1l-.3-.3-.2.4.5.3zm36.2 20.9v.4l.5.3-.2-.6zm-8-29.2h.3l-.3-1.1-.3.8zm-7.3 18.1h-.3l.3 1.1.3-.8zM199 324.6h.3l-.3-1.1-.3.8zM188 352v.4l.4.2-.1-.5zm-11.1-56.6l.3.1-.6-.4zm-21.1 38l-.3-.3-.3.4.5.3v-.4zm7.7-12h.3l-.3-.8-.3.4zm4 11.1h-.3l.4 1.1.2-.8zm20.7 20l36.2 20.9v-.7l-36.2-20.9zm36.5 20.6l-8-29.3-.6-.1 8 29.3zm-8.6-29.6l-7.3 18.2.6.6 7.3-18.2zm-6.7 18.5l-10.1-37.4-.6-.1 10.1 37.4zm-10.7-37.7l-10.8 27.5.6.6 10.8-27.5zm-10.4 27.8l-11.1-56.6-.6-.2 11.1 56.6zm-32.5-18.3l32.1 18.6v-.7L155.8 333zm7.4-12.7l-7.6 12 .6.7 7.6-12zm4.6 11.4l-4.1-11.1h-.6l4.1 11.1zm8.8-37.4l-9.4 37.1.6.5 9.4-37.1z"
  })))), /*#__PURE__*/React.createElement("g", {
    id: "header_svg__element3"
  }, /*#__PURE__*/React.createElement("g", {
    id: "header_svg__element3-2",
    "data-name": "element3"
  }, /*#__PURE__*/React.createElement("g", {
    id: "header_svg__element3-3",
    "data-name": "element3"
  }, /*#__PURE__*/React.createElement("g", {
    className: "header_svg__cls-4"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M242.7 406.9l-129.4-74.7c-4.3-2.5-7.8-.5-7.8 4.5v100.4c0 5 3.5 11.1 7.8 13.6l129.4 74.7c4.3 2.5 7.8.5 7.8-4.5V420.5c0-5-3.5-11.1-7.8-13.6z",
    fill: "url(#header_svg__linear-gradient-29)",
    fillOpacity: 0.8
  }), /*#__PURE__*/React.createElement("path", {
    d: "M242.7 406.9l-129.4-74.7c-4.3-2.5-7.8-.5-7.8 4.5v100.4c0 5 3.5 11.1 7.8 13.6l129.4 74.7c4.3 2.5 7.8.5 7.8-4.5V420.5c0-5-3.5-11.1-7.8-13.6z",
    stroke: "url(#header_svg__linear-gradient-30)",
    strokeWidth: 0.67,
    fill: "none"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M115.6 346.6l33.6 19.4a9.29 9.29 0 014.2 7.3V412c0 2.7-1.9 3.8-4.2 2.4L115.6 395a9.29 9.29 0 01-4.2-7.3V349c0-2.7 1.9-3.8 4.2-2.4z",
    stroke: "url(#header_svg__linear-gradient-31)",
    strokeWidth: 0.67,
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M202.1 446.5l25.9 14.9a9.29 9.29 0 014.2 7.3v29.9c0 2.7-1.9 3.8-4.2 2.4l-25.9-14.9a9.29 9.29 0 01-4.2-7.3v-29.9c0-2.7 1.9-3.8 4.2-2.4z",
    stroke: "url(#header_svg__linear-gradient-32)",
    strokeWidth: 0.67,
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M179 434.5l9 5.2a9.29 9.29 0 014.2 7.3v10.4c0 2.7-1.9 3.8-4.2 2.4l-9-5.2a9.29 9.29 0 01-4.2-7.3V437c0-2.7 1.9-3.8 4.2-2.5z",
    stroke: "url(#header_svg__linear-gradient-33)",
    strokeWidth: 0.67,
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M171.5 375.4l58.1 33.5a9.29 9.29 0 014.2 7.3v36.6c0 2.7-1.9 3.8-4.2 2.4l-58.1-33.5a9.29 9.29 0 01-4.2-7.3v-36.6c0-2.6 1.9-3.7 4.2-2.4z",
    stroke: "url(#header_svg__linear-gradient-34)",
    strokeWidth: 0.67,
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M114.8 402l35.2 20.3a7.45 7.45 0 013.4 5.9h0c0 2.2-1.5 3.1-3.4 2l-35.2-20.3a7.45 7.45 0 01-3.4-5.9h0c0-2.2 1.5-3.1 3.4-2z",
    stroke: "url(#header_svg__linear-gradient-35)",
    strokeWidth: 0.67,
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M114.8 417.7L150 438a7.45 7.45 0 013.4 5.9h0c0 2.2-1.5 3.1-3.4 2l-35.2-20.3a7.45 7.45 0 01-3.4-5.9h0c0-2.2 1.5-3.1 3.4-2z",
    stroke: "url(#header_svg__linear-gradient-36)",
    strokeWidth: 0.67,
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M114.8 431.1L132 441a7.45 7.45 0 013.4 5.9h0c0 2.2-1.5 3.1-3.4 2l-17.2-9.9a7.45 7.45 0 01-3.4-5.9h0c0-2.2 1.5-3.1 3.4-2z",
    stroke: "url(#header_svg__linear-gradient-37)",
    strokeWidth: 0.67,
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M130.5 368.2c0-4.3 3-6 6.7-3.9a14.7 14.7 0 016.7 11.6c0 4.3-3 6-6.7 3.9a14.86 14.86 0 01-6.7-11.6zm8.1 14.1a19.3 19.3 0 016.8 7.3 20.2 20.2 0 012.8 9.6c0 .5-.3.7-.7.4l-20.8-12a1.56 1.56 0 01-.7-1.3c0-3 1-5.2 2.8-6.3s4.3-.9 6.8.6z",
    fill: "url(#header_svg__linear-gradient-38)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M124.6 368.2c0-4.3 3-6 6.7-3.9a14.7 14.7 0 016.7 11.6c0 4.3-3 6-6.7 3.9a14.59 14.59 0 01-6.7-11.6zm8.1 14.1a19.3 19.3 0 016.8 7.3 20.2 20.2 0 012.8 9.6c0 .5-.3.7-.7.4l-20.8-12a1.56 1.56 0 01-.7-1.3c0-3 1-5.2 2.8-6.3s4.3-.9 6.8.6z",
    fill: "url(#header_svg__linear-gradient-39)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-36",
    d: "M131.2 364.3l.2-.3zm-6.6 3.9zm6.6 11.6l-.2.3zm8.3 9.8l-.3.2zm-6.8-7.3l-.2.3zm8.9 17.3l-.2.3zm-20.8-12l-.2.3zm-.7-1.3zm2.8-6.3l.2.3zm6.8.6l.2-.3zm1.7-16.6c-1.9-1.1-3.7-1.3-5.1-.5s-2.1 2.4-2.1 4.6h.7c0-2 .7-3.4 1.8-4a4.1 4.1 0 014.3.5zm6.9 11.9a14.74 14.74 0 00-2-6.8 13.37 13.37 0 00-4.9-5.1l-.4.6a14.14 14.14 0 016.5 11.2h.8zm-7.3 4.2c1.9 1.1 3.7 1.3 5.1.5s2.1-2.4 2.1-4.6h-.7c0 2-.7 3.4-1.8 4a4.1 4.1 0 01-4.3-.5zm-6.8-11.9a14.74 14.74 0 002 6.8 13.37 13.37 0 004.9 5.1l.4-.6a14.14 14.14 0 01-6.5-11.2h-.8zm15.7 21.2a20 20 0 00-7-7.4l-.4.6a19.21 19.21 0 016.7 7.1zm2.8 9.8a19.36 19.36 0 00-2.9-9.7l-.6.4a19.48 19.48 0 012.8 9.4h.7zm-1.3.7a1 1 0 00.9.1.91.91 0 00.4-.8h-.7c0 .2-.1.2 0 .2l-.2-.1zm-20.7-12l20.8 12 .4-.6-20.8-12zm-1-1.6a1.61 1.61 0 00.3.9 2.34 2.34 0 00.7.7l.4-.6c-.1-.1-.3-.2-.4-.4a1.69 1.69 0 01-.2-.5h-.8zm3-6.6c-2 1.2-3 3.6-3 6.6h.7c0-2.9 1-5 2.6-6zm7.2.6c-2.6-1.5-5.2-1.8-7.2-.6l.4.6c1.7-1 3.9-.8 6.4.6zm3 1.7l-3-1.7-.4.6 3 1.7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M217.9 488.4v-15l13 7.5c0-8.2-5.9-18.4-13-22.5s-13-.7-13 7.5 5.9 18.4 13 22.5zm13.1-6.3c0 3.2-1 5.6-2.7 6.9l-8.7-13.5zm-12.1-6.2V489c3.5 2 6.6 2 8.7.4z",
    fill: "url(#header_svg__linear-gradient-40)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M214.3 488.4v-15l13 7.5c0-8.2-5.9-18.4-13-22.5s-13-.7-13 7.5 5.8 18.4 13 22.5zm13-6.3c0 3.2-1 5.6-2.7 6.9l-8.7-13.5zm-12-6.2V489c3.5 2 6.6 2 8.7.4z",
    fill: "url(#header_svg__linear-gradient-41)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-36",
    d: "M214.3 473.4v-.4l-.3-.2v.4zm0 15v.4l.3.2v-.4zm13-7.5v.4l.3.2v-.4zm-2.7 8.1l-.2.2.2.4.2-.2zm2.7-6.9l.3.2v-.4l-.3-.2zm-11.4-6.6v-.4l-.9-.5.7 1zm-.6 13.5l-.3-.2v.4l.3.2zm0-13.1l.2-.2-.5-.8v.8zm8.7 13.5l.2.4.2-.2-.2-.4zm-10.1-16.2v15l.6.4v-15zm13.4 7.3l-13-7.5v.7l13 7.5zm-13-21.8c7 4 12.7 13.9 12.7 22l.6.4c0-8.5-6-18.9-13.3-23.1zm-12.7 7.4c0-8 5.7-11.3 12.7-7.3v-.8c-7.3-4.2-13.3-.8-13.3 7.7zm12.7 21.9c-7-4-12.7-13.9-12.7-22l-.6-.4c0 8.5 6 18.9 13.3 23.1zm10.6 1.4c1.7-1.3 2.7-3.8 2.7-7.1l-.6-.4c0 3.1-1 5.5-2.6 6.7zm-9.2-13.8l8.7 13.5.4-.3-8.7-13.5zm11.6 6.1l-11.4-6.6v.7l11.4 6.6zm-11.7 7.5v-13.1l-.6-.4v13.1zm8.1-.2c-2 1.6-5.1 1.6-8.5-.4v.7c3.6 2.1 6.8 2.1 9 .4zm-8.6-12.9l8.7 13.5.4-.3-8.7-13.5z"
  }), /*#__PURE__*/React.createElement("g", {
    className: "header_svg__cls-37"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M203.5 427.4l.1-29.9-7.1-4v29.9zm9.7 5.1v-16l-7-4.1-.1 16.1zm-20.4-27.2l-.1 16.1-7-4v-16.1zm30.9 33v-11.4l-7-4v11.3z",
    fill: "url(#header_svg__linear-gradient-42)",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M197.6 427.4l.1-29.9-7.1-4v29.9zm9.6 5.1v-16l-7-4.1-.1 16.1zm-20.4-27.2l-.1 16.1-7-4v-16.1zm30.9 33v-11.4l-7-4v11.3z",
    fill: "url(#header_svg__linear-gradient-43)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-36",
    d: "M197.7 397.6h.4v-.2l-.2-.1zm-.1 29.8l-.2.3.6.3v-.6zm-7.1-33.8l.2-.3-.6-.3v.6zm0 29.8h-.4v.2l.2.1zm16.7-7h.4v-.2l-.2-.1zm0 16.1l-.2.3.6.3v-.6zm-7-20.2l.2-.3-.6-.3v.6zm-.1 16.2h-.4v.2l.2.1zm-13.4-7l-.2.3.6.3v-.6zm.1-16.2h.4v-.2l-.2-.1zm-7.1 12.2h-.4v.2l.2.1zm0-16.2l.2-.3-.6-.3v.6zm38 25.6h.4v-.2l-.2-.1zm0 11.4l-.2.3.6.3v-.7h-.4zm-7-15.4l.2-.3-.6-.3v.6zm0 11.3h-.4v.2l.2.1zm-13.4-36.6l-.1 29.9h.7l.1-29.9zm-7-3.7l7.1 4 .4-.7-7.1-4zm.6 29.5v-29.9h-.7v29.9zm6.8 3.7l-7-4-.4.6 7 4zm9.2-10.7v16h.7v-16zm-6.9-3.8l7 4.1.4-.6-7-4.1zm.5 15.9l.1-16.1h-.7l-.1 16.1zm6.9 3.6l-7.1-4-.4.7 7.1 4zm-20.3-10.6l.1-16.1h-.7l-.1 16.1zm-7.6-3.7l7 4 .4-.6-7-4zm-.2-16.5v16.1h.7v-16.1zm7.7 3.7l-7.1-4-.4.6 7.1 4zm30.3 21.9v11.4h.7v-11.4zm-6.8-3.7l7 4 .4-.6-7-4zm.6 11v-11.3h-.7v11.3zm6.8 3.8l-7-4.1-.4.6 7 4.1z"
  })))))), /*#__PURE__*/React.createElement("g", {
    id: "header_svg__element5"
  }, /*#__PURE__*/React.createElement("g", {
    id: "header_svg__element5-2",
    "data-name": "element5"
  }, /*#__PURE__*/React.createElement("g", {
    id: "header_svg__element5-3",
    "data-name": "element5"
  }, /*#__PURE__*/React.createElement("g", {
    className: "header_svg__cls-4"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M331 406.9l129.4-74.7c4.3-2.5 7.8-.5 7.8 4.5v100.4c0 5-3.5 11.1-7.8 13.6L331 525.5c-4.3 2.5-7.8.5-7.8-4.5V420.5c-.1-5 3.4-11 7.8-13.6z",
    fill: "url(#header_svg__linear-gradient-44)",
    fillOpacity: 0.8
  }), /*#__PURE__*/React.createElement("path", {
    d: "M331 406.9l129.4-74.7c4.3-2.5 7.8-.5 7.8 4.5v100.4c0 5-3.5 11.1-7.8 13.6L331 525.5c-4.3 2.5-7.8.5-7.8-4.5V420.5c-.1-5 3.4-11 7.8-13.6z",
    stroke: "url(#header_svg__linear-gradient-45)",
    strokeWidth: 0.67,
    fill: "none"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M457.6 342.1l-19.9 11.5a9.29 9.29 0 00-4.2 7.3v23c0 2.7 1.9 3.8 4.2 2.4l19.9-11.5a9.29 9.29 0 004.2-7.3v-23c0-2.7-1.9-3.8-4.2-2.4z",
    stroke: "url(#header_svg__linear-gradient-46)",
    strokeWidth: 0.67,
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M391.4 382.3L340 412a9.29 9.29 0 00-4.2 7.3v59.3c0 2.7 1.9 3.8 4.2 2.4l51.3-29.6a9.29 9.29 0 004.2-7.3v-59.3c.1-2.7-1.8-3.8-4.1-2.5z",
    stroke: "url(#header_svg__linear-gradient-47)",
    strokeWidth: 0.67,
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M391.8 458.2l-52.1 30.1a8.48 8.48 0 00-3.8 6.7h0c0 2.5 1.7 3.4 3.8 2.2l52.1-30.1a8.48 8.48 0 003.8-6.7h0c0-2.5-1.7-3.5-3.8-2.2z",
    stroke: "url(#header_svg__linear-gradient-48)",
    strokeWidth: 0.67,
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M392.1 472.9l-52.8 30.5a7.76 7.76 0 00-3.5 6.1h0c0 2.2 1.6 3.1 3.5 2l52.8-30.5a7.76 7.76 0 003.5-6.1h0c0-2.2-1.6-3.1-3.5-2z",
    stroke: "url(#header_svg__linear-gradient-49)",
    strokeWidth: 0.67,
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M445.3 376.4v-12.5l-10.8 6.2c0-6.8 4.9-15.3 10.8-18.7s10.8-.6 10.8 6.2-4.9 15.4-10.8 18.8zm-10.8-5.3c0 2.7.8 4.7 2.2 5.8l7.3-11.2zm9.9-5.1v10.9c-2.9 1.7-5.5 1.7-7.2.3z",
    fill: "url(#header_svg__linear-gradient-50)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M448.3 376.4v-12.5l-10.8 6.2c0-6.8 4.9-15.3 10.8-18.7s10.8-.6 10.8 6.2-4.9 15.4-10.8 18.8zm-10.8-5.3c0 2.7.8 4.7 2.2 5.8l7.2-11.2zm10-5.1v10.9c-2.9 1.7-5.5 1.7-7.2.3z",
    fill: "url(#header_svg__linear-gradient-51)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-36",
    d: "M448.3 363.9v-.4l.3-.2v.4zm0 12.5v.4l-.3.2v-.4zm-10.8-6.3v.4l-.3.2v-.4zm2.2 6.8l.2.2-.2.4-.2-.2zm-2.2-5.8l-.3.2v-.4l.3-.2zm9.5-5.5v-.4l.9-.5-.7 1.1zm.5 11.3l.3-.2v.4l-.3.2zm0-10.9l-.2-.2.5-.8v.8zm-7.3 11.2l-.2.4-.2-.2.2-.4zm8.4-13.5v12.5l-.6.4v-12.5zm-11.1 6.1l10.8-6.2v.7l-10.8 6.2zm10.8-18c-5.7 3.3-10.5 11.5-10.5 18.1l-.6.4c0-7 5-15.7 11.1-19.3zm10.5 6.1c0-6.6-4.7-9.4-10.5-6v-.7c6.1-3.5 11.1-.6 11.1 6.4zM448.3 376c5.7-3.3 10.5-11.5 10.5-18.1l.6-.4c0 7-5 15.7-11.1 19.3zm-8.8 1.2c-1.4-1.1-2.3-3.2-2.3-5.9l.6-.4c0 2.6.8 4.5 2.1 5.6zm7.7-11.4l-7.3 11.2-.4-.3 7.3-11.2zm-9.7 4.9l9.5-5.5v.7l-9.5 5.5zm9.6 6.3v-10.9l.6-.4v10.9zm-6.6-.2c1.7 1.3 4.2 1.3 7-.3v.7c-3 1.7-5.7 1.7-7.5.3zm7.2-10.6l-7.2 11.2-.5-.4 7.2-11.2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M461.7 410.7L428.4 430c-2.3 1.3-4.1.3-4.1-2.4v-21.7a9 9 0 014.1-7.1l33.3-19.3c2.3-1.3 4.1-.3 4.1 2.4v21.6a9 9 0 01-4.1 7.2z",
    fill: "url(#header_svg__linear-gradient-52)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M472.2 413.1l-33.3 19.3c-2.3 1.3-4.1.3-4.1-2.4v-21.7a9 9 0 014.1-7.1l33.3-19.3c2.3-1.3 4.1-.3 4.1 2.4V406a9 9 0 01-4.1 7.1z",
    fill: "url(#header_svg__linear-gradient-53)"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-36",
    d: "M472.2 381.8l-33.3 19.3a9.29 9.29 0 00-4.2 7.3V430c0 2.7 1.9 3.8 4.2 2.4l33.3-19.3a9.29 9.29 0 004.2-7.3v-21.7c.1-2.5-1.8-3.6-4.2-2.3zm-33.3 19.6l33.3-19.3c1.3-.7 2.4-.7 3.1-.1l-18.7 24.6c-.7.9-1.5 1.4-2.2 1.2l-18.7-3a8.76 8.76 0 013.2-3.4zm-4 28.5v-21.6a8.19 8.19 0 01.7-3l16 2.6-15.5 24.7a3.16 3.16 0 01-1.2-2.7zm4 2.3a2.85 2.85 0 01-2.6.4l15.5-24.8 2.5.4a1.8 1.8 0 001.2-.3 4 4 0 001.2-1.1l2.6-3.4 15.5 6.9a7.19 7.19 0 01-2.6 2.6l-33.3 19.3zm37.3-26.1a8.79 8.79 0 01-1.2 4l-15.5-6.8 15.9-21a3.39 3.39 0 01.7 2.2v21.6z"
  }), /*#__PURE__*/React.createElement("g", {
    className: "header_svg__cls-37"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M399.4 408.4v.1h.1c5.2-2.1 9.4.8 9.4 7.1 0 7-5 15.5-11.1 19L357.2 458c-6 3.5-11.1.7-11.1-6.2 0-6.2 4.1-13.8 9.2-17.8l.1-.1v-.4c0-9.3 6.6-20.7 14.6-25.3 5.2-3 9.9-2.6 12.5 1l.1.1.1-.2a21.22 21.22 0 015.7-5.2c5.7-3.1 10.2-1.1 11 4.5z",
    fill: "url(#header_svg__linear-gradient-54)"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-68",
    d: "M399.4 408.4v.1h.1c5.2-2.1 9.4.8 9.4 7.1 0 7-5 15.5-11.1 19L357.2 458c-6 3.5-11.1.7-11.1-6.2 0-6.2 4.1-13.8 9.2-17.8l.1-.1v-.4c0-9.3 6.6-20.7 14.6-25.3 5.2-3 9.9-2.6 12.5 1l.1.1.1-.2a21.22 21.22 0 015.7-5.2c5.7-3.1 10.2-1.1 11 4.5z"
  })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M411.3 408.4v.1h.1c5.2-2.1 9.4.8 9.4 7.1 0 7-5 15.5-11.1 19L369.1 458c-6 3.5-11.1.7-11.1-6.2 0-6.2 4.1-13.8 9.2-17.8l.1-.1v-.4c0-9.3 6.6-20.7 14.6-25.3 5.2-3 9.9-2.6 12.5 1l.1.1.1-.2a21.22 21.22 0 015.7-5.2c5.7-3.1 10.2-1.1 11 4.5z",
    fill: "url(#header_svg__linear-gradient-55)"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-68",
    d: "M411.3 408.4v.1h.1c5.2-2.1 9.4.8 9.4 7.1 0 7-5 15.5-11.1 19L369.1 458c-6 3.5-11.1.7-11.1-6.2 0-6.2 4.1-13.8 9.2-17.8l.1-.1v-.4c0-9.3 6.6-20.7 14.6-25.3 5.2-3 9.9-2.6 12.5 1l.1.1.1-.2a21.22 21.22 0 015.7-5.2c5.7-3.1 10.2-1.1 11 4.5z"
  }))))), /*#__PURE__*/React.createElement("g", {
    id: "header_svg__element4"
  }, /*#__PURE__*/React.createElement("g", {
    id: "header_svg__element4-2",
    "data-name": "element4"
  }, /*#__PURE__*/React.createElement("g", {
    id: "header_svg__element4-3",
    "data-name": "element4"
  }, /*#__PURE__*/React.createElement("g", {
    className: "header_svg__cls-4"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M328.6 321.9l133.8-77.2c3-1.8 5.5-.3 5.5 3.2v60.5a12.48 12.48 0 01-5.5 9.6l-133.8 77.2c-3 1.8-5.5.3-5.5-3.2v-60.5a12.17 12.17 0 015.5-9.6z",
    fill: "url(#header_svg__linear-gradient-56)",
    fillOpacity: 0.8
  }), /*#__PURE__*/React.createElement("path", {
    d: "M328.6 321.9l133.8-77.2c3-1.8 5.5-.3 5.5 3.2v60.5a12.48 12.48 0 01-5.5 9.6l-133.8 77.2c-3 1.8-5.5.3-5.5-3.2v-60.5a12.17 12.17 0 015.5-9.6z",
    stroke: "url(#header_svg__linear-gradient-57)",
    strokeWidth: 0.67,
    fill: "none"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M380.9 304.8L340 328.4a9.29 9.29 0 00-4.2 7.3v36.8c0 2.7 1.9 3.8 4.2 2.4l40.9-23.6a9.29 9.29 0 004.2-7.3v-36.8c.1-2.6-1.8-3.7-4.2-2.4z",
    stroke: "url(#header_svg__linear-gradient-58)",
    strokeWidth: 0.67,
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M457.7 262.3l-58.1 33.5a9.29 9.29 0 00-4.2 7.3v36.6c0 2.7 1.9 3.8 4.2 2.4l58.1-33.5a9.29 9.29 0 004.2-7.3v-36.6c.1-2.6-1.8-3.7-4.2-2.4z",
    stroke: "url(#header_svg__linear-gradient-59)",
    strokeWidth: 0.67,
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M425.8 314.3l-.1-29.9 7.1-4v29.9zm-9.7 5.1v-16l7-4.1.1 16.1zm20.4-27.2l.1 16.1 7-4v-16.1zm-30.9 33v-11.4l7-4v11.3z",
    fill: "url(#header_svg__linear-gradient-60)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M431.7 314.3l-.1-29.9 7.1-4v29.9zm-9.7 5.1v-16l7-4.1.1 16.1zm20.4-27.2l.1 16.1 7-4v-16.1zm-30.8 33v-11.4l7-4v11.3z",
    fill: "url(#header_svg__linear-gradient-61)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-36",
    d: "M431.6 284.5h-.4v-.2l.2-.1zm.1 29.8l.2.3-.6.3v-.6zm7-33.8l-.2-.3.6-.3v.6zm0 29.8h.4v.2l-.2.1zm-16.7-7h-.4v-.2l.2-.1zm0 16.1l.2.3-.6.3v-.6zm7.1-20.2l-.2-.3.6-.3v.6zm.1 16.1h.4v.2l-.2.1zm13.3-6.9l.2.3-.6.3v-.6zm-.1-16.2h-.4v-.2l.2-.1zm7.2 12.2h.4v.2l-.2.1zm0-16.2l-.2-.3.6-.3v.6zm-38 25.5h-.4v-.2l.2-.1zm0 11.5l.2.3-.6.3v-.7h.4zm7-15.5l-.2-.3.6-.3v.6zm0 11.4h.4v.2l-.2.1zm13.4-36.6l.1 29.9h-.7l-.1-29.9zm6.9-3.7l-7.1 4-.4-.6 7.1-4zm-.5 29.5v-29.9h.7v29.9zm-6.9 3.7l7-4 .4.6-7 4zm-9.1-10.7v16h-.7v-16zm6.9-3.8l-7 4.1-.4-.6 7-4.1zm-.5 15.8l-.1-16.1h.7l.1 16.1zm-6.9 3.7l7.1-4 .4.7-7.1 4zm20.3-10.6l-.1-16.1h.7l.1 16.1zm7.6-3.7l-7 4-.4-.6 7-4zm.1-16.5v16.1h-.7v-16.1zm-7.7 3.7l7.1-4 .4.6-7.1 4zm-30.3 21.8v11.4h-.7v-11.4zm6.9-3.6l-7 4-.4-.6 7-4zm-.6 11v-11.3h.7v11.3zm-6.8 3.8l7-4.1.4.6-7 4.1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M354.1 332.1a1.44 1.44 0 01-.2.3c-.1.2-.1.5-.2.7v.2l.4.2c.4.2.4 1 0 1.6l-.7 1.2a1.58 1.58 0 01-.7.7.63.63 0 01-.7.1l-.4-.2h-.1a.1.1 0 00-.1.1c-.2.2-.3.4-.5.5a.37.37 0 00-.1.3v.7a2.06 2.06 0 01-1 1.7l-1 .6c-.6.3-1 .1-1-.6v-.7a.1.1 0 00-.1-.1h-.6a.1.1 0 00-.1.1l-.4.7a1.58 1.58 0 01-.7.7.63.63 0 01-.7.1l-.7-.4a.6.6 0 01-.3-.6 1.93 1.93 0 01.3-1l.4-.7c0-.1.1-.2 0-.3s-.1-.3-.2-.4-.1-.1-.2-.1l-.6.3c-.6.3-1 .1-1-.6v-1.1a2.06 2.06 0 011-1.7l.6-.3a1.44 1.44 0 01.2-.3c.1-.2.1-.5.2-.7v-.2l-.4-.2c-.4-.2-.4-1 0-1.6l.7-1.2a1.58 1.58 0 01.7-.7.63.63 0 01.7-.1l.4.2h.1a.1.1 0 00.1-.1c.2-.2.3-.4.5-.5a.37.37 0 00.1-.3v-.7a2.06 2.06 0 011-1.7l1-.6c.6-.3 1-.1 1 .6v.7a.1.1 0 00.1.1h.6a.1.1 0 00.1-.1l.4-.7a1.58 1.58 0 01.7-.7.63.63 0 01.7-.1l.7.4c.4.2.4 1 0 1.6l-.4.7c0 .1-.1.2 0 .3s.1.3.2.4.1.1.2.1l.6-.3c.6-.3 1-.1 1 .6v1.1a2.06 2.06 0 01-1 1.7zm-4.8 3.3a4.13 4.13 0 001.9-3.4 1.17 1.17 0 00-1.9-1.1 4.13 4.13 0 00-1.9 3.4 1.17 1.17 0 001.9 1.1zm23.3-2.7l1.2-.7c.8-.5 1.5-.1 1.5.9v2.2a3.36 3.36 0 01-1.5 2.6l-1.2.7a2.14 2.14 0 00-.8 1.2 6.47 6.47 0 01-.4 1.3c-.2.5-.1 1 .1 1.1l.8.5c.6.3.6 1.4 0 2.4l-1.4 2.3a2.89 2.89 0 01-1.1 1.1 1.11 1.11 0 01-1.1.1l-.8-.5c-.1-.1-.4 0-.6.1s-.3.2-.4.3c-.3.3-.6.7-.9 1a2.23 2.23 0 00-.6 1.3v1.4a3.36 3.36 0 01-1.5 2.6l-1.9 1.1c-.8.5-1.5.1-1.5-.9v-1.4a.58.58 0 00-.6-.6 2.77 2.77 0 01-.9.1.6.6 0 00-.4.1 1.72 1.72 0 00-.6.6l-.8 1.4a2.89 2.89 0 01-1.1 1.1 1.11 1.11 0 01-1.1.1l-1.4-.8c-.6-.3-.6-1.4 0-2.4l.8-1.4c.2-.4.3-1 .1-1.2s-.3-.6-.4-.9a.63.63 0 00-.8-.3l-1.2.7c-.8.5-1.5.1-1.5-.9v-2a3.36 3.36 0 011.5-2.6l1.2-.7a2.14 2.14 0 00.8-1.2 6.47 6.47 0 01.4-1.3c.2-.5.1-1-.1-1.1l-.8-.5a1.05 1.05 0 01-.4-1 4.19 4.19 0 01.4-1.5l1.4-2.3a2.89 2.89 0 011.1-1.1 1.11 1.11 0 011.1-.1l.8.5c.1.1.4 0 .6-.1s.3-.2.4-.3c.3-.3.6-.7.9-1a2.23 2.23 0 00.6-1.3V330a3.36 3.36 0 011.5-2.6l1.9-1.1c.8-.5 1.5-.1 1.5.9v1.4a.58.58 0 00.6.6 2.77 2.77 0 01.9-.1.6.6 0 00.4-.1 1.72 1.72 0 00.6-.6l.8-1.4a2.89 2.89 0 011.1-1.1 1.11 1.11 0 011.1-.1l1.4.8c.6.3.6 1.4 0 2.4l-.8 1.4c-.2.4-.3 1-.1 1.2s.3.6.4.9a.6.6 0 00.8.2zm-9.6 13.4a9.77 9.77 0 004.4-7.6c0-2.8-2-3.9-4.4-2.5a9.77 9.77 0 00-4.4 7.6c0 2.8 2 3.9 4.4 2.5z",
    fill: "url(#header_svg__linear-gradient-62)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M358.6 332.1a1.44 1.44 0 01-.2.3c-.1.2-.1.5-.2.7v.2l.4.2c.4.2.4 1 0 1.6l-.7 1.2a1.58 1.58 0 01-.7.7.63.63 0 01-.7.1l-.4-.2h-.1a.1.1 0 00-.1.1c-.2.2-.3.4-.5.5a.37.37 0 00-.1.3v.7a2.06 2.06 0 01-1 1.7l-1 .6c-.6.3-1 .1-1-.6v-.7a.1.1 0 00-.1-.1h-.6a.1.1 0 00-.1.1l-.4.7a1.58 1.58 0 01-.7.7.63.63 0 01-.7.1l-.7-.4a.6.6 0 01-.3-.6 1.93 1.93 0 01.3-1l.4-.7c0-.1.1-.2 0-.3s-.1-.3-.2-.4-.1-.1-.2-.1l-.6.3c-.6.3-1 .1-1-.6v-1.1a2.06 2.06 0 011-1.7l.6-.3a1.44 1.44 0 01.2-.3c.1-.2.1-.5.2-.7v-.2l-.4-.2c-.4-.2-.4-1 0-1.6l.7-1.2a1.58 1.58 0 01.7-.7.63.63 0 01.7-.1l.4.2h.1a.1.1 0 00.1-.1c.2-.2.3-.4.5-.5a.37.37 0 00.1-.3v-.7a2.06 2.06 0 011-1.7l1-.6c.5-.3 1-.1 1 .6v.7a.1.1 0 00.1.1h.6a.1.1 0 00.1-.1l.4-.7a1.58 1.58 0 01.7-.7.63.63 0 01.7-.1l.7.4c.4.2.4 1 0 1.6l-.4.7c0 .1-.1.2 0 .3s.1.3.2.4.1.1.2.1l.6-.3c.5-.3 1-.1 1 .6v1.1a2.06 2.06 0 01-1 1.7zm-4.8 3.3a4.13 4.13 0 001.9-3.4 1.17 1.17 0 00-1.9-1.1 4.13 4.13 0 00-1.9 3.4c0 1.2.8 1.7 1.9 1.1zm23.3-2.7l1.2-.7c.8-.5 1.5-.1 1.5.9v2.2a3.36 3.36 0 01-1.5 2.6l-1.2.7a2.14 2.14 0 00-.8 1.2 6.47 6.47 0 01-.4 1.3c-.2.5-.1 1 .1 1.1l.8.5c.6.3.6 1.4 0 2.4l-1.4 2.3a2.89 2.89 0 01-1.1 1.1 1.11 1.11 0 01-1.1.1l-.8-.5c-.1-.1-.4 0-.6.1s-.3.2-.4.3c-.3.3-.6.7-.9 1a2.23 2.23 0 00-.6 1.3v1.4a3.36 3.36 0 01-1.5 2.6l-1.9 1.1c-.8.5-1.5.1-1.5-.9v-1.4a.58.58 0 00-.6-.6 2.77 2.77 0 01-.9.1.6.6 0 00-.4.1 1.72 1.72 0 00-.6.6l-.8 1.4a2.89 2.89 0 01-1.1 1.1 1.11 1.11 0 01-1.1.1l-1.4-.8c-.6-.3-.6-1.4 0-2.4l.8-1.4c.2-.4.3-1 .1-1.2s-.3-.6-.4-.9a.63.63 0 00-.8-.3l-1.2.7c-.8.5-1.5.1-1.5-.9v-2a3.36 3.36 0 011.5-2.6l1.2-.7a2.14 2.14 0 00.8-1.2 6.47 6.47 0 01.4-1.3c.2-.5.1-1-.1-1.1l-.8-.5a1.05 1.05 0 01-.4-1 4.19 4.19 0 01.4-1.5l1.4-2.3a2.89 2.89 0 011.1-1.1 1.11 1.11 0 011.1-.1l.8.5c.1.1.4 0 .6-.1s.3-.2.4-.3c.3-.3.6-.7.9-1a2.23 2.23 0 00.6-1.3V330a3.36 3.36 0 011.5-2.6l1.9-1.1c.8-.5 1.5-.1 1.5.9v1.4a.58.58 0 00.6.6 2.77 2.77 0 01.9-.1.6.6 0 00.4-.1 1.72 1.72 0 00.6-.6l.8-1.4a2.89 2.89 0 011.1-1.1 1.11 1.11 0 011.1-.1l1.4.8c.6.3.6 1.4 0 2.4l-.8 1.4c-.2.4-.3 1-.1 1.2s.3.6.4.9a.57.57 0 00.8.2zm-9.6 13.4a9.77 9.77 0 004.4-7.6c0-2.8-2-3.9-4.4-2.5a9.77 9.77 0 00-4.4 7.6c0 2.8 2 3.9 4.4 2.5z",
    fill: "url(#header_svg__linear-gradient-63)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-36",
    d: "M358.4 332.3zm.2-.2zm-.4.9zm0 .3l.2-.4zm.4.2l-.2.4zm0 1.6l.2.1zm-.6 1.2l-.2-.1zm-1.4.8l.2-.4zm-.5-.2l.2-.4zm-.2.1l.1.3zm-.5.5l.1.3zm-1.1 2.7zm-1 .5zm-1.1-1.3l-.1.4zm-.5 0l-.1.4zm-.2.2l.2.1zm-.4.7l-.2-.1zm-1.5.8l.2-.4zm-.6-.4l-.2.4zm0-1.6l.2.1zm.4-.7l.2.1zm0-.3l.3-.3zm-.2-.4l.3-.3zm-.2-.1zm-.6.3zm-1-.5l.3-.2zm0-1.2l-.3.2zm1-1.7zm.6-.3zm.2-.3l-.3.1zm.2-.7zm0-.2l.2-.4zm-.4-.3l-.2.4zm0-1.6l-.2-.1zm.6-1.2l.2.1zm1.5-.8l-.2.4zm.4.3l.2-.4zm.2-.1l.1.3zm.5-.6l.1.3zm.1-.2l.3-.2zm0-.7l-.3.2zm1-1.7zm1-.6zm1.1 1.4l.1-.4zm.5-.1l.1-.4zm.2-.1l.2.1zm.5-.7l-.2-.1zm1.4-.9l.2-.4zm.6.4l.2-.4zm0 1.7l.2.1zm-.4.7l-.2-.1zm0 .2l-.3.3zm.2.5l.3-.3zm.2.1zm.6-.4zm0 3.4zm19 .3zm-1.1.7zm2.6.2l.3-.2zm-1.5 4.8zm-1.1.6zm-.9 1.2l.3-.1zm-.3 1.3zm.1 1.1l.2-.4zm.8.5l-.2.4zm0 2.4l.2.1zm-1.3 2.4l-.2-.1zm-2.2 1.2l-.2.4zm-.8-.5l.2-.4zm-1 .5l.1.3zm-.9 1l.1.3zm-2.2 5.2zm-1.9 1.1zm-2.1-2.8l.1-.4zm-.9.1l-.1.4zm-1 .7l.2.1zm-.9 1.5l-.2-.1zm-2.1 1.2l-.2.4zm-1.3-.8l.2-.4zm0-2.4l-.2-.1zm.8-1.5l.2.1zm.1-1.2l.3-.3zm-.4-.9l-.3.3zm-.8-.2zm-1.1.7zm1.9-7.6l.3-.1zm.4-1.3zm-.1-1.1l.2-.4zm-.8-.4l-.2.4zm-.5-1l-.3.2zm.5-1.5l.2.1zm1.3-2.3l.2.1zm2.1-1.3l-.2.4zm.9.5l-.2.4zm1-.4l-.1-.3zm.9-1l-.1-.3zm5.5-5.5l.3-.2zm0 1.4l-.3.2zm.7.5l.1-.4zm.9-.1l.1-.4zm1-.7l.2.1zm.8-1.4l.2.1zm2.2-1.2l.2-.4zm1.3.7l-.2.4zm0 2.5l-.2-.1zm-.8 1.4l.2.1zm-.1 1.3l.3-.3zm.3.8l.3-.3zm-17.5-.1a.1.1 0 01-.1.1l-.1.1v-.7c-.1 0-.1.1-.2.2l-.1.1c-.1.1-.1.2-.2.4zm-.2.7a1.85 1.85 0 00.2-.7l-.6.1c-.1.2-.1.4-.2.6zm0-.1c.1.1.1.1 0 .1h-.6c-.1.2-.1.3 0 .4v.1a.1.1 0 00.1.1zm.4.2l-.4-.2-.5.8.4.2zm0 2.2c.5-.9.5-1.9 0-2.2l-.5.8c.3.2.3.6 0 1.1zm-.7 1.1l.7-1.2-.5-.3-.7 1.2zm-.9 1a2.19 2.19 0 00.9-1l-.5-.3a1.21 1.21 0 01-.5.5v.8zm-1 .1a1 1 0 00.9-.1v-.7a.45.45 0 01-.5 0zm-.4-.2l.4.2.5-.8-.4-.2zm.1 0h-.1l.5-.8h-.2c-.1 0-.1 0-.2.1v.7zm.1-.1v-.7a.22.22 0 00-.2.2zm-.6.6a2.65 2.65 0 00.5-.6l-.3-.5c-.1.2-.3.3-.5.5zm.1-.2v.1l-.2-.6c-.1.1-.2.2-.2.3s-.1.1-.1.2v.2zm0 .7v-.7l-.6.4v.7zm-1.3 2.3a2.88 2.88 0 001.3-2.3l-.6.4a1.52 1.52 0 01-.7 1.2v.7zm-1 .5l1-.6v-.7l-1 .6zm-1.3-.7c0 .8.6 1.2 1.3.8v-.7c-.4.2-.7 0-.7-.4zm0-.7v.7l.6-.4v-.7zm.1.1l-.1-.1.6-.4v-.2a.1.1 0 00-.1-.1.35.35 0 00-.2-.1zm-.6.1h.5l.2-.8h-.5zm.1-.1l.2-.8c-.1 0-.2 0-.2.1zm.1-.1c0 .1-.1.1 0 0l-.1.1v-.7c-.1 0-.1.1-.2.1l-.2.2zm-.4.7l.4-.7-.5-.3-.4.7zm-1 1a2.19 2.19 0 00.9-1l-.5-.3a1.21 1.21 0 01-.5.5v.8zm-.9.1a1 1 0 00.9-.1v-.7a.45.45 0 01-.5 0zm-.7-.4l.7.4.5-.8-.7-.4zm-.3-.8a1 1 0 00.4.9l.5-.8a.52.52 0 01-.2-.4zm.3-1.3a3.26 3.26 0 00-.4 1.3l.6-.4a2.54 2.54 0 01.2-.7zm.5-.8l-.4.7.5.3.4-.7zm-.1.2v-.2l.5.3a.31.31 0 00.1-.2v-.5zm-.2-.4c.1.2.1.3.2.5l.6-.7c-.1-.1-.1-.3-.2-.4zm.1 0h-.1l.6-.6a.22.22 0 00-.2-.2h-.1a.31.31 0 00-.2.1v.7zm-.6.3l.6-.3v-.7l-.6.3zm-1.3-.8c0 .8.6 1.2 1.3.8v-.7c-.4.2-.7 0-.7-.4zm0-1.1v1.1l.6-.4V336zm1.3-2.3a2.88 2.88 0 00-1.3 2.3l.6-.4a1.52 1.52 0 01.7-1.2v-.7zm.6-.3l-.6.3v.7l.6-.3zm-.1.2a.1.1 0 01.1-.1l.1-.1v.7c.1 0 .1-.1.2-.2l.1-.1c.1-.1.1-.2.2-.4zm.2-.8a1.85 1.85 0 00-.2.7l.6-.1c.1-.2.1-.4.2-.6zm.1.2c-.1 0-.1-.1 0 0-.1-.1-.1-.1 0-.1h.6c.1-.2.1-.3 0-.4v-.1a.1.1 0 00-.1-.1zm-.5-.3l.4.2.5-.8-.4-.2zm0-2.1c-.5.9-.5 1.9 0 2.2l.5-.8c-.3-.2-.3-.6 0-1.1zm.7-1.2l-.7 1.2.5.3.7-1.2zm.9-1a2.19 2.19 0 00-.9 1l.5.3a1.21 1.21 0 01.5-.5v-.8zm1-.1a1 1 0 00-.9.1v.7a.45.45 0 01.5 0zm.4.3l-.4-.2-.5.8.4.2zm-.1 0h.1l-.5.8h.2c.1 0 .1 0 .2-.1v-.7zm-.1 0v.7a.22.22 0 00.2-.2zm.6-.6a2.65 2.65 0 00-.5.6l.3.5c.1-.2.3-.3.5-.5zm-.1.2v-.1l.2.6c.1-.1.2-.2.2-.3s.1-.1.1-.2v-.2zm0-.6v.7l.6-.4v-.7zm1.3-2.3a2.88 2.88 0 00-1.3 2.3l.6-.4a1.52 1.52 0 01.7-1.2v-.7zm1-.6l-1 .6v.7l1-.6zm1.3.8c0-.8-.6-1.2-1.3-.8v.7c.4-.2.7 0 .7.4zm0 .7v-.7l-.6.4v.7zm-.1-.2c.1 0 .1.1 0 0l.1.1-.6.4v.2a.1.1 0 00.1.1.35.35 0 00.2.1zm.6 0a.9.9 0 00-.5.1l-.2.8h.5zm-.1 0l-.2.8c.1 0 .2 0 .2-.1zm-.1.1l.1-.1v.7c.1 0 .1-.1.2-.1l.2-.2zm.4-.7l-.4.7.5.3.4-.7zm1-1a2.19 2.19 0 00-.9 1l.5.3a1.21 1.21 0 01.5-.5v-.8zm.9-.1a1 1 0 00-.9.1v.7a.45.45 0 01.5 0zm.7.4l-.7-.4-.5.8.7.4zm0 2.2c.5-.9.5-1.9 0-2.2l-.5.8c.3.2.3.6 0 1.1zm-.4.7l.4-.7-.5-.3-.4.7zm0-.2v.2l-.5-.3a.31.31 0 00-.1.2v.5zm.2.5c-.1-.2-.1-.3-.2-.5l-.6.7c.1.1.1.3.2.4zm-.1 0h.1l-.6.6a.22.22 0 00.2.2h.1a.31.31 0 00.2-.1v-.7zm.6-.4l-.6.3v.7l.6-.3zm1.3.8c0-.8-.6-1.2-1.3-.8v.7c.4-.2.7 0 .7.4zm0 1.1v-1.1l-.6.4v1.1zm-1.3 2.3a2.88 2.88 0 001.3-2.3l-.6.4a1.52 1.52 0 01-.7 1.2v.7zm-.6.3l.6-.3v-.7l-.6.3zm-3.2-.2a3.56 3.56 0 01-1.6 2.8v.7a4.91 4.91 0 002.3-3.9zm-1.6-.9c.9-.5 1.6-.1 1.6.9l.6-.4c0-1.4-1-2-2.3-1.3v.8zm-1.6 2.8a3.56 3.56 0 011.6-2.8v-.7a5.18 5.18 0 00-2.3 3.9zm1.6.9c-.9.5-1.6.1-1.6-.9l-.6.4c0 1.4 1 2 2.3 1.3v-.8zm24.4-3.4l-1.2.7v.7l1.2-.7zm1.8 1.1c0-1.2-.8-1.6-1.8-1.1v.7c.6-.4 1.2-.1 1.2.7zm0 2.2v-2.2l-.6.4v2.2zm-1.8 3.1a4.07 4.07 0 001.8-3.2l-.6.4a2.4 2.4 0 01-1.2 2v.8zm-1.1.7l1.2-.7v-.7l-1.2.7zm-.6.8a1.69 1.69 0 01.2-.5q.15-.3.3-.3v-.7a2.31 2.31 0 00-.7.7 1.8 1.8 0 00-.4.9zm-.4 1.3a6.47 6.47 0 00.4-1.3l-.6.1a9.29 9.29 0 01-.4 1.3zm.1.7a.44.44 0 01-.1-.3.6.6 0 01.1-.4h-.6a2.77 2.77 0 00-.1.9.6.6 0 00.3.6zm.8.5l-.8-.5-.5.8.8.5zm0 3c.7-1.2.7-2.6 0-3l-.5.8c.5.3.5 1.1 0 1.9zm-1.3 2.3l1.4-2.3-.5-.3-1.4 2.3zm-1.3 1.4a4.42 4.42 0 001.3-1.4l-.5-.3a2.36 2.36 0 01-.8.9zm-1.3.1a1.24 1.24 0 001.3-.1v-.7a.8.8 0 01-.8.1zm-.8-.5l.8.5.5-.8-.8-.5zm-.4.1a.76.76 0 01.4-.1l.5-.8a.8.8 0 00-.8.1v.8zm-.3.2c.1-.1.2-.2.3-.2v-.7a2.65 2.65 0 00-.6.5zm-.9 1l1-1-.3-.5c-.3.3-.6.7-.9 1zm-.4.9a.76.76 0 01.1-.4 1.38 1.38 0 01.3-.4l-.2-.6a5.55 5.55 0 00-.6.8 3.18 3.18 0 00-.3.9zm0 1.3v-1.4l-.6.4v1.4zm-1.9 3.2a4.07 4.07 0 001.8-3.2l-.6.4a2.4 2.4 0 01-1.2 2v.8zm-1.9 1.1l1.9-1.1v-.7l-1.9 1.1zm-1.8-1.1c0 1.2.8 1.6 1.8 1.1v-.7c-.6.4-1.2.1-1.2-.7zm0-1.3v1.4l.6-.4v-1.4zm-.4-.4a.35.35 0 01.4.4l.6-.4a.6.6 0 00-.3-.6 1.07 1.07 0 00-.6-.2zm-1 .1a3.75 3.75 0 001-.1l.2-.8c-.3 0-.6.1-.9.1zm-.2.1a.37.37 0 01.3-.1l.3-.8a1.42 1.42 0 00-.6.2v.7zm-.4.4l.4-.4v-.7a3 3 0 00-.8.8zm-.8 1.4l.8-1.4-.5-.3-.8 1.4zm-1.3 1.4a4.42 4.42 0 001.3-1.4l-.5-.3a2.36 2.36 0 01-.8.9zm-1.3.1a1.24 1.24 0 001.3-.1v-.7a.8.8 0 01-.8.1zm-1.4-.8l1.4.8.5-.8-1.4-.8zm0-3c-.7 1.2-.7 2.6 0 3l.5-.8c-.5-.3-.5-1.1 0-1.9zm.9-1.4l-.8 1.4.5.3.8-1.4zm0-.8c0 .1.1.2 0 .4s-.1.3-.1.4l.5.3a1.61 1.61 0 00.3-.9 2 2 0 00-.1-.8zm-.4-.9c.1.3.3.6.4.9l.6-.7c-.1-.3-.3-.5-.4-.8zm-.5-.1c.1 0 .2-.1.3 0a.22.22 0 01.2.2l.6-.6c-.1-.2-.2-.4-.4-.4s-.4 0-.7.1zm-1.1.6l1.2-.7v-.7l-1.2.7zm-1.9-1c0 1.2.8 1.6 1.8 1.1v-.7c-.6.4-1.2.1-1.2-.7zm0-2.2v2.2l.6-.4v-2.2zm1.9-3.2a4.07 4.07 0 00-1.8 3.2l.6-.4a2.4 2.4 0 011.2-2v-.8zm1.1-.7l-1.2.7v.7l1.2-.7zm.5-.7a1.69 1.69 0 01-.2.5q-.15.3-.3.3v.7a1.58 1.58 0 00.7-.7 1.8 1.8 0 00.4-.9zm.4-1.4a6.47 6.47 0 00-.4 1.3l.6-.1a9.29 9.29 0 01.4-1.3zm0-.7a.44.44 0 01.1.3v.4h.6a2.77 2.77 0 00.1-.9.6.6 0 00-.3-.6zm-.9-.5l.8.5.5-.8-.8-.5zm-.5-1.1a1.36 1.36 0 00.5 1.2l.5-.8c-.2-.1-.3-.4-.3-.8zm.5-1.8a4.07 4.07 0 00-.5 1.8l.6-.4a2.66 2.66 0 01.3-1.2zm1.4-2.4l-1.4 2.3.5.3 1.4-2.3zm1.3-1.3a4.42 4.42 0 00-1.3 1.4l.5.3a2.36 2.36 0 01.8-.9zm1.3-.2a1.24 1.24 0 00-1.3.1v.7a.8.8 0 01.8-.1zm.8.5l-.8-.5-.5.8.8.5zm.4-.1a.76.76 0 01-.4.1l-.5.8a.8.8 0 00.8-.1v-.8zm.2-.2c-.1.1-.2.2-.3.2v.7a2.65 2.65 0 00.6-.5zm1-1a9.43 9.43 0 01-1 1l.3.5c.3-.3.6-.7.9-1zm.4-.8a.76.76 0 01-.1.4 1.38 1.38 0 01-.3.4l.2.6a5.55 5.55 0 00.6-.8 3.18 3.18 0 00.3-.9zm0-1.4v1.4l.6-.4v-1.4zm1.8-3.1a4.07 4.07 0 00-1.8 3.2l.6-.4a2.4 2.4 0 011.2-2v-.8zm1.9-1.1l-1.9 1.1v.7l1.9-1.1zm1.9 1c0-1.2-.8-1.6-1.8-1.1v.7c.6-.4 1.2-.1 1.2.7zm0 1.4V327l-.6.4v1.4zm.4.3a.35.35 0 01-.4-.4l-.6.4a.6.6 0 00.3.6 1.07 1.07 0 00.6.2zm.9-.1a3.75 3.75 0 00-1 .1l-.2.8c.3 0 .6-.1.9-.1zm.3-.1a.37.37 0 01-.3.1l-.3.8a1.42 1.42 0 00.6-.2v-.7zm.4-.3l-.4.4v.7a3 3 0 00.8-.8zm.8-1.5l-.8 1.4.5.3.8-1.4zm1.3-1.3a4.42 4.42 0 00-1.3 1.4l.5.3a2.36 2.36 0 01.8-.9zm1.3-.1a1.24 1.24 0 00-1.3.1v.7a.8.8 0 01.8-.1zm1.3.7l-1.4-.8-.5.8 1.4.8zm0 3c.7-1.2.7-2.6 0-3l-.5.8c.5.3.5 1.1 0 1.9zm-.8 1.5l.8-1.4-.5-.3-.8 1.4zm-.1.7c0-.1-.1-.2 0-.4s.1-.3.1-.4l-.5-.3a1.61 1.61 0 00-.3.9 2 2 0 00.1.8zm.4.9c-.1-.3-.3-.6-.4-.9l-.6.7c.1.3.3.5.4.8zm.6.2c-.1 0-.2.1-.3 0a.22.22 0 01-.2-.2l-.6.6c.1.2.2.4.4.4s.4 0 .7-.1zm-5.5 6.4a8.8 8.8 0 01-4.1 7v.7a10.48 10.48 0 004.7-8.2zm-4.1-2.4c2.2-1.3 4.1-.2 4.1 2.3l.6-.4c0-3-2.1-4.2-4.7-2.7zm-4.1 7.1a8.8 8.8 0 014.1-7v-.7a10.48 10.48 0 00-4.7 8.2zm4.1 2.3c-2.2 1.3-4.1.2-4.1-2.3l-.6.4c0 3 2.1 4.2 4.7 2.7z"
  }))))), /*#__PURE__*/React.createElement("g", {
    id: "header_svg__person1"
  }, /*#__PURE__*/React.createElement("g", {
    id: "header_svg__person1-2",
    "data-name": "person1"
  }, /*#__PURE__*/React.createElement("g", {
    id: "header_svg__person1-3",
    "data-name": "person1"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: 91.3,
    cy: 602.5,
    rx: 60.4,
    ry: 34.9,
    stroke: "url(#header_svg__linear-gradient-64)",
    strokeWidth: 1.49,
    fill: "none"
  }), /*#__PURE__*/React.createElement("g", {
    className: "header_svg__cls-17"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: 91.5,
    cy: 602.7,
    rx: 40.9,
    ry: 23.6,
    fill: "url(#header_svg__linear-gradient-65)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 91.5,
    cy: 602.7,
    rx: 40.9,
    ry: 23.6,
    stroke: "url(#header_svg__linear-gradient-66)",
    strokeWidth: 1.49,
    fill: "none"
  })), /*#__PURE__*/React.createElement("g", {
    className: "header_svg__cls-17"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: 91.5,
    cy: 598.7,
    rx: 40.9,
    ry: 23.6,
    fill: "url(#header_svg__linear-gradient-67)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 91.5,
    cy: 598.7,
    rx: 40.9,
    ry: 23.6,
    stroke: "url(#header_svg__linear-gradient-68)",
    strokeWidth: 1.49,
    fill: "none"
  })), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#header_svg__clip-path)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M149.6 465.2l-19.4 13-12.5-11.3 18.9-12.2z",
    fill: "url(#header_svg__linear-gradient-69)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M130.2 478.8a.37.37 0 01-.3-.1l-12.6-11.3a.76.76 0 01-.2-.5c0-.2.1-.3.2-.5l18.9-12.2a.85.85 0 01.7 0l13 10.5a.76.76 0 01.2.5c0 .2-.1.3-.2.5l-19.4 13a.37.37 0 01-.3.1zm-11.6-11.9l11.7 10.5 18.4-12.4-12-9.7z",
    fill: "#8eadff"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M67.4 599.6s.1 6.1.1 6.3 3.9 2.7 7.3 1.7 3.5-3.8 3.7-4.5 2.5-1.5 4.6-3.9c1.8-1.9 3.3-5.3 3.1-7.4a3 3 0 00-.5-1.3c-1.2-1.8-4.9.7-5.4 1l-.3 1.7a10 10 0 01-8.6 6.4 14.83 14.83 0 01-4 0z",
    fill: "url(#header_svg__linear-gradient-70)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M88.3 610s.3 5.3.3 5.6 2.8 3.7 6 3.4 4.8-4 4.8-4a18 18 0 009.6-3.9c4.7-3.5 6.2-5 5.1-7.4s-12.1.7-12.1.7-3.7 4.6-8.2 5.9a5.71 5.71 0 01-5.5-.3z",
    fill: "url(#header_svg__linear-gradient-71)"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-88",
    d: "M67.8 568.6a49.16 49.16 0 014.4-17.5l-.3-35.9L84 493.6l4.2 19.5c.1 6.7.3 23.2.6 35.3l-8.5 43.2-.3 1.7a10 10 0 01-8.6 6.4 14 14 0 01-4-.2s-.1-20.8.4-30.9z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M87 579c.2-8.6 1.2-12.2 2.4-14.2 0 0-.1-7.2-.3-16.3-.2-12.1-.6-28.7-.6-35.3l7.3 1 .6.1 13.6 1.9a81 81 0 01-.9 26c-2.8 15-5.2 23.2-5.6 32.9s-1.2 29.2-1.2 29.2-3.7 4.6-8.2 5.9a6.23 6.23 0 01-5.6-.5s-.7-9.2-1.1-18.2A114.54 114.54 0 0187 579z",
    fill: "#072280"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M84.7 442.5l14.5 8.6.5-9v-.2l.2-2.3a.56.56 0 01.6-.5 5.58 5.58 0 004.6-1.9c2.9-3 3.9-18.7-.3-21.1h-.2a4.49 4.49 0 01-1.4.8c-.6.8-.5 2.2-.1 3.5a4.48 4.48 0 010 2.3c-.2.8-.7 1.1-1.2 1.8a12.39 12.39 0 01-2.2 1.8c-.7.5-4.3.6-4.9 1.6s-7.9 7.1-7.9 7.1z",
    fill: "url(#header_svg__linear-gradient-72)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M148.1 458.5a1.5 1.5 0 01-.1 2.4l-19.4 13.3a1.66 1.66 0 01-1.9-.1l-11.9-11a1.46 1.46 0 01.2-2.3l19-12.5a1.51 1.51 0 011.8.1z",
    fill: "url(#header_svg__linear-gradient-73)"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-92",
    d: "M73.7 441.7c2.3-4.7 9.2-4.7 11.1.2a9.28 9.28 0 01-.2 7.3c-3.6 9-8.2 27.8-8.3 29.8s8.6 27.6 8.6 27.6-7.3 5.3-8.3 3.9c-1-1.6-12.7-27.5-12.2-32 .4-3 5.7-29.4 9.3-36.8z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-93",
    d: "M86.9 435.4l-.3 2c0 1.7.2 2.5 3.1 3.4 5.4 1.3 9.8-.9 11 .6a6.61 6.61 0 011.1 3.7s-3.5 4.8-12 2.3c-3.5-1-5.2-5.4-5.6-7.3-.5-2.3 2.7-4.7 2.7-4.7z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-88",
    d: "M86.1 529.4c.1 0 9.2 1.3 15.4-.1a14.24 14.24 0 008.8-5.7l-.1-3.2-18.7 3.2-3.3.3z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-94",
    d: "M71 449.2c1.1-8.5 6.5-14.3 14.7-12.3 0 0-4.2 4.5 3.7 7.4 4.8 1.8 12.4.2 12.4.2s1.6.9 2.9 1.8c3.3 2.2 9.6 5.9 8.7 14.7-1.2 12.1-6.1 16.7-5.7 24.9s3.3 35.3 3.3 35.3a18.16 18.16 0 01-6.8 4.8 18.88 18.88 0 01-9.2 1.3c-10.2-1.3-11.2-2.9-11.2-2.9l-.2-21.9-1.2 21.6s-10-7-10.8-8.5 1.7-18.8 3.4-27.3-5.3-30.7-4-39.1z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-93",
    d: "M83.9 419.7c.1-8.3 11.5-14.8 20.5-8.2 5.8 4.2-.5 11.6-2.8 13.6-1.1.9-.3 5.7-.9 6.2-.6.3-1-1.1-1.1-1.6-.2-.8-.3-1.8-1.2-2.2-2.5-.9-3.1 3.5-5.9 7.8-1.2 1.8-4.6.7-5.6-.5-2.5-3-3.1-11-3-15.1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M144.9 469s-5.2 3.7-6.5 3.8c-2.4.3 1.7-4.9-.2-4.7a7.88 7.88 0 00-2.3 1.9 1.62 1.62 0 00-.5.9 13.6 13.6 0 01-2.5 4c0 .1-2.3 1.3-2.4 1.4l2 5.1a56.1 56.1 0 0010.3-5.3c2.4-1.3 2.1-7.1 2.1-7.1z",
    fill: "url(#header_svg__linear-gradient-74)"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-92",
    d: "M98.3 458c1.6-11.3 16.9-11.4 15.2 3.3-1.1 9.7-1.7 18.3-1.2 20.2.1.3 14.7-5.4 17.9-6.6a2.2 2.2 0 011.6 0 4.42 4.42 0 011.9 1.8 8.55 8.55 0 01.6 4.7 3.67 3.67 0 01-1.5 2.5c-4.7 3.7-22.7 17-29.9 13.8-6.5-2.9-5.7-31.5-4.6-39.7z"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M153.1 602.7V425.9h-123v176.8c.1 9.1 6.1 18.2 18.1 25.2 24.1 13.9 63 13.9 87 0 12.1-6.9 18-16.1 17.9-25.2z",
    opacity: 0.4,
    fill: "url(#header_svg__linear-gradient-75)"
  })))), /*#__PURE__*/React.createElement("g", {
    id: "header_svg__person2"
  }, /*#__PURE__*/React.createElement("g", {
    id: "header_svg__person2-2",
    "data-name": "person2"
  }, /*#__PURE__*/React.createElement("g", {
    id: "header_svg__person2-3",
    "data-name": "person2"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: 468.5,
    cy: 607.4,
    rx: 60.4,
    ry: 34.9,
    stroke: "url(#header_svg__linear-gradient-76)",
    strokeWidth: 1.49,
    fill: "none"
  }), /*#__PURE__*/React.createElement("g", {
    className: "header_svg__cls-17"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: 468.7,
    cy: 607.7,
    rx: 40.9,
    ry: 23.6,
    fill: "url(#header_svg__linear-gradient-77)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 468.7,
    cy: 607.7,
    rx: 40.9,
    ry: 23.6,
    stroke: "url(#header_svg__linear-gradient-78)",
    strokeWidth: 1.49,
    fill: "none"
  })), /*#__PURE__*/React.createElement("g", {
    className: "header_svg__cls-17"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: 468.7,
    cy: 603.6,
    rx: 40.9,
    ry: 23.6,
    fill: "url(#header_svg__linear-gradient-79)"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: 468.7,
    cy: 603.6,
    rx: 40.9,
    ry: 23.6,
    stroke: "url(#header_svg__linear-gradient-80)",
    strokeWidth: 1.49,
    fill: "none"
  })), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#header_svg__clip-path-2)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M489.8 593.9s-.1 6.1-.1 6.3-3.9 2.8-7.3 1.7a5.1 5.1 0 01-3.8-4.5c-.2-.6-2.5-1.5-4.7-3.9-1.8-2-3.3-5.3-3.1-7.5a3 3 0 01.5-1.3c1.3-1.8 4.9.7 5.5 1l.3 1.7a10.16 10.16 0 008.7 6.4 9.92 9.92 0 004 .1z",
    fill: "url(#header_svg__linear-gradient-81)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M468.6 604.4s-.3 5.3-.3 5.6-2.9 3.7-6.1 3.4-4.8-4-4.8-4a18.45 18.45 0 01-9.7-3.9c-4.7-3.6-6.3-5.1-5.2-7.5s12.3.7 12.3.7 3.8 4.6 8.3 6a5.45 5.45 0 005.5-.3z",
    fill: "url(#header_svg__linear-gradient-82)"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-106",
    d: "M489.4 562.9a48.15 48.15 0 00-4.5-17.6l.3-36-12.2-21.8-4.2 19.6c-.1 6.8-.3 23.3-.6 35.5l8.7 43.4.3 1.7a10.16 10.16 0 008.7 6.4 14 14 0 004-.2s0-20.9-.5-31z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M470 573.2c-.2-8.6-1.3-12.3-2.4-14.2 0 0 .1-7.2.3-16.4.2-12.2.6-28.8.6-35.5l-7.2 1-.6.1-13.8 2s-2 11.1.9 26.2 5.3 23.3 5.6 33.1c.5 9.9 1.3 29.4 1.3 29.4s3.8 4.6 8.3 6a6.21 6.21 0 005.6-.5s.7-9.3 1.1-18.3c.3-5 .4-9.8.3-12.9z",
    fill: "#041f7d"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M472.1 435.9l-14.7 8.6-.5-9.1v-.2l-.3-2.9s-5.2-.6-6-1.1c-2.2-1.5-3.1-19.6 1.1-21.9h.2a4.93 4.93 0 001.3.8c.6.8.5 2.2.1 3.6a4.48 4.48 0 000 2.3c.2.8.7 1.1 1.3 1.8a12.39 12.39 0 002.2 1.8c.7.5 4.4.6 4.9 1.6s8 7.1 8 7.1z",
    fill: "url(#header_svg__linear-gradient-83)"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-109",
    d: "M483.5 435.1c-2.3-4.7-9.3-4.7-11.2.2a9.29 9.29 0 00.2 7.3c3.7 9.1 8.3 27.9 8.4 30s-8.7 27.8-8.7 27.8 7.3 5.3 8.4 3.9 12.8-27.5 12.4-32c-.5-3.1-5.9-29.6-9.5-37.2z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-109",
    d: "M471.6 430.7a4.85 4.85 0 00-1-1.3l.3 1.1c.1 1-.7 2.8-3.7 3.7-5.5 1.3-10 .1-11.1.6-.6.2-1.4 3.1-1.4 3.9 0 0 3.8 4.5 12.4 2.1 3.6-1 4.9-3 5.3-4.9a10.39 10.39 0 00-.8-5.2z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-106",
    d: "M471 523.3c-.1 0-9.3 1.3-15.6-.1a14.28 14.28 0 01-8.9-5.7l.1-3.2 18.9 3.2 3.3.3z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-94",
    d: "M486.2 442.7c-1.1-8.5-6.5-14.3-14.9-12.4 0 0 4.2 4.5-3.8 7.5-4.8 1.8-12.5.3-12.5.3s-1.6.9-3 1.8c-3.3 2.2-9.7 6-8.8 14.8 1.3 12.2 6.2 16.8 5.7 25s-3.3 35.5-3.3 35.5a18 18 0 006.9 4.8 19.11 19.11 0 009.3 1.3c10.3-1.3 11.4-2.9 11.4-2.9l.2-22 1.3 21.7s10.1-7 10.9-8.5-1.7-18.9-3.4-27.4 5.2-31 4-39.5z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-93",
    d: "M475.3 414.4c.2-3.6-1.8-4-1.8-4s1.3-3.1-2.4-5.4c-4.8-2.4-12.4-2.9-18.4-2.5-2.3.2-2.3 6.3-1.1 10.8.6 2.3 1.3 3.3 3.8 5.3 1.1.9.3 5.7.9 6.2.6.3 1-1.1 1.1-1.6.2-.8.3-1.8 1.3-2.2 2.5-.9 3.1 3.6 6 7.8 1.3 1.8 5.6-.5 5.6-.5s4.5-7 5-13.9z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-94",
    d: "M452.3 530.2s.1-2.1-1.5-2.6a3.66 3.66 0 00-3.6 0c-5.5 2.5-5.6 12.3-5.6 12.3l-8.1 1.4-.9-1-3.7-1.8-9.6-8.4.3 10.3 26.6 14.2-.9-20z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-109",
    d: "M452.3 530.2l.7 18.5c.1 1.4-3.4 1.1-3.4 1.1s-2.6 5.5-3.4 4.4c-1-1.5-.8-19.6-.8-19.6z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-109",
    d: "M419 533.7c-.9-1-2.2-20.5 6.2-19.6l13 6.8c.7 1.7 1.4 3.6 1.4 3.6l1.9-1.1v-.8l9.5 4.9v.1a3 3 0 00-3.1.1c-5.5 2.5-3.1 17.9-4.6 18.6-2.1 1-22.3-10.1-24.3-12.6z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-94",
    d: "M430.6 535.8c.6.8.6 1.7.1 2.1a1.65 1.65 0 01-2-.7c-.6-.8-.6-1.7-.1-2.1a1.56 1.56 0 012 .7zM449.5 549.4s-1.4-16.2-.9-15.5 1.3 6 1.7 8.6a23.78 23.78 0 01-.8 6.9zM441.9 526.3l-3-1.6c-.7-3.2-1-3.9-1.4-4.2a1.24 1.24 0 111.3-2.1c-.1-.1 2.9 1.8 3.1 7.9z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M437 510.8c-.2.2-5.6 5.3-5.6 7.5s-1.4 10.7 2.9 8.8 3.1-7.1 4.4-8.1 2.5-1.4 3.2-2.6.3-2.9.7-4",
    fill: "url(#header_svg__linear-gradient-84)"
  }), /*#__PURE__*/React.createElement("path", {
    className: "header_svg__cls-109",
    d: "M459.1 450.5c-.6-5.3-10.2-8.1-13.5-4.1-1.4 1.6-2.2 3.9-2 7.1.8 9.8.9 29.4.5 31.5s-9.2 26.5-9.2 26.5 7.2 4.7 8.7 3.7 12.6-22.2 13.4-26.6c.5-3.1 3.7-21 2.1-38.1z"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M530.8 607.9V431.1h-123v176.8c.1 9.1 6.1 18.2 18.1 25.2 24.1 13.9 63 13.9 87 0 12.1-6.9 18-16.1 17.9-25.2z",
    opacity: 0.4,
    fill: "url(#header_svg__linear-gradient-85)"
  })))));
}

var _default = SvgHeader;
exports["default"] = _default;