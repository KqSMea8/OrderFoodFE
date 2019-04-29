// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"containers/app/aside.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react2 = require("@coreui/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var propTypes = {
  children: _propTypes.default.node
};
var defaultProps = {};

var DefaultAside =
/*#__PURE__*/
function (_Component) {
  _inherits(DefaultAside, _Component);

  function DefaultAside(props) {
    var _this;

    _classCallCheck(this, DefaultAside);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DefaultAside).call(this, props));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.state = {
      activeTab: '1'
    };
    return _this;
  }

  _createClass(DefaultAside, [{
    key: "toggle",
    value: function toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // eslint-disable-next-line
      var _this$props = this.props,
          children = _this$props.children,
          attributes = _objectWithoutProperties(_this$props, ["children"]);

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactstrap.Nav, {
        tabs: true
      }, _react.default.createElement(_reactstrap.NavItem, null, _react.default.createElement(_reactstrap.NavLink, {
        className: (0, _classnames.default)({
          active: this.state.activeTab === '1'
        }),
        onClick: function onClick() {
          _this2.toggle('1');
        }
      }, _react.default.createElement("i", {
        className: "icon-list"
      }))), _react.default.createElement(_reactstrap.NavItem, null, _react.default.createElement(_reactstrap.NavLink, {
        className: (0, _classnames.default)({
          active: this.state.activeTab === '2'
        }),
        onClick: function onClick() {
          _this2.toggle('2');
        }
      }, _react.default.createElement("i", {
        className: "icon-speech"
      }))), _react.default.createElement(_reactstrap.NavItem, null, _react.default.createElement(_reactstrap.NavLink, {
        className: (0, _classnames.default)({
          active: this.state.activeTab === '3'
        }),
        onClick: function onClick() {
          _this2.toggle('3');
        }
      }, _react.default.createElement("i", {
        className: "icon-settings"
      })))), _react.default.createElement(_reactstrap.TabContent, {
        activeTab: this.state.activeTab
      }, _react.default.createElement(_reactstrap.TabPane, {
        tabId: "1"
      }, _react.default.createElement(_reactstrap.ListGroup, {
        className: "list-group-accent",
        tag: 'div'
      }, _react.default.createElement(_reactstrap.ListGroupItem, {
        className: "list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"
      }, "Today"), _react.default.createElement(_reactstrap.ListGroupItem, {
        action: true,
        tag: "a",
        href: "#",
        className: "list-group-item-accent-warning list-group-item-divider"
      }, _react.default.createElement("div", {
        className: "avatar float-right"
      }, _react.default.createElement("img", {
        className: "img-avatar",
        src: "assets/img/avatars/7.jpg",
        alt: "admin@bootstrapmaster.com"
      })), _react.default.createElement("div", null, "Meeting with ", _react.default.createElement("strong", null, "Lucas"), " "), _react.default.createElement("small", {
        className: "text-muted mr-3"
      }, _react.default.createElement("i", {
        className: "icon-calendar"
      }), "\xA0 1 - 3pm"), _react.default.createElement("small", {
        className: "text-muted"
      }, _react.default.createElement("i", {
        className: "icon-location-pin"
      }), " Palo Alto, CA")), _react.default.createElement(_reactstrap.ListGroupItem, {
        action: true,
        tag: "a",
        href: "#",
        className: "list-group-item-accent-info list-group-item-divider"
      }, _react.default.createElement("div", {
        className: "avatar float-right"
      }, _react.default.createElement("img", {
        className: "img-avatar",
        src: "assets/img/avatars/4.jpg",
        alt: "admin@bootstrapmaster.com"
      })), _react.default.createElement("div", null, "Skype with ", _react.default.createElement("strong", null, "Megan")), _react.default.createElement("small", {
        className: "text-muted mr-3"
      }, _react.default.createElement("i", {
        className: "icon-calendar"
      }), "\xA0 4 - 5pm"), _react.default.createElement("small", {
        className: "text-muted"
      }, _react.default.createElement("i", {
        className: "icon-social-skype"
      }), " On-line")), _react.default.createElement(_reactstrap.ListGroupItem, {
        className: "list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"
      }, "Tomorrow"), _react.default.createElement(_reactstrap.ListGroupItem, {
        action: true,
        tag: "a",
        href: "#",
        className: "list-group-item-accent-danger list-group-item-divider"
      }, _react.default.createElement("div", null, "New UI Project - ", _react.default.createElement("strong", null, "deadline")), _react.default.createElement("small", {
        className: "text-muted mr-3"
      }, _react.default.createElement("i", {
        className: "icon-calendar"
      }), "\xA0 10 - 11pm"), _react.default.createElement("small", {
        className: "text-muted"
      }, _react.default.createElement("i", {
        className: "icon-home"
      }), "\xA0 creativeLabs HQ"), _react.default.createElement("div", {
        className: "avatars-stack mt-2"
      }, _react.default.createElement("div", {
        className: "avatar avatar-xs"
      }, _react.default.createElement("img", {
        src: 'assets/img/avatars/2.jpg',
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      })), _react.default.createElement("div", {
        className: "avatar avatar-xs"
      }, _react.default.createElement("img", {
        src: 'assets/img/avatars/3.jpg',
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      })), _react.default.createElement("div", {
        className: "avatar avatar-xs"
      }, _react.default.createElement("img", {
        src: 'assets/img/avatars/4.jpg',
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      })), _react.default.createElement("div", {
        className: "avatar avatar-xs"
      }, _react.default.createElement("img", {
        src: 'assets/img/avatars/5.jpg',
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      })), _react.default.createElement("div", {
        className: "avatar avatar-xs"
      }, _react.default.createElement("img", {
        src: 'assets/img/avatars/6.jpg',
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      })))), _react.default.createElement(_reactstrap.ListGroupItem, {
        action: true,
        tag: "a",
        href: "#",
        className: "list-group-item-accent-success list-group-item-divider"
      }, _react.default.createElement("div", null, _react.default.createElement("strong", null, "#10 Startups.Garden"), " Meetup"), _react.default.createElement("small", {
        className: "text-muted mr-3"
      }, _react.default.createElement("i", {
        className: "icon-calendar"
      }), "\xA0 1 - 3pm"), _react.default.createElement("small", {
        className: "text-muted"
      }, _react.default.createElement("i", {
        className: "icon-location-pin"
      }), "\xA0 Palo Alto, CA")), _react.default.createElement(_reactstrap.ListGroupItem, {
        action: true,
        tag: "a",
        href: "#",
        className: "list-group-item-accent-primary list-group-item-divider"
      }, _react.default.createElement("div", null, _react.default.createElement("strong", null, "Team meeting")), _react.default.createElement("small", {
        className: "text-muted mr-3"
      }, _react.default.createElement("i", {
        className: "icon-calendar"
      }), "\xA0 4 - 6pm"), _react.default.createElement("small", {
        className: "text-muted"
      }, _react.default.createElement("i", {
        className: "icon-home"
      }), "\xA0 creativeLabs HQ"), _react.default.createElement("div", {
        className: "avatars-stack mt-2"
      }, _react.default.createElement("div", {
        className: "avatar avatar-xs"
      }, _react.default.createElement("img", {
        src: 'assets/img/avatars/2.jpg',
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      })), _react.default.createElement("div", {
        className: "avatar avatar-xs"
      }, _react.default.createElement("img", {
        src: 'assets/img/avatars/3.jpg',
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      })), _react.default.createElement("div", {
        className: "avatar avatar-xs"
      }, _react.default.createElement("img", {
        src: 'assets/img/avatars/4.jpg',
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      })), _react.default.createElement("div", {
        className: "avatar avatar-xs"
      }, _react.default.createElement("img", {
        src: 'assets/img/avatars/5.jpg',
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      })), _react.default.createElement("div", {
        className: "avatar avatar-xs"
      }, _react.default.createElement("img", {
        src: 'assets/img/avatars/6.jpg',
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      })), _react.default.createElement("div", {
        className: "avatar avatar-xs"
      }, _react.default.createElement("img", {
        src: 'assets/img/avatars/7.jpg',
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      })), _react.default.createElement("div", {
        className: "avatar avatar-xs"
      }, _react.default.createElement("img", {
        src: 'assets/img/avatars/8.jpg',
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      })))))), _react.default.createElement(_reactstrap.TabPane, {
        tabId: "2",
        className: "p-3"
      }, _react.default.createElement("div", {
        className: "message"
      }, _react.default.createElement("div", {
        className: "py-3 pb-5 mr-3 float-left"
      }, _react.default.createElement("div", {
        className: "avatar"
      }, _react.default.createElement("img", {
        src: 'assets/img/avatars/7.jpg',
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      }), _react.default.createElement("span", {
        className: "avatar-status badge-success"
      }))), _react.default.createElement("div", null, _react.default.createElement("small", {
        className: "text-muted"
      }, "Lukasz Holeczek"), _react.default.createElement("small", {
        className: "text-muted float-right mt-1"
      }, "1:52 PM")), _react.default.createElement("div", {
        className: "text-truncate font-weight-bold"
      }, "Lorem ipsum dolor sit amet"), _react.default.createElement("small", {
        className: "text-muted"
      }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")), _react.default.createElement("hr", null), _react.default.createElement("div", {
        className: "message"
      }, _react.default.createElement("div", {
        className: "py-3 pb-5 mr-3 float-left"
      }, _react.default.createElement("div", {
        className: "avatar"
      }, _react.default.createElement("img", {
        src: 'assets/img/avatars/7.jpg',
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      }), _react.default.createElement("span", {
        className: "avatar-status badge-success"
      }))), _react.default.createElement("div", null, _react.default.createElement("small", {
        className: "text-muted"
      }, "Lukasz Holeczek"), _react.default.createElement("small", {
        className: "text-muted float-right mt-1"
      }, "1:52 PM")), _react.default.createElement("div", {
        className: "text-truncate font-weight-bold"
      }, "Lorem ipsum dolor sit amet"), _react.default.createElement("small", {
        className: "text-muted"
      }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")), _react.default.createElement("hr", null), _react.default.createElement("div", {
        className: "message"
      }, _react.default.createElement("div", {
        className: "py-3 pb-5 mr-3 float-left"
      }, _react.default.createElement("div", {
        className: "avatar"
      }, _react.default.createElement("img", {
        src: 'assets/img/avatars/7.jpg',
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      }), _react.default.createElement("span", {
        className: "avatar-status badge-success"
      }))), _react.default.createElement("div", null, _react.default.createElement("small", {
        className: "text-muted"
      }, "Lukasz Holeczek"), _react.default.createElement("small", {
        className: "text-muted float-right mt-1"
      }, "1:52 PM")), _react.default.createElement("div", {
        className: "text-truncate font-weight-bold"
      }, "Lorem ipsum dolor sit amet"), _react.default.createElement("small", {
        className: "text-muted"
      }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")), _react.default.createElement("hr", null), _react.default.createElement("div", {
        className: "message"
      }, _react.default.createElement("div", {
        className: "py-3 pb-5 mr-3 float-left"
      }, _react.default.createElement("div", {
        className: "avatar"
      }, _react.default.createElement("img", {
        src: 'assets/img/avatars/7.jpg',
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      }), _react.default.createElement("span", {
        className: "avatar-status badge-success"
      }))), _react.default.createElement("div", null, _react.default.createElement("small", {
        className: "text-muted"
      }, "Lukasz Holeczek"), _react.default.createElement("small", {
        className: "text-muted float-right mt-1"
      }, "1:52 PM")), _react.default.createElement("div", {
        className: "text-truncate font-weight-bold"
      }, "Lorem ipsum dolor sit amet"), _react.default.createElement("small", {
        className: "text-muted"
      }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")), _react.default.createElement("hr", null), _react.default.createElement("div", {
        className: "message"
      }, _react.default.createElement("div", {
        className: "py-3 pb-5 mr-3 float-left"
      }, _react.default.createElement("div", {
        className: "avatar"
      }, _react.default.createElement("img", {
        src: 'assets/img/avatars/7.jpg',
        className: "img-avatar",
        alt: "admin@bootstrapmaster.com"
      }), _react.default.createElement("span", {
        className: "avatar-status badge-success"
      }))), _react.default.createElement("div", null, _react.default.createElement("small", {
        className: "text-muted"
      }, "Lukasz Holeczek"), _react.default.createElement("small", {
        className: "text-muted float-right mt-1"
      }, "1:52 PM")), _react.default.createElement("div", {
        className: "text-truncate font-weight-bold"
      }, "Lorem ipsum dolor sit amet"), _react.default.createElement("small", {
        className: "text-muted"
      }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."))), _react.default.createElement(_reactstrap.TabPane, {
        tabId: "3",
        className: "p-3"
      }, _react.default.createElement("h6", null, "Settings"), _react.default.createElement("div", {
        className: "aside-options"
      }, _react.default.createElement("div", {
        className: "clearfix mt-4"
      }, _react.default.createElement("small", null, _react.default.createElement("b", null, "Option 1")), _react.default.createElement(_react2.AppSwitch, {
        className: 'float-right',
        variant: 'pill',
        label: true,
        color: 'success',
        defaultChecked: true,
        size: 'sm'
      })), _react.default.createElement("div", null, _react.default.createElement("small", {
        className: "text-muted"
      }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), _react.default.createElement("div", {
        className: "aside-options"
      }, _react.default.createElement("div", {
        className: "clearfix mt-3"
      }, _react.default.createElement("small", null, _react.default.createElement("b", null, "Option 2")), _react.default.createElement(_react2.AppSwitch, {
        className: 'float-right',
        variant: 'pill',
        label: true,
        color: 'success',
        size: 'sm'
      })), _react.default.createElement("div", null, _react.default.createElement("small", {
        className: "text-muted"
      }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), _react.default.createElement("div", {
        className: "aside-options"
      }, _react.default.createElement("div", {
        className: "clearfix mt-3"
      }, _react.default.createElement("small", null, _react.default.createElement("b", null, "Option 3")), _react.default.createElement(_react2.AppSwitch, {
        className: 'float-right',
        variant: 'pill',
        label: true,
        color: 'success',
        defaultChecked: true,
        size: 'sm',
        disabled: true
      }), _react.default.createElement("div", null, _react.default.createElement("small", {
        className: "text-muted"
      }, "Option disabled.")))), _react.default.createElement("div", {
        className: "aside-options"
      }, _react.default.createElement("div", {
        className: "clearfix mt-3"
      }, _react.default.createElement("small", null, _react.default.createElement("b", null, "Option 4")), _react.default.createElement(_react2.AppSwitch, {
        className: 'float-right',
        variant: 'pill',
        label: true,
        color: 'success',
        defaultChecked: true,
        size: 'sm'
      }))), _react.default.createElement("hr", null), _react.default.createElement("h6", null, "System Utilization"), _react.default.createElement("div", {
        className: "text-uppercase mb-1 mt-4"
      }, _react.default.createElement("small", null, _react.default.createElement("b", null, "CPU Usage"))), _react.default.createElement(_reactstrap.Progress, {
        className: "progress-xs",
        color: "info",
        value: "25"
      }), _react.default.createElement("small", {
        className: "text-muted"
      }, "348 Processes. 1/4 Cores."), _react.default.createElement("div", {
        className: "text-uppercase mb-1 mt-2"
      }, _react.default.createElement("small", null, _react.default.createElement("b", null, "Memory Usage"))), _react.default.createElement(_reactstrap.Progress, {
        className: "progress-xs",
        color: "warning",
        value: "70"
      }), _react.default.createElement("small", {
        className: "text-muted"
      }, "11444GB/16384MB"), _react.default.createElement("div", {
        className: "text-uppercase mb-1 mt-2"
      }, _react.default.createElement("small", null, _react.default.createElement("b", null, "SSD 1 Usage"))), _react.default.createElement(_reactstrap.Progress, {
        className: "progress-xs",
        color: "danger",
        value: "95"
      }), _react.default.createElement("small", {
        className: "text-muted"
      }, "243GB/256GB"), _react.default.createElement("div", {
        className: "text-uppercase mb-1 mt-2"
      }, _react.default.createElement("small", null, _react.default.createElement("b", null, "SSD 2 Usage"))), _react.default.createElement(_reactstrap.Progress, {
        className: "progress-xs",
        color: "success",
        value: "10"
      }), _react.default.createElement("small", {
        className: "text-muted"
      }, "25GB/256GB"))));
    }
  }]);

  return DefaultAside;
}(_react.Component);

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;
var _default = DefaultAside;
exports.default = _default;
},{"react":"../node_modules/react/index.js","reactstrap":"../node_modules/reactstrap/es/index.js","prop-types":"../node_modules/prop-types/index.js","classnames":"../node_modules/classnames/index.js","@coreui/react":"../node_modules/@coreui/react/es/index.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "38963" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/aside.9037335a.js.map