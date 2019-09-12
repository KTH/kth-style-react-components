var _jsxFileName = "/Users/saraervik/Projects/R2M/KTH/kth-style-react-components/src/lib/Alert.js";
import React from 'react';
import classNames from 'classnames';

var Alert = function Alert(props) {
  var classes = classNames('alert', props.color === 'success' && 'alert-success', props.color === 'danger' && 'alert-danger', (props.color === 'info' || !props.color) && 'alert-info' // default value is info
  );
  return React.createElement("div", {
    "aria-live": "polite",
    role: "alert",
    "class": classes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.children);
};

export default Alert;