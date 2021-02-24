import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

/**
 * @param {string} title - Title to be displayed
 * @param {string} children - Modal body to be displayed
 * @param {('true'|'false')} show - Modal visibility
 */

export default (props) => {
  const { show, onHide, children, title, sizeClass } = props

  return (
    <Modal isOpen={show} toggle={onHide} size={sizeClass}>
      <ModalHeader style={{ flexDirection: 'column-reverse' }} toggle={onHide}>
        {title}
      </ModalHeader>

      <ModalBody>{children}</ModalBody>

      <ModalFooter>
        <Button onClick={onHide} variant="secondary">
          Close
        </Button>
      </ModalFooter>
    </Modal>
  )
}
