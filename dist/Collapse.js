import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
var _jsxFileName = "/Users/saraervik/Projects/R2M/KTH/kth-style-react-components/src/lib/Collapse.js";
import React from 'react';
import { Collapse as BootstrapCollapse } from 'reactstrap';
import classNames from 'classnames';

var Collapse =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Collapse, _React$Component);

  function Collapse(props) {
    var _this;

    _classCallCheck(this, Collapse);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Collapse).call(this, props));
    _this.state = {
      isOpen: false,
      firstLoad: 'true'
    };
    _this.toggleHeader = _this.toggleHeader.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Collapse, [{
    key: "toggleHeader",
    value: function toggleHeader() {
      this.setState(function (state) {
        return {
          isOpen: !state.isOpen,
          firstLoad: 'false'
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var classes = classNames('card', 'collapsible', {
        'white': this.props.color === 'white'
      }, {
        'blue': this.props.color === 'blue' || !this.props.color
      } // Default color is blue
      );
      return React.createElement("div", {
        className: classes,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, React.createElement("div", {
        "class": "card-header",
        role: "tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, React.createElement("a", {
        onClick: this.toggleHeader,
        "aria-expanded": this.state.isOpen,
        load: this.state.firstLoad,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, this.props.buttonText)), React.createElement(BootstrapCollapse, {
        isOpen: this.state.isOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, React.createElement("div", {
        "class": "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, this.props.children)));
    }
  }]);

  return Collapse;
}(React.Component);

export default Collapse;