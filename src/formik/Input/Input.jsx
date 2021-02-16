import React from 'react'
import { useField, useFormikContext, getIn } from 'formik'
import { Form, InputGroup } from 'react-bootstrap'
import { Badges, ClickableDiv } from '../../helpers'

export default ({ label, badges, onInfoClick, helpText, ...props }) => {
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
    <>
      <Form.Label htmlFor={props.name}>
        {label}
        <Badges content={badges} />
        {typeof onInfoClick === 'function' && (
          <ClickableDiv className="glyphicon glyphicon-info-sign" onClick={onInfoClick} />
        )}
        <Form.Control isInvalid={hasError} {...internalField} {...props} />
        {hasError || statusInternal ? (
          <Form.Control.Feedback style={{ display: 'block' }} type="invalid" className="error">
            {internalMeta.error || getIn(statusInternal, internalField.name)}
          </Form.Control.Feedback>
        ) : null}
      </Form.Label>
    </>
  )
}
