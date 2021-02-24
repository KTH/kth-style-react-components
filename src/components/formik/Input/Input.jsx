import React from 'react'
import { useField, useFormikContext, getIn } from 'formik'
import { Label, Input, FormFeedback } from 'reactstrap'
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
      <Label htmlFor={props.name}>
        {label}
        <Badges content={badges} />
        {typeof onInfoClick === 'function' && (
          <ClickableDiv className="glyphicon glyphicon-info-sign" onClick={onInfoClick} />
        )}
        <Input invalid={hasError} {...internalField} {...props} />
        {hasError || statusInternal ? (
          <FormFeedback style={{ display: 'block' }} type="invalid" className="error">
            {internalMeta.error || getIn(statusInternal, internalField.name)}
          </FormFeedback>
        ) : null}
      </Label>
    </>
  )
}
