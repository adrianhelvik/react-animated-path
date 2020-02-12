"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AnimatedPath;

var _hooks = require("hooks.macro");

var _flubber = require("flubber");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// import * as d3 from 'd3'
// import log from './log'
function AnimatedPath(_ref) {
  var from = _ref.from,
      to = _ref.to,
      fill = _ref.fill,
      step = _ref.step;

  var _React$useState = _react["default"].useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      path = _React$useState2[0],
      setPath = _React$useState2[1];

  var interpolator = (0, _hooks.useAutoMemo)(function () {
    return (0, _flubber.interpolate)(from, to, {
      maxSegmentLength: 0.1
    });
  });
  var d = (0, _hooks.useAutoMemo)(function () {
    return interpolator(step);
  });
  return _react["default"].createElement("path", {
    ref: setPath,
    fill: fill,
    d: d
  });
}