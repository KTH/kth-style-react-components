import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'react-bootstrap'
import Viewer from '../src/Viewer'
import { Alert, Modal } from '../src/index'
import 'kth-style/dist/css/kth-bootstrap.css'

function App() {
  const [modalShow, setModalShow] = useState(false)

  return (
    <>
      <Viewer>
        <Alert message="aj aj" type="danger" />
      </Viewer>

      {/* TODO: Modal needs to be wrapped in Viewer? */}
      <Modal title="The title" show={modalShow} onHide={() => setModalShow(false)}>
        This is the modal content
      </Modal>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Modal button
      </Button>
    </>
  )
}

ReactDOM.render(
  <>
    <h1>Hello world!</h1>
    <App />
  </>,
  document.getElementById('root')
)
