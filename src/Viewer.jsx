import { useEffect, useState } from 'react'
import React from 'react'

import PropTypes from 'prop-types'

export default function Viewer({ children, params = getParamsForComponent(children.type.name) }) {
  const paramElements = getElementsForParams(params)

  return (
    <div>
      <div>{paramElements}</div>
      {children}
    </div>
  )
}

Viewer.prototypes = {
  children: PropTypes.node.isRequired,
  params: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string
    })
  )
}

const getParamsForComponent = (componentName) => {
  try {
    let jsdoc = require('../jsdoc.json')
    const { params } = jsdoc.find((component) => component.name === componentName)
    if (params?.length > 0) {
      return params.map((param) => {
        return {
          name: param.name,
          type: param.type.names.length === 1 ? param.type.names[0] : param.type.names
        }
      })
    }
  } catch (error) {
    console.debug('Found no jsdoc.json')
    return
  }
}

const getElementsForParams = (params) => {
  return params.map((param) => {
    if (param.type === 'string') {
      return <input value={param.name}></input>
    }

    if (Array.isArray(param.type)) {
      return (
        <select name={param.name} id={param.name}>
          {param.type.map((type) => (
            <option value={type}>{type}</option>
          ))}
        </select>
      )
    }
  })
}
