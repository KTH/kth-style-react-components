/* eslint no-use-before-define: ["error", "nofunc"] */

// @ts-check

import React, { useState } from 'react'

import { Formik, Form, yupToFormErrors } from 'formik'

import SubmitButton, {
  STATE_SUBMITTING,
  STATE_NORMAL,
  STATE_DONE,
  STATE_FAILED
} from './SubmitButton'
import { Alert } from '../'

/**
 * `<FormWithActionButtons/>`
 *
 * @param {object} props
 */
function FormWithActionButtons({
  validationSchema,
  initialValues,
  onSubmit,
  children,
  setExternalAlertMessage,
  i18n,
  lang
}) {
  let output = null

  const [submitButtonState, setSubmitButtonState] = useState(STATE_NORMAL)
  const [alertMessage, setAlertMessage] = useState({})

  const setTemporaryStatus = (status) => {
    setSubmitButtonState(status)
    setTimeout(() => setSubmitButtonState(STATE_NORMAL), 5000)
  }

  const internalSubmit = async (value, { setStatus }) => {
    try {
      setSubmitButtonState(STATE_SUBMITTING)
      setStatus(undefined)
      const result = await onSubmit(value)

      if (!result.ok) {
        const errorJson = await result.json()
        const formikErrors = yupToFormErrors(errorJson.error)
        setStatus(formikErrors)
        throw new Error(errorJson)
      }

      setTemporaryStatus(STATE_DONE)
      if (setExternalAlertMessage) {
        setExternalAlertMessage({
          message: i18n.message('form_alert_message__successful_save', lang),
          type: 'success'
        })
        setTimeout(() => setExternalAlertMessage(false), 5000)
      } else {
        setAlertMessage({
          message: i18n.message('form_alert_message__successful_save', lang),
          type: 'success'
        })
        setTimeout(() => setAlertMessage(false), 5000)
      }
    } catch (error) {
      setTemporaryStatus(STATE_FAILED)
      if (setExternalAlertMessage) {
        setExternalAlertMessage({
          message: i18n.message('form_alert_message__form-errors', lang),
          type: 'danger'
        })
      } else {
        setAlertMessage({
          message: i18n.message('form_alert_message__form-errors', lang),
          type: 'danger'
        })
      }

      // if (error.errors) {
      console.log(JSON.stringify(error))
      console.log(JSON.stringify(error.errors))
      // }
    }
  }

  output = (
    <Formik
      enableReinitialize
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={internalSubmit}
    >
      {(formik) => {
        const actionButtonsDisabled = !formik.dirty
        const submitDisabled = actionButtonsDisabled || !formik.isValid
        const { values, errors, handleReset } = formik

        return (
          <Form>
            {!setExternalAlertMessage && <Alert alertMessage={alertMessage} />}
            {children}
            <ActionButtons
              disabled={actionButtonsDisabled}
              submitDisabled={submitDisabled}
              status={submitButtonState}
              onDiscard={handleReset}
            />
          </Form>
        )
      }}
    </Formik>
  )
  return <>{output}</>
}

const ActionButtons = ({ disabled, submitDisabled, onDiscard, status }) => {
  return (
    <div className={`Subjects-button-row disabled-${disabled}`}>
      <button
        key="discard"
        type="button"
        className="btn btn-secondary"
        disabled={disabled}
        onClick={onDiscard}
      >
        Kasta ändringarna
      </button>
      <SubmitButton status={status} disabled={submitDisabled}>
        Spara ändringarna
      </SubmitButton>
    </div>
  )
}

export default FormWithActionButtons
