import { useEffect, useState } from 'react'
import React from 'react'
import Input from '../src/components/formik/Input/Input'
import Select from '../src/components/formik/Select/Select'
import { Formik, Form } from 'formik'

import PropTypes from 'prop-types'

export default function Viewer({ children, params = getParamsForComponent(children.type.name) }) {
  const [state, setState] = useState({})
  const [paramElements, setParamElements] = useState([])

  useEffect(() => {
    setParamElements(getElementsForParams(params, state, setState))
  }, [])

  useEffect(() => {
    setParamElements(getElementsForParams(params, state, setState))
  }, [state])

  return (
    <div>
      <div>{paramElements}</div>
      {React.cloneElement(children, state)}
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

const getElementsForParams = (params, state, setState) => {
  const DEFAULT_STRING =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

  const initialState = {}

  const elements = params.map((param) => {
    if (param.type === 'string') {
      initialState[param.name] = DEFAULT_STRING

      return <Input name={param.name} id={param.name} />
    } else if (Array.isArray(param.type)) {
      const initalValue = param.type[param.type.length - 1].slice(1, -1)
      initialState[param.name] = initalValue

      return (
        <Select name={param.name} id={param.name}>
          {param.type.map((type, index) => {
            const trimmedType = type.slice(1, -1)
            return (
              <option key={`${type}-${index}`} value={trimmedType}>
                {trimmedType}
              </option>
            )
          })}
        </Select>
      )
    }
  })

  return [
    <Formik
      initialValues={initialState}
      onSubmit={(values) => {
        console.log(values)
        setState(values)
      }}
    >
      {(props) => <Form onChange={() => props.handleSubmit()}>{elements}</Form>}
    </Formik>
  ]
}
