import React from 'react'
import { Modal, Button } from 'react-bootstrap'

/**
 * @param {string} title - Title to be displayed
 * @param {string} children - Modal body to be displayed
 * @param {('true'|'false')} show - Modal visibility
 */

export default (props) => {
  const { show, onHide, children, title, sizeClass } = props

  return (
    <Modal
      animation
      aria-labelledby="feedbackModalLabel"
      size={sizeClass}
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <h3>{title}</h3>
      </Modal.Header>

      <Modal.Body>{children}</Modal.Body>

      <Modal.Footer>
        <Button onClick={onHide} variant="secondary">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
