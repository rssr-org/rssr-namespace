"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _defaultConfig = _interopRequireDefault(require("./defaultConfig.json"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var config;

try {
  config = require("../../package.json").namespace;
} catch (e) {
  config = false;
}

config = config ? Object.assign({}, _defaultConfig["default"], config) : _defaultConfig["default"];

var Namespace = function Namespace(_ref) {
  var namespace = _ref.namespace,
      children = _ref.children;
  var copy = {
    children: _objectSpread({}, children),
    childrenProps: _objectSpread({}, children.props)
  };
  copy.childrenProps[config.name] = namespace;
  copy.children.props = copy.childrenProps;
  return copy.children;
};

Namespace.propTypes = {
  namespace: _propTypes["default"].string.isRequired
};
var _default = Namespace;
exports["default"] = _default;
