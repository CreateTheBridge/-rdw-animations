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

function SvgPolicy(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 215 278"
  }, props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "policy_svg__linear-gradient",
    x1: 105.11,
    y1: 4.7,
    x2: 105.02,
    y2: 71.57,
    gradientTransform: "matrix(1 0 0 -1 0 284)",
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
    stopOpacity: 0.03
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "policy_svg__linear-gradient-2",
    x1: 105.16,
    y1: 37.67,
    x2: 102.08,
    y2: 124.05,
    gradientTransform: "matrix(1 0 0 -1 0 284)",
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
    id: "policy_svg__linear-gradient-3",
    x1: 105.16,
    y1: 15.42,
    x2: 105.05,
    y2: 103.22,
    xlinkHref: "#policy_svg__linear-gradient"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "policy_svg__linear-gradient-4",
    x1: 5.71,
    y1: 114.11,
    x2: 144.7,
    y2: 97.57,
    gradientTransform: "matrix(1 0 0 -1 0 284)",
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
    id: "policy_svg__linear-gradient-5",
    x1: 181.56,
    y1: 115.82,
    x2: -2.42,
    y2: 83.78,
    gradientTransform: "matrix(1 0 0 -1 0 284)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: 0,
    stopColor: "#ff8789"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.42,
    stopColor: "#84a2fc"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 0.53,
    stopColor: "#205fe3"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: 1,
    stopColor: "#030f28"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "policy_svg__linear-gradient-6",
    x1: 88.83,
    y1: 146.95,
    x2: 85.63,
    y2: 158.96,
    xlinkHref: "#policy_svg__linear-gradient-4"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "policy_svg__linear-gradient-7",
    x1: 75.94,
    y1: 105.17,
    x2: 103.17,
    y2: 108.04,
    xlinkHref: "#policy_svg__linear-gradient-4"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "policy_svg__linear-gradient-8",
    x1: 105.85,
    y1: 85.66,
    x2: 112.3,
    y2: 101.15,
    xlinkHref: "#policy_svg__linear-gradient-4"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "policy_svg__linear-gradient-9",
    x1: 90.61,
    y1: 174.03,
    x2: 117.39,
    y2: 168.77,
    xlinkHref: "#policy_svg__linear-gradient-4"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "policy_svg__linear-gradient-10",
    x1: 103.26,
    y1: 202.51,
    x2: 110.22,
    y2: 182.15,
    xlinkHref: "#policy_svg__linear-gradient-4"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "policy_svg__linear-gradient-11",
    x1: 114.34,
    y1: 136.5,
    x2: 113.91,
    y2: 151.66,
    xlinkHref: "#policy_svg__linear-gradient-4"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "policy_svg__linear-gradient-12",
    x1: 19.17,
    y1: 102.32,
    x2: 118.03,
    y2: 198.35,
    gradientTransform: "matrix(1 0 0 -1 0 284)",
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
    id: "policy_svg__linear-gradient-13",
    x1: -1887.37,
    y1: 748.68,
    x2: -1804.85,
    y2: 719.76,
    gradientTransform: "matrix(-.87 -.5 0 -1 -1512.6 -75.09)",
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
    id: "policy_svg__linear-gradient-14",
    x1: -1856.56,
    y1: 718.95,
    x2: -1801.42,
    y2: 741.99,
    gradientTransform: "matrix(-.87 -.5 0 -1 -1512.6 -75.09)",
    xlinkHref: "#policy_svg__linear-gradient-4"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "policy_svg__linear-gradient-15",
    x1: -1887.54,
    y1: 747.96,
    x2: -1804.77,
    y2: 719.35,
    gradientTransform: "matrix(-.87 -.5 0 -1 -1514.2 -74.69)",
    xlinkHref: "#policy_svg__linear-gradient-13"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "policy_svg__linear-gradient-16",
    x1: -1856.66,
    y1: 718.54,
    x2: -1801.3,
    y2: 741.36,
    gradientTransform: "matrix(-.87 -.5 0 -1 -1514.2 -74.69)",
    xlinkHref: "#policy_svg__linear-gradient-4"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "policy_svg__linear-gradient-17",
    x1: -1834.91,
    y1: 770.85,
    x2: -1833.89,
    y2: 761.69,
    gradientTransform: "matrix(-.87 -.5 0 -1 -1516.6 -68.2)",
    xlinkHref: "#policy_svg__linear-gradient-13"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "policy_svg__linear-gradient-18",
    x1: -1834.47,
    y1: 762.3,
    x2: -1833.97,
    y2: 767.68,
    gradientTransform: "matrix(-.87 -.5 0 -1 -1516.6 -68.2)",
    xlinkHref: "#policy_svg__linear-gradient-4"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "policy_svg__linear-gradient-19",
    x1: -1834.91,
    y1: 770.85,
    x2: -1833.89,
    y2: 761.69,
    gradientTransform: "matrix(-.87 -.5 0 -1 -1516.6 -38.4)",
    xlinkHref: "#policy_svg__linear-gradient-13"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "policy_svg__linear-gradient-20",
    x1: -1834.47,
    y1: 762.3,
    x2: -1833.97,
    y2: 767.68,
    gradientTransform: "matrix(-.87 -.5 0 -1 -1516.6 -38.4)",
    xlinkHref: "#policy_svg__linear-gradient-4"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "policy_svg__linear-gradient-21",
    x1: -1834.91,
    y1: 770.85,
    x2: -1833.89,
    y2: 761.69,
    gradientTransform: "matrix(-.87 -.5 0 -1 -1516.6 -33.58)",
    xlinkHref: "#policy_svg__linear-gradient-13"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "policy_svg__linear-gradient-22",
    x1: -1834.47,
    y1: 762.3,
    x2: -1833.97,
    y2: 767.68,
    gradientTransform: "matrix(-.87 -.5 0 -1 -1516.6 -33.58)",
    xlinkHref: "#policy_svg__linear-gradient-4"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "policy_svg__linear-gradient-23",
    x1: -1834.91,
    y1: 770.85,
    x2: -1833.89,
    y2: 761.69,
    gradientTransform: "matrix(-.87 -.5 0 -1 -1516.6 -28.32)",
    xlinkHref: "#policy_svg__linear-gradient-13"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "policy_svg__linear-gradient-24",
    x1: -1834.47,
    y1: 762.3,
    x2: -1833.97,
    y2: 767.68,
    gradientTransform: "matrix(-.87 -.5 0 -1 -1516.6 -28.32)",
    xlinkHref: "#policy_svg__linear-gradient-4"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "policy_svg__linear-gradient-25",
    x1: -1834.91,
    y1: 770.85,
    x2: -1833.89,
    y2: 761.69,
    gradientTransform: "matrix(-.87 -.5 0 -1 -1516.6 -23.93)",
    xlinkHref: "#policy_svg__linear-gradient-13"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "policy_svg__linear-gradient-26",
    x1: -1834.47,
    y1: 762.3,
    x2: -1833.97,
    y2: 767.68,
    gradientTransform: "matrix(-.87 -.5 0 -1 -1516.6 -23.93)",
    xlinkHref: "#policy_svg__linear-gradient-4"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "policy_svg__linear-gradient-27",
    x1: -1845.97,
    y1: 770.57,
    x2: -1843.94,
    y2: 761.77,
    gradientTransform: "matrix(-.87 -.5 0 -1 -1534.61 -29.51)",
    xlinkHref: "#policy_svg__linear-gradient-13"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "policy_svg__linear-gradient-28",
    x1: -1845.1,
    y1: 762.4,
    x2: -1844.09,
    y2: 767.64,
    gradientTransform: "matrix(-.87 -.5 0 -1 -1534.61 -29.51)",
    xlinkHref: "#policy_svg__linear-gradient-4"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "policy_svg__linear-gradient-29",
    x1: -1845.97,
    y1: 770.57,
    x2: -1843.94,
    y2: 761.77,
    gradientTransform: "matrix(-.87 -.5 0 -1 -1527.45 -17.24)",
    xlinkHref: "#policy_svg__linear-gradient-13"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "policy_svg__linear-gradient-30",
    x1: -1845.1,
    y1: 762.4,
    x2: -1844.09,
    y2: 767.64,
    gradientTransform: "matrix(-.87 -.5 0 -1 -1527.45 -17.24)",
    xlinkHref: "#policy_svg__linear-gradient-4"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "policy_svg__linear-gradient-31",
    x1: -1848.57,
    y1: 771.23,
    x2: -1845.04,
    y2: 760.96,
    gradientTransform: "matrix(-.87 -.5 0 -1 -1537.41 -64.2)",
    xlinkHref: "#policy_svg__linear-gradient-13"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "policy_svg__linear-gradient-32",
    x1: -1847.06,
    y1: 761.69,
    x2: -1845.27,
    y2: 767.9,
    gradientTransform: "matrix(-.87 -.5 0 -1 -1537.41 -64.2)",
    xlinkHref: "#policy_svg__linear-gradient-4"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "policy_svg__linear-gradient-33",
    x1: -1848.57,
    y1: 771.23,
    x2: -1845.04,
    y2: 760.96,
    gradientTransform: "matrix(-.87 -.5 0 -1 -1537.41 -59)",
    xlinkHref: "#policy_svg__linear-gradient-13"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "policy_svg__linear-gradient-34",
    x1: -1847.06,
    y1: 761.69,
    x2: -1845.27,
    y2: 767.9,
    gradientTransform: "matrix(-.87 -.5 0 -1 -1537.41 -59)",
    xlinkHref: "#policy_svg__linear-gradient-4"
  }), /*#__PURE__*/React.createElement("clipPath", {
    id: "policy_svg__clip-path"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "M83.59 76.73h39.44v114.39H83.59z"
  })), /*#__PURE__*/React.createElement("style", null, ".policy_svg__cls-5{fill:#84a2fc}.policy_svg__cls-9{fill:#000272}.policy_svg__cls-13{fill:#1b1d76}.policy_svg__cls-15{fill:#2e2d7b}.policy_svg__cls-16{fill:#fff}.policy_svg__cls-18{fill:#000484}.policy_svg__cls-19{fill:#2d2b98}.policy_svg__cls-20{fill:#292cbe}.policy_svg__cls-28{opacity:.8}")), /*#__PURE__*/React.createElement("path", {
    d: "M172.13 218.42c4 2.37 4 6.13.07 8.5l-59.65 34.73a15.84 15.84 0 01-14.58 0L38 226.92c-4-2.37-4.1-6.13-.07-8.5l59.65-34.73a15.84 15.84 0 0114.58 0z",
    stroke: "url(#policy_svg__linear-gradient)",
    strokeWidth: 0.66,
    strokeMiterlimit: 10,
    fill: "none",
    id: "policy_svg__base"
  }), /*#__PURE__*/React.createElement("g", {
    strokeMiterlimit: 10,
    fill: "none",
    id: "policy_svg__lines"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M168.12 187.32c3.9 2.3 3.9 6 .07 8.25l-57.72 33.7a15.29 15.29 0 01-14.11 0l-58-33.7c-3.9-2.3-4-5.95-.07-8.25L96 153.62a15.29 15.29 0 0114.11 0z",
    strokeWidth: 0.74,
    stroke: "url(#policy_svg__linear-gradient-2)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M193.15 188.66c5.29 3.1 5.29 8 .09 11.15l-78.31 45.61c-5.29 3.11-13.86 3.11-19.15 0L17 199.81c-5.29-3.11-5.38-8.05-.09-11.15L95.23 143c5.29-3.1 13.86-3.1 19.15 0z",
    stroke: "url(#policy_svg__linear-gradient-3)",
    strokeWidth: 0.66
  })), /*#__PURE__*/React.createElement("g", {
    id: "policy_svg__person"
  }, /*#__PURE__*/React.createElement("path", {
    className: "policy_svg__cls-5",
    d: "M139 191.32l-29.7 17.25a11.59 11.59 0 01-10.48 0l-30.11-17.32L98.43 174a7.56 7.56 0 01.71-.39.23.23 0 01.19-.06 2.06 2.06 0 00.57-.26c.07 0 .13-.06.2-.06s.25-.07.38-.13a2.67 2.67 0 01.32-.06.74.74 0 01.38-.07c.07 0 .19-.06.26-.06.25-.06.57-.06.83-.13h2.17c.13 0 .26 0 .32.07a.82.82 0 01.38.06.59.59 0 01.32.06c.13 0 .26.07.39.07s.19.06.32.06.32.06.44.13.2.06.26.06c.26.07.51.2.77.26.06 0 .06 0 .13.06.38.13.7.32 1 .45z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M173 178.66l-21.86-12.59-42.5-24.54a11 11 0 00-10 0l-46 26.65-18 10.48a3.53 3.53 0 00-2 2.88 2.91 2.91 0 00.51 1.53c.13.19.32.39.45.58l.25.25a1 1 0 00.26.2l.57.38 18 10.35 3.39 2 2.49 1.41 40.53 23.39a6.91 6.91 0 001 .45.21.21 0 01.12.06l.58.2c.13.06.19.06.32.12h.13c.06 0 .19.07.25.07.32.06.7.12 1 .19a.89.89 0 01.39.06h1.4a5.94 5.94 0 001-.06h.19c.19 0 .38-.07.57-.07s.19-.06.32-.06.26-.06.39-.06a3.36 3.36 0 00.83-.26l.57-.19c.07 0 .13-.06.19-.06s.13-.07.26-.13a4.05 4.05 0 00.45-.26l40.07-23.26 2-1.15.39-.19L173 184.54c.07 0 .07-.06.13-.06a.64.64 0 00.32-.26 1.57 1.57 0 00.51-.45l.06-.06a.59.59 0 00.26-.32.8.8 0 00.13-.13 5 5 0 00.45-.76 3.51 3.51 0 00.12-.71v-.12c.15-1.16-.55-2.18-1.98-3.01zm-21.86 4.28a5 5 0 01-1.59 1.47l-12.15 7-28.4 16.52a11 11 0 01-10 0l-28.7-16.55-12.08-7a3.4 3.4 0 01-2-2.87v-.13a.61.61 0 01.06-.32V181c0-.07.07-.13.07-.19s.06-.13.06-.2.07-.19.13-.32v-.06a1.25 1.25 0 01.25-.38c0-.07.07-.07.07-.13s.19-.19.32-.32l.13-.13c.06-.06.19-.13.25-.19l.13-.13a1.28 1.28 0 01.32-.19c.06-.06.13-.06.19-.13l40.52-23.52.39-.19c.06-.07.12-.07.25-.13s.19-.06.26-.13l.57-.19c.07 0 .13-.06.19-.06a7.14 7.14 0 01.71-.19.74.74 0 01.38-.07h.07a.25.25 0 00.19-.06c.12 0 .25-.07.38-.07h.06c.13 0 .26-.06.39-.06h.06c.26 0 .51-.06.77-.06H105c.13 0 .26 0 .32.06a.61.61 0 01.32.06.54.54 0 01.32.07h.04a.57.57 0 01.31.06h.07c.13 0 .19.07.32.07h.06c.07 0 .13.06.26.06s.06 0 .13.06a4.54 4.54 0 01.51.2.19.19 0 01.12.06c.07.06.07 0 .07.06.19.07.32.13.51.19a1.74 1.74 0 01.45.26l40.78 23.52a4.4 4.4 0 011.4 1.15c.07.13.19.19.26.32a.36.36 0 01.12.26 2.48 2.48 0 01.33 1.15 2.92 2.92 0 01-.54 1.43z",
    fill: "url(#policy_svg__linear-gradient-4)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M173.16 178.79l-21.88-12.59-42.55-24.53a11 11 0 00-10 0l-46 26.64-18 10.48a3.53 3.53 0 00-2.05 2.87 2.91 2.91 0 00.51 1.53c.13.19.32.39.45.58l.26.25a.74.74 0 00.25.19l.58.39 18 10.35 3.39 2 2.49 1.4 40.59 23.36a5.92 5.92 0 001 .45.24.24 0 01.13.07l.57.19c.13.06.19.06.32.13h.13c.06 0 .19.06.26.06l1 .19a.72.72 0 01.38.07h1.41a5 5 0 001-.07h.2c.19 0 .38-.06.57-.06s.19-.07.32-.07.26-.06.39-.06a3 3 0 00.83-.26l.57-.19c.07 0 .13-.06.2-.06s.12-.07.25-.13a2.9 2.9 0 00.45-.26l40.11-23.25 2-1.15.38-.19 21.5-12.46c.06 0 .06-.06.13-.06a.63.63 0 00.32-.26 1.8 1.8 0 00.51-.44l.06-.07a.59.59 0 00.26-.32l.13-.13a5 5 0 00.45-.76 3.51 3.51 0 00.12-.71v-.12c.12-1.15-.58-2.17-1.99-3z",
    strokeWidth: 0.44,
    stroke: "url(#policy_svg__linear-gradient-5)",
    strokeMiterlimit: 10,
    fill: "none"
  }), /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#policy_svg__clip-path)"
  }, /*#__PURE__*/React.createElement("path", {
    className: "policy_svg__cls-9",
    d: "M89.35 128a4 4 0 00-3.68-2.16 3.08 3.08 0 003.68 2.16z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M84.06 128.54a26 26 0 012.55-3.77s3.77.56 3.3 1.41a10.26 10.26 0 01-1.26 2 26.12 26.12 0 01-.53 3c-.38 1.23-1.13 2-1.23 1.7a3.21 3.21 0 010-.9 10.55 10.55 0 000-2 2.81 2.81 0 00-.78 2v.32c-.19 2.27-.76 4-1.61 2.74-1.59-2.13-.77-5.26-.51-6.25.01-.15.06-.2.07-.25z",
    fill: "url(#policy_svg__linear-gradient-6)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    className: "policy_svg__cls-9",
    d: "M99.25 91.36s-4.24-1-6 7.45-1.79 11.8-3 14.73-4.52 12.27-4.52 12.27 2.73.09 3.68 2.17c0 0 7-11.61 8.39-16.71s5.89-17.55 1.45-19.91z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M103.5 173.28s1.13 2.64 0 3.3-1.32 1.42-3.11 1.32-1.51.47-2.17 1.14-7.08 3.49-8.21 2.07 2.17-2.93 3.39-3.77 4.06-4 4.16-4.91 5.94.85 5.94.85z",
    fill: "url(#policy_svg__linear-gradient-7)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M114.92 181.87s.47 3.11-.76 4.81-3.87 4.62-5 4.53-1.32-.66-1.32-.66a11.48 11.48 0 01.38-5.1 18.5 18.5 0 00.94-3.58z",
    fill: "url(#policy_svg__linear-gradient-8)"
  }), /*#__PURE__*/React.createElement("path", {
    className: "policy_svg__cls-9",
    d: "M101.05 131s-5.38-.57-7.17-4.53a136.2 136.2 0 00.56 19c1.13 10.19 2 28.21 2 28.21s3.49 3.31 7.08 0c0 0 1-11.89 0-18.4 0 0 .66-11.51-.47-17.27s-2-7.01-2-7.01z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "policy_svg__cls-13",
    d: "M96.52 173.65s-1-17.93-2-28.21a120.77 120.77 0 01-.57-19c1.32 2.92 4.53 4.05 6.23 4.43-.29 3.87-.57 15.39-.57 19.16s.76 18.69 1 25a5.65 5.65 0 01-4.09-1.38z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "policy_svg__cls-13",
    d: "M113.69 130.43s.57 5.95.66 15.29.76 12.74 1 14.16 1 17 .57 21.51c0 0-2.93 4.53-7.55 0 0 0-.76-15.95-1.61-19.53s-5.19-21.24-7-27.56c-.75-2.83-.94-3.87-.94-3.87s7.79 5.57 14.87 0z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "policy_svg__cls-13",
    d: "M108.41 181.39s-.76-15.95-1.61-19.53-5.19-21.24-7-27.56a13.18 13.18 0 00-2.64-4.91s5.09 3.59 9.53 3.59c.19 1.32 2.07 14.34 2.55 20s4.24 25.48 3.2 30.39a6.14 6.14 0 01-4.03-1.98z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M108.53 93.86s7.9 4.74 8.09 5.39 2.17 2.33-1.41 9.21c0 0-4.61 7.44-3.1 15.35a42.19 42.19 0 001.78 7s-4 5.12-14 .65c-2-.93-5.27-3.9-6.21-6.23a52.32 52.32 0 00.66-14.41c-.75-7.82-.75-18 3.76-19 .08.08 1.31-1.22 10.43 2.04z",
    fill: "url(#policy_svg__linear-gradient-9)"
  }), /*#__PURE__*/React.createElement("path", {
    className: "policy_svg__cls-15",
    d: "M93.31 126.75s1.79-6 .85-15.76c-.85-8.59-.47-18.6 4.15-19.63 0 0 .57-.57 3.4 0l.47.37s-6.7 6.33-4.91 18.12c1 6.89 1.61 11.71.66 20-.28 2.09-4.06-1.59-4.62-3.1zM116.68 99c.18.66 2.17 2.36-1.42 9.34 0 0-4 7.55-2.73 15.48a26.83 26.83 0 001.51 6.61c.65 1.79-2.18 3.77-5.29 4.34-3.87.75-6.79-.47-7.27-2.83-2-9.72-1.51-16.14.85-21A146.87 146.87 0 00109 94.23l-.85-.85c.1 0 .19.1.29.1s8.05 4.81 8.24 5.52z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "policy_svg__cls-13",
    d: "M111.24 100.7a32 32 0 01-2.08 3.78c-.28.47-1.7 2.64-2 3.11-7.74 11.89-5.57 11.61-5.28 25.29 0 0-2.17-5.47-1.8-14.81a18.14 18.14 0 012-7.37 106.1 106.1 0 007.08-16.42l-.09-.38a1.16 1.16 0 01.19-.28c.37.28 1 .57 1.7 1 1.04 1.08 1.98 2.97.28 6.08zM97.56 110.42a84.79 84.79 0 01.84 9.82 63 63 0 01-.56 9.53c.56-14.06-2.84-15.77-3.12-25.29a18 18 0 011-7c1.8-4.25 3.78-6.13 4.53-6.23h.28l1.61 1.42a21 21 0 00-4.58 17.75z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "policy_svg__cls-16",
    d: "M106 90.7s-6.22 2.73-3.87 7.45l-2.92 1.32S97 91.36 106 90.7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M108.65 90.48a15.25 15.25 0 002.49-4.79c1.89-5.66-2.36-7.92-2.36-7.92-2.79-1.26-4.24-.35-6.22.9A23.55 23.55 0 01100.2 80c-2.58 1.24-1.9 8-1.57 11.22 0 .21 0 .4.06.58.17 1.77 1.08 2.46 2.33 2.52a3.48 3.48 0 010 2.57c-.29.67 1.7 1.33 1.7 1.33 4.43.56 7.36-2.65 6.32-4.16a4.09 4.09 0 01-.39-3.58z",
    fill: "url(#policy_svg__linear-gradient-10)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    className: "policy_svg__cls-15",
    d: "M108.69 90.41s4.06-3.3 3.11-8.4a6 6 0 00-4.9-5c-2.17-.38-6-.38-7.93 3.87-.57 1.32-.85 4.06 4.62 3.12.76-.19 2.84-.29 3.5.47a2.87 2.87 0 01.28 2.92c-.38.85.38 1 .57.85s1.32-2.73 2.26-1.6c.8.94-1.42 3.58-1.51 3.77z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "policy_svg__cls-15",
    d: "M108.69 90.41c.09-.19 2.26-2.83 1.42-3.77s-2.08 1.41-2.27 1.6-.94 0-.57-.85a2.87 2.87 0 00-.28-2.92c-.56-.66-2.45-.47-3.49-.47.94-.48 2.74-.57 3.4-2a5.37 5.37 0 013.39-3 6.22 6.22 0 011.42 3 9 9 0 01-3.02 8.41z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "policy_svg__cls-16",
    d: "M108.5 92.87a7.93 7.93 0 01-6.42 5.28l1.23 3.68c0-.09 9.44-4.06 5.19-8.96z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "policy_svg__cls-15",
    d: "M96.61 79.84s.85 5.66 7.17 4.34a7.11 7.11 0 004.63-3.39 2.83 2.83 0 012.17-1.61s-1.51-2.45-5.76-2.45c-2 0-4.25 1.79-4.81 2.07s-1.89 1.51-3.4 1.04z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "policy_svg__cls-18",
    d: "M106.71 160.91v-10.76l16.29-9.43v10.76a1.78 1.78 0 01-.66 1.51l-16.32 9.43a1.75 1.75 0 00.69-1.51z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "policy_svg__cls-19",
    d: "M104.44 146.19c-1.32-.75-2.36-.19-2.36 1.32v10.76a5.13 5.13 0 002.36 4.06c1.32.75 2.36.19 2.36-1.32v-10.76a5.47 5.47 0 00-2.36-4.06z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "policy_svg__cls-19",
    d: "M104.44 146.19c-1.32-.75-2.36-.19-2.36 1.32v10.76a5.13 5.13 0 002.36 4.06c1.32.75 2.36.19 2.36-1.32v-10.76a5.47 5.47 0 00-2.36-4.06z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "policy_svg__cls-20",
    d: "M104.25 147a3.87 3.87 0 011.8 3.11v.89l-3.59-2.17v-.75c0-1.23.85-1.7 1.79-1.08z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "policy_svg__cls-18",
    d: "M104.25 147a2.36 2.36 0 01.57.47l-2.36 1.23v-.66c0-1.19.85-1.66 1.79-1.04z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "policy_svg__cls-20",
    d: "M119.07 136.56a.09.09 0 00.09-.09h1.14c.09 0 .18.09.28.19a5.62 5.62 0 01.75.56l.1.1.09.09c.1.1.1.19.19.19l.19.19c0 .1.1.1.1.19s.09.09.09.19.09.09.09.19.1.09.1.19.09.09.09.19.1.09.1.18a.32.32 0 00.09.19v.19a.33.33 0 00.1.28.37.37 0 00.09.29V147l-16 10v-6.8a5 5 0 00-.19-1.13 5.42 5.42 0 00-.47-1.13 3.49 3.49 0 00-.76-.94 5.34 5.34 0 00-.85-.76c-.19-.09-.28-.19-.47-.19h-.09c-.1 0-.29-.09-.38-.09h-.38c-.09 0-.28.09-.37.09z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M114.26 151.19L114 151v2.55l.29.19z",
    fill: "#2e3192"
  }), /*#__PURE__*/React.createElement("path", {
    className: "policy_svg__cls-5",
    d: "M117 149.59l-.28-.19L114 151l.29.19z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "policy_svg__cls-5",
    d: "M114.26 151.19v2.55l2.73-1.6v-2.55z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "policy_svg__cls-18",
    d: "M115.29 139.39l-.65-.37v1.32l.65.47z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "policy_svg__cls-15",
    d: "M110.48 141.38v2.17l-.66-.38V141z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "policy_svg__cls-13",
    d: "M110.39 140.62l4.25-2.36.65-.37.67.37-.67.38-4.15 2.45-.66.29-.66-.38z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "policy_svg__cls-20",
    d: "M110.48 141.38v2.17l.66-.38v-1.32l4.15-2.46v1.42l.67-.38v-2.17l-.67.38-4.15 2.45z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M117.28 134.58s.66 5.85-1.89 7.17c-3 1.61-3.87 1.7-4 .95s2.36-4.06 1.13-4.06c-.76 0-.76 1.32-1 1.89s-.94 1-.66-1.51c.19-1.89 1.89-4 2.55-5s3.87.56 3.87.56z",
    fill: "url(#policy_svg__linear-gradient-11)"
  }), /*#__PURE__*/React.createElement("path", {
    className: "policy_svg__cls-13",
    d: "M116.38 98.64s-5.1 2.64-4.72 6.7c0 0 2.36 12.74 2 14.54a100.16 100.16 0 00-.75 14.72s3.3 2 5.09-.38c0 0 2.64-15.38 2.17-20.38s-1.25-13.31-3.79-15.2zM109.82 141l2.36-1.32-.09.75-1.61.95z"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M151 17.73s-95.49 1-95.49-.05v163.53a3.62 3.62 0 002.08 2.92l40.86 23.51c.19.09.33.18.52.28s.14 0 .19.09a1.48 1.48 0 00.33.14 4.09 4.09 0 00.75.24h.24a1.29 1.29 0 00.42.1s.09 0 .09.05a.4.4 0 01.19 0h.38a.16.16 0 01.14.05H103.92a1.87 1.87 0 00.47 0h.23c.29-.05.52-.05.81-.1h.24a3.72 3.72 0 00.37-.1.81.81 0 00.29-.09c.14 0 .23 0 .37-.1H106.94c.05 0 .38-.14.57-.19s.14-.05.18-.1a6.84 6.84 0 00.66-.32L149 184.13h.09a2.31 2.31 0 01.19-.14.57.57 0 00.24-.19c0-.05.14-.09.18-.14a.84.84 0 00.24-.19h.05c.09-.09.19-.18.23-.23h.05l.14-.14v-.09a.8.8 0 01.19-.24v-.09l.05-.05c.05-.09.1-.14.1-.24v-.14a.27.27 0 000-.19c0-.05.05-.1.05-.14a.47.47 0 010-.23V17.73z",
    fill: "url(#policy_svg__linear-gradient-12)",
    opacity: 0.3
  })), /*#__PURE__*/React.createElement("g", {
    id: "policy_svg__policy"
  }, /*#__PURE__*/React.createElement("g", {
    opacity: 0.2
  }, /*#__PURE__*/React.createElement("path", {
    d: "M89.89 84.22l-32-18.47c-1.79-1-3.25-.2-3.25 1.87v65.79A7.19 7.19 0 0057.9 139l32 18.47c1.79 1 3.24.19 3.24-1.88V89.84a7.16 7.16 0 00-3.25-5.62z",
    fill: "url(#policy_svg__linear-gradient-13)",
    fillOpacity: 0.8
  }), /*#__PURE__*/React.createElement("path", {
    d: "M89.89 84.22l-32-18.47c-1.79-1-3.25-.2-3.25 1.87v65.79A7.19 7.19 0 0057.9 139l32 18.47c1.79 1 3.24.19 3.24-1.88V89.84a7.16 7.16 0 00-3.25-5.62z",
    stroke: "url(#policy_svg__linear-gradient-14)",
    strokeWidth: 0.39,
    fill: "none"
  })), /*#__PURE__*/React.createElement("g", {
    className: "policy_svg__cls-28"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M88.29 84.62l-32-18.47c-1.79-1-3.25-.2-3.25 1.87v66.8a7.17 7.17 0 003.25 5.62l32 18.47c1.79 1 3.24.2 3.24-1.87v-66.8a7.16 7.16 0 00-3.24-5.62z",
    fill: "url(#policy_svg__linear-gradient-15)",
    fillOpacity: 0.8
  }), /*#__PURE__*/React.createElement("path", {
    d: "M88.29 84.62l-32-18.47c-1.79-1-3.25-.2-3.25 1.87v66.8a7.17 7.17 0 003.25 5.62l32 18.47c1.79 1 3.24.2 3.24-1.87v-66.8a7.16 7.16 0 00-3.24-5.62z",
    stroke: "url(#policy_svg__linear-gradient-16)",
    strokeWidth: 0.39,
    fill: "none"
  })), /*#__PURE__*/React.createElement("g", {
    className: "policy_svg__cls-28"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M88.54 92.64l-33.3-19.22c-.32-.19-.59 0-.59.34v.83a1.33 1.33 0 00.59 1l33.3 19.22c.33.19.59 0 .59-.34v-.83a1.3 1.3 0 00-.59-1z",
    fill: "url(#policy_svg__linear-gradient-17)",
    fillOpacity: 0.8
  }), /*#__PURE__*/React.createElement("path", {
    d: "M88.54 92.64l-33.3-19.22c-.32-.19-.59 0-.59.34v.83a1.33 1.33 0 00.59 1l33.3 19.22c.33.19.59 0 .59-.34v-.83a1.3 1.3 0 00-.59-1z",
    stroke: "url(#policy_svg__linear-gradient-18)",
    strokeWidth: 0.39,
    fill: "none"
  })), /*#__PURE__*/React.createElement("g", {
    className: "policy_svg__cls-28"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M88.54 122.45l-33.3-19.23c-.32-.19-.59 0-.59.34v.83a1.31 1.31 0 00.59 1l33.3 19.23c.33.18.59 0 .59-.34v-.83a1.29 1.29 0 00-.59-1z",
    fill: "url(#policy_svg__linear-gradient-19)",
    fillOpacity: 0.8
  }), /*#__PURE__*/React.createElement("path", {
    d: "M88.54 122.45l-33.3-19.23c-.32-.19-.59 0-.59.34v.83a1.31 1.31 0 00.59 1l33.3 19.23c.33.18.59 0 .59-.34v-.83a1.29 1.29 0 00-.59-1z",
    stroke: "url(#policy_svg__linear-gradient-20)",
    strokeWidth: 0.39,
    fill: "none"
  })), /*#__PURE__*/React.createElement("g", {
    className: "policy_svg__cls-28"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M88.54 127.27L55.24 108c-.32-.19-.59 0-.59.34v.83a1.31 1.31 0 00.59 1l33.3 19.23c.33.18.59 0 .59-.34v-.83a1.29 1.29 0 00-.59-.96z",
    fill: "url(#policy_svg__linear-gradient-21)",
    fillOpacity: 0.8
  }), /*#__PURE__*/React.createElement("path", {
    d: "M88.54 127.27L55.24 108c-.32-.19-.59 0-.59.34v.83a1.31 1.31 0 00.59 1l33.3 19.23c.33.18.59 0 .59-.34v-.83a1.29 1.29 0 00-.59-.96z",
    stroke: "url(#policy_svg__linear-gradient-22)",
    strokeWidth: 0.39,
    fill: "none"
  })), /*#__PURE__*/React.createElement("g", {
    className: "policy_svg__cls-28"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M88.54 132.53l-33.3-19.23c-.32-.19-.59 0-.59.34v.83a1.31 1.31 0 00.59 1l33.3 19.23c.33.18.59 0 .59-.34v-.83a1.29 1.29 0 00-.59-1z",
    fill: "url(#policy_svg__linear-gradient-23)",
    fillOpacity: 0.8
  }), /*#__PURE__*/React.createElement("path", {
    d: "M88.54 132.53l-33.3-19.23c-.32-.19-.59 0-.59.34v.83a1.31 1.31 0 00.59 1l33.3 19.23c.33.18.59 0 .59-.34v-.83a1.29 1.29 0 00-.59-1z",
    stroke: "url(#policy_svg__linear-gradient-24)",
    strokeWidth: 0.39,
    fill: "none"
  })), /*#__PURE__*/React.createElement("g", {
    className: "policy_svg__cls-28"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M88.54 136.91l-33.3-19.23c-.32-.18-.59 0-.59.34v.83a1.31 1.31 0 00.59 1l33.3 19.23c.33.19.59 0 .59-.34v-.83a1.29 1.29 0 00-.59-1z",
    fill: "url(#policy_svg__linear-gradient-25)",
    fillOpacity: 0.8
  }), /*#__PURE__*/React.createElement("path", {
    d: "M88.54 136.91l-33.3-19.23c-.32-.18-.59 0-.59.34v.83a1.31 1.31 0 00.59 1l33.3 19.23c.33.19.59 0 .59-.34v-.83a1.29 1.29 0 00-.59-1z",
    stroke: "url(#policy_svg__linear-gradient-26)",
    strokeWidth: 0.39,
    fill: "none"
  })), /*#__PURE__*/React.createElement("g", {
    className: "policy_svg__cls-28"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M70.53 131.33l-15.29-8.83c-.32-.18-.59 0-.59.34v.83a1.3 1.3 0 00.59 1l15.29 8.83c.33.19.59 0 .59-.34v-.83a1.3 1.3 0 00-.59-1z",
    fill: "url(#policy_svg__linear-gradient-27)",
    fillOpacity: 0.8
  }), /*#__PURE__*/React.createElement("path", {
    d: "M70.53 131.33l-15.29-8.83c-.32-.18-.59 0-.59.34v.83a1.3 1.3 0 00.59 1l15.29 8.83c.33.19.59 0 .59-.34v-.83a1.3 1.3 0 00-.59-1z",
    stroke: "url(#policy_svg__linear-gradient-28)",
    strokeWidth: 0.39,
    fill: "none"
  })), /*#__PURE__*/React.createElement("g", {
    className: "policy_svg__cls-28"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M77.7 143.6l-15.29-8.82c-.33-.19-.59 0-.59.34v.88a1.27 1.27 0 00.59 1l15.29 8.83c.32.19.58 0 .58-.34v-.83a1.32 1.32 0 00-.58-1.06z",
    fill: "url(#policy_svg__linear-gradient-29)",
    fillOpacity: 0.8
  }), /*#__PURE__*/React.createElement("path", {
    d: "M77.7 143.6l-15.29-8.82c-.33-.19-.59 0-.59.34v.88a1.27 1.27 0 00.59 1l15.29 8.83c.32.19.58 0 .58-.34v-.83a1.32 1.32 0 00-.58-1.06z",
    stroke: "url(#policy_svg__linear-gradient-30)",
    strokeWidth: 0.39,
    fill: "none"
  })), /*#__PURE__*/React.createElement("g", {
    className: "policy_svg__cls-28"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M67.73 96.64l-12.49-7.21c-.32-.19-.59 0-.59.34v1.44a1.31 1.31 0 00.59 1l12.49 7.21c.33.19.59 0 .59-.34v-1.42a1.29 1.29 0 00-.59-1.02z",
    fill: "url(#policy_svg__linear-gradient-31)",
    fillOpacity: 0.8
  }), /*#__PURE__*/React.createElement("path", {
    d: "M67.73 96.64l-12.49-7.21c-.32-.19-.59 0-.59.34v1.44a1.31 1.31 0 00.59 1l12.49 7.21c.33.19.59 0 .59-.34v-1.42a1.29 1.29 0 00-.59-1.02z",
    stroke: "url(#policy_svg__linear-gradient-32)",
    strokeWidth: 0.39,
    fill: "none"
  })), /*#__PURE__*/React.createElement("g", {
    className: "policy_svg__cls-28"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M67.73 101.84l-12.49-7.21c-.32-.19-.59 0-.59.34v1.45a1.3 1.3 0 00.59 1l12.49 7.22c.33.18.59 0 .59-.34v-1.45a1.3 1.3 0 00-.59-1.01z",
    fill: "url(#policy_svg__linear-gradient-33)",
    fillOpacity: 0.8
  }), /*#__PURE__*/React.createElement("path", {
    d: "M67.73 101.84l-12.49-7.21c-.32-.19-.59 0-.59.34v1.45a1.3 1.3 0 00.59 1l12.49 7.22c.33.18.59 0 .59-.34v-1.45a1.3 1.3 0 00-.59-1.01z",
    stroke: "url(#policy_svg__linear-gradient-34)",
    strokeWidth: 0.39,
    fill: "none"
  }))));
}

var _default = SvgPolicy;
exports["default"] = _default;