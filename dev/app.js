import React from 'react'
import ReactDOM from 'react-dom'
import Viewer from '../src/Viewer'
import Alert from '../src/Alert/Alert'
import 'kth-style/dist/css/kth-bootstrap.css'

ReactDOM.render(
  <>
    <h1>Hello world!</h1>
    <Viewer>
      <Alert message="aj aj" type="danger" />
    </Viewer>
  </>,
  document.getElementById('root')
)
