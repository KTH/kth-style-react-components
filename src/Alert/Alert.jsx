import React from 'react'

function Alert({ alertMessage }) {
  const { message, type } = alertMessage

  if (!alertMessage) {
    return null
  }

  return (
    <div className={`alert alert-${type}`} role="alert">
      {message}
    </div>
  )
}

export default Alert
