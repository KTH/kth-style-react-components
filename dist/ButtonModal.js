import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
var _jsxFileName = "/Users/elenara/kthdev/kth-style-react-components/src/lib/ButtonModal.js";
import React from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import classNames from 'classnames';

var ButtonModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ButtonModal, _React$Component);

  function ButtonModal(props) {
    var _this;

    _classCallCheck(this, ButtonModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ButtonModal).call(this, props));
    _this.state = {
      isOpen: false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.handleConfirm = _this.handleConfirm.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ButtonModal, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "_goBackToStartPage",
    value: function _goBackToStartPage(returnToUrl) {
      window.location = returnToUrl;
    }
  }, {
    key: "handleConfirm",
    value: function handleConfirm(event) {
      event.preventDefault();
      if (this.props.type === 'cancel') this._goBackToStartPage(this.props.returnToUrl);else {
        // return control to parent element function
        this.props.handleParentConfirm(); // close modal

        this.toggle();
      }
    }
  }, {
    key: "render",
    value: function render() {
      //* *** Properties *** *//

      /* type: info-icon, submit, cancel, remove
       btnLabel: t.e., 'Publish and quit', if it is info modal then no btnLabel need
       modalLabels = {
        header: 'To be aware of before cancelling!',
        body: 'Unsaved changes will be lost if you cancel the publishing of course information (image and text) <br/>  <br/> Do you want to cancel?',
        btnCancel: 'No, go back',
        btnConfirm: 'Yes, cancel',
      }
      */
      //* *** example 1 SUBMIT*** *//

      /*
      <ButtonModal id='publish' btnLabel={introLabel.button.publish} type='submit' handleParentConfirm={this.handlePublish}
          modalLabels={introLabel.info_publish}
          disabled={this.state.hasDoneSubmit}
          />
      */
      //* *** example 2 INFO MODAL*** *//

      /*
            <ButtonModal id='infoImage2' type='info-icon'
              modalLabels={introLabel.info_image} />
          </span>
      */
      //* *** example 3 CANCEL AND RETURN TO START PAGE *** *//

      /*
            <ButtonModal id='cancelStep3' btnLabel={introLabel.button.cancel} type='cancel'
                returnToUrl={`${ADMIN_OM_COURSE}${this.courseCode}?serv=kinfo&event=cancel`}
                modalLabels={introLabel.info_cancel} course={this.courseCode}
                disabled={this.state.hasDoneSubmit}
                />
        />
      */
      var _this$props = this.props,
          type = _this$props.type,
          id = _this$props.id,
          modalLabels = _this$props.modalLabels,
          className = _this$props.className;
      var header = modalLabels.header,
          body = modalLabels.body,
          btnCancel = modalLabels.btnCancel,
          btnConfirm = modalLabels.btnConfirm;
      var btnStyle = classNames({
        'btn-info-modal': type === 'info-icon'
      }, {
        'secondary': type === 'cancel'
      }, {
        'success': type === 'submit'
      }, {
        'danger': type === 'remove'
      });
      return React.createElement("span", {
        className: className,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, React.createElement(Button, {
        type: "button",
        color: btnStyle,
        className: btnStyle,
        disabled: this.props.disabled,
        onClick: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, this.props.btnLabel), React.createElement(Modal, {
        isOpen: this.state.isOpen,
        toggle: this.toggle,
        id: id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, React.createElement(ModalHeader, {
        toggle: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, header), React.createElement(ModalBody, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, this.props.children, body ? React.createElement("p", {
        dangerouslySetInnerHTML: {
          __html: body
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }) : ''), React.createElement(ModalFooter, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, React.createElement(Button, {
        color: "secondary",
        onClick: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, btnCancel), type === 'submit' || type === 'remove' || type === 'cancel' ? React.createElement(Button, {
        color: "secondary",
        type: type,
        onClick: this.handleConfirm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, btnConfirm) : '')));
    }
  }]);

  return ButtonModal;
}(React.Component);

export default ButtonModal;