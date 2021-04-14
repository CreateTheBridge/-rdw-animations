"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _all = require("gsap/all");

var _cybersecurity = _interopRequireDefault(require("../../assets/svg/cybersecurity.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var findElement = function findElement(ref, selector) {
  if (!ref) return;
  return ref.querySelector("#cybersecurity_svg__".concat(selector));
};

var CyberSecurityAnimation = function CyberSecurityAnimation() {
  var elem = (0, _react.useRef)(null);
  var animation = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var svg = elem.current.querySelector("svg");
    var timing = 1.25;
    var offset = "-=".concat(timing);
    var linesup = findElement(svg, "linesup");
    var linesmid = findElement(svg, "linesmid");
    var lights = findElement(svg, "lights");
    var lock = findElement(svg, "lock");
    animation.current = new _all.TimelineMax({
      yoyo: true,
      repeat: -1
    });
    animation.current.add(_all.TweenMax.to(linesup, timing, {
      y: 8,
      opacity: 0.5,
      easing: _all.Power1.easeInOut
    })).add(_all.TweenMax.to(linesmid, timing, {
      y: 18,
      opacity: 0.7,
      easing: _all.Power1.easeInOut
    }), offset).add(_all.TweenMax.to(lights, timing, {
      y: -21,
      opacity: 0.2,
      easing: _all.Power1.easeInOut
    }), offset).add(_all.TweenMax.to(lock, timing, {
      y: -15,
      opacity: 0.7,
      easing: _all.Power1.easeInOut
    }), offset).play();
    return function () {
      return animation.current.kill();
    };
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "cyber-security-animation",
    ref: elem
  }, /*#__PURE__*/_react["default"].createElement(_cybersecurity["default"], null));
};

var _default = CyberSecurityAnimation;
exports["default"] = _default;