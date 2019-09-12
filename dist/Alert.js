import React from 'react';
import classNames from 'classnames';

var Alert = function Alert(props) {
  var classes = classNames('alert', props.color === 'success' && 'alert-success', props.color === 'danger' && 'alert-danger', (props.color === 'info' || !props.color) && 'alert-info' // default value is info
  );
  return React.createElement("div", {
    "aria-live": "polite",
    role: "alert",
    "class": classes
  }, props.children);
};

export default Alert;