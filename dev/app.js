import React from 'react'
import ReactDOM from 'react-dom'
import { Alert } from '../src/index'
import 'kth-style/dist/css/kth-bootstrap.css'

ReactDOM.render(
  <>
    <h1>Hello world!</h1>
    <Alert alertMessage={{ message: 'HEEEEEJ', type: 'danger' }} />
  </>,
  document.getElementById('root')
)
