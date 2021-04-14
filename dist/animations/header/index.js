"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _all = require("gsap/all");

var _svg = require("../../svg");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var HeaderAnimation = function HeaderAnimation() {
  var elem = (0, _react.useRef)(null);
  var animation = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var svg = elem.current.querySelector("svg");
    animation.current = new _all.TimelineMax({
      repeat: -1,
      yoyo: true
    }); // Light

    var chart = svg.querySelector("#rdwheader_svg__chart");
    var spiral = svg.querySelector("#rdwheader_svg__spiral");
    var lightTimeline = new _all.TimelineMax();
    lightTimeline.add(_all.TweenMax.to(chart, 1.25, {
      y: -10,
      opacity: 1,
      ease: _all.Power1.easeInOut
    })).add(_all.TweenMax.to(spiral, 1.25, {
      y: -17,
      opacity: 1,
      ease: _all.Power1.easeInOut
    }), "-=1.25"); // Right Panel

    var elem4 = svg.querySelector("#rdwheader_svg__element4");
    var elem5 = svg.querySelector("#rdwheader_svg__element5");
    var rightPanelTimeline = new _all.TimelineMax();
    rightPanelTimeline.add(_all.TweenMax.to(elem4, 1.25, {
      y: -3,
      opacity: 1,
      ease: _all.Power1.easeInOut
    })).add(_all.TweenMax.to(elem5, 1.25, {
      y: 8,
      opacity: 1,
      ease: _all.Power1.easeInOut
    }), "-=1.25"); // Left Panel

    var elem1 = svg.querySelector("#rdwheader_svg__element1");
    var elem2 = svg.querySelector("#rdwheader_svg__element2");
    var elem3 = svg.querySelector("#rdwheader_svg__element3");
    var leftPanelTimeline = new _all.TimelineMax();
    leftPanelTimeline.add(_all.TweenMax.to(elem1, 1.25, {
      y: -6,
      opacity: 1,
      ease: _all.Power1.easeInOut
    })).add(_all.TweenMax.to(elem2, 1.25, {
      y: 11,
      opacity: 1,
      ease: _all.Power1.easeInOut
    }), "-=1.25").add(_all.TweenMax.to(elem3, 1.25, {
      y: 6,
      opacity: 1,
      ease: _all.Power1.easeInOut
    }), "-=1.25");
    animation.current.add(lightTimeline).add(rightPanelTimeline, "-=1").add(leftPanelTimeline, "-=1").play();
    return function () {
      return animation.current.kill();
    };
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "header-animation",
    ref: elem
  }, /*#__PURE__*/_react["default"].createElement(_svg.Rdwheader, null));
};

var _default = HeaderAnimation;
exports["default"] = _default;