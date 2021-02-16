import React, { Children } from 'react'
import { useField, useFormikContext, getIn } from 'formik'
import { Form, InputGroup } from 'react-bootstrap'
import { Badges, ClickableDiv } from '../../helpers'

export default ({ children, label, onInfoClick, helpText, ...props }) => {
  let internalField = {}
  let internalMeta = undefined
  let statusInternal

  if (props.name) {
    const [field, meta, helpers] = useField(props)
    internalField = field
    internalMeta = meta

    const { status } = useFormikContext()
    statusInternal = status
  }

  const hasError = internalMeta && internalMeta.touched && internalMeta.error

  return (
    <Form.Group>
      <Form.Label htmlFor={props.name}>
        {label}
        {typeof onInfoClick === 'function' && (
          <ClickableDiv className="glyphicon glyphicon-info-sign" onClick={onInfoClick} />
        )}
      </Form.Label>

      <div className="select-wrapper">
        <Form.Control as="select" isInvalid={hasError} {...internalField} {...props}>
          {children}
        </Form.Control>
      </div>

      {hasError || statusInternal ? (
        <Form.Control.Feedback style={{ display: 'block' }} type="invalid" className="error">
          {internalMeta.error || getIn(statusInternal, internalField.name)}
        </Form.Control.Feedback>
      ) : null}
    </Form.Group>
  )
}
