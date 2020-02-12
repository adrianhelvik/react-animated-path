"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MultiPath;

var _colorInterpolate = _interopRequireDefault(require("color-interpolate"));

var _hooks = require("hooks.macro");

var _AnimatedPath = _interopRequireDefault(require("./AnimatedPath"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function MultiPath(_ref) {
  var stages = _ref.stages,
      passedStep = _ref.step;
  var createFill = (0, _colorInterpolate["default"])(stages.map(function (stage) {
    return stage.fill;
  }));
  var step = passedStep * (stages.length - 1);
  var pathPairs = (0, _hooks.useAutoMemo)(function () {
    var pathPairs = [];

    for (var i = 1; i < stages.length; i++) {
      pathPairs.push({
        from: stages[i - 1].d,
        to: stages[i].d
      });
    }

    return pathPairs;
  });
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