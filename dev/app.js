import React, { useState } from 'react'
// import 'regenerator-runtime/runtime'
import ReactDOM from 'react-dom'
import { Button } from 'reactstrap'

import { Formik, Form } from 'formik'
import Viewer from './Viewer'
import { Alert, Modal, TextEditor } from '../src/index'
import 'kth-style/dist/css/kth-bootstrap.css'

function App() {
  const [modalShow, setModalShow] = useState(false)

  return (
    <>
      <Viewer>
        <Alert />
      </Viewer>

      {/* TODO: Modal needs to be wrapped in Viewer? */}
      <Modal title="The title" show={modalShow} onHide={() => setModalShow(false)}>
        This is the modal content
      </Modal>
      <Button color="primary" onClick={() => setModalShow(true)}>
        Modal button
      </Button>

      <Formik initialValues={{ 'text-editor': 'Some initial text example' }}>
        <Form>
          <TextEditor
            id="text-editor"
            name="text-editor"
            label="The label"
            editorUrl="http://localhost:1234/ckeditor/ckeditor.js" // path to custom ckEditor-build in dist folder.
          />
        </Form>
      </Formik>
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
