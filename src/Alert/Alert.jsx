import React from 'react'

/**
 * @param {string} message - Message to be displayed
 * @param {('success'|'warning'|'danger')} type - Alert type
 */
function Alert({ message, type }) {
  if (!message) {
    return null
  }

  return (
    <div className={`alert alert-${type}`} role="alert">
      {message}
    </div>
  )
}

export default Alert
