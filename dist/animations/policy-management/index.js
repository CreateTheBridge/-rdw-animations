"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _all = require("gsap/all");

var _policy = _interopRequireDefault(require("./policy.svg"));

require("./style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var findElement = function findElement(ref, selector) {
  if (!ref) return;
  return ref.querySelector("#policy_svg__".concat(selector));
};

var PolicyManagementAnimation = function PolicyManagementAnimation() {
  var elem = (0, _react.useRef)(null);
  var animation = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var svg = elem.current.querySelector("svg");
    var timing = 1.25;
    var offset = "-=".concat(timing);
    var person = findElement(svg, "person");
    var policy = findElement(svg, "policy");
    var lines = findElement(svg, "lines");
    animation.current = new _all.TimelineMax({
      repeat: -1,
      yoyo: true
    });
    animation.current.add(_all.TweenMax.to(person, timing, {
      y: 12,
      easing: _all.Power1.easeInOut
    })).add(_all.TweenMax.to(policy, timing, {
      y: -19,
      opacity: 0.6,
      easing: _all.Power1.easeInOut
    }), offset).add(_all.TweenMax.to(lines, timing, {
      y: -10,
      easing: _all.Power1.easeInOut
    }), offset).play();
    return function () {
      return animation.current.kill();
    };
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "policy-management-animation",
    ref: elem
  }, /*#__PURE__*/_react["default"].createElement(_policy["default"], null));
};

var _default = PolicyManagementAnimation;
exports["default"] = _default;