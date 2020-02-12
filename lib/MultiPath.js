"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MultiPath;

var _react = _interopRequireWildcard(require("react"));

var _colorInterpolate = _interopRequireDefault(require("color-interpolate"));

var _AnimatedPath = _interopRequireDefault(require("./AnimatedPath"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function MultiPath(_ref) {
  var stages = _ref.stages,
      passedStep = _ref.step;
  var createFill = (0, _colorInterpolate["default"])(stages.map(function (stage) {
    return stage.fill;
  }));
  var step = passedStep * (stages.length - 1);
  var pathPairs = (0, _react.useMemo)(function () {
    var pathPairs = [];

    for (var i = 1; i < stages.length; i++) {
      pathPairs.push({
        from: stages[i - 1].d,
        to: stages[i].d
      });
    }

    return pathPairs;
  }, [stages]);
  return pathPairs.map(function (_ref2, index) {
    var to = _ref2.to,
        from = _ref2.from;
    var fill = 'transparent';

    if (index <= step && index >= step - 1) {
      fill = createFill(passedStep);
    }

    return _react["default"].createElement(_AnimatedPath["default"], {
      key: index,
      fill: fill,
      from: from,
      to: to,
      step: step - index
    });
  });
}