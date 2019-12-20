import React from 'react'
import classNames from 'classnames'

const Alert = props => {
  const classes = classNames(
    'alert',
    props.color === 'success' && 'alert-success',
    props.color === 'danger' && 'alert-danger',
    (props.color === 'info' || !props.color) && 'alert-info' // default value is info
  )

  return (
    <div aria-live="polite" role="alert" className={classes}>
      {props.children}
    </div>
  )
}

export default Alert
