import React from 'react'
import { useField, useFormikContext, getIn } from 'formik'
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap'

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
    <FormGroup>
      <Label htmlFor={props.name}>
        {label}
        {typeof onInfoClick === 'function' && (
          <ClickableDiv className="glyphicon glyphicon-info-sign" onClick={onInfoClick} />
        )}
      </Label>

      <div className="select-wrapper">
        <Input type="select" invalid={hasError} {...internalField} {...props}>
          {children}
        </Input>
      </div>

      {hasError || statusInternal ? (
        <FormFeedback style={{ display: 'block' }} type="invalid" className="error">
          {internalMeta.error || getIn(statusInternal, internalField.name)}
        </FormFeedback>
      ) : null}
    </FormGroup>
  )
}
