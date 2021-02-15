/* eslint no-use-before-define: ["error", "nofunc"] */

// @ts-check

import React, { useState, useEffect } from 'react'
import shortid from 'shortid'
const PropTypes = require('prop-types')

const { ensureObject, prepareAsyncSafeState } = require('../utils')

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onClickAsync: PropTypes.func.isRequired,
  btnStyle: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger']),
  isBlockLevel: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
}

const defaultProps = {
  children: null,
  btnStyle: 'primary',
  isBlockLevel: false,
  disabled: false,
  className: '',
}

export const STATE_NORMAL = 'normal'
export const STATE_SUBMITTING = 'submitting'
export const STATE_DONE = 'done'
export const STATE_FAILED = 'failed'

/**
 * `<ButtonWithProcess/>`
 * is useful when the click-event is handled asynchronically.
 *
 * After being clicked a small animation is shown on the button and any other click is ignored
 * until the invoked click-event resolves or rejects.
 *
 * @param {object} props
 * @param {string|JSX.Element|JSX.Element[]} props.children
 * @param {() => Promise} props.onClickAsync
 * @param {string} [props.status]
 * @param {string} [props.btnStyle]
 * @param {boolean} [props.isBlockLevel]
 * @param {boolean} [props.disabled]
 * @param {string} [props.className]
 */
function SubmitButton(props) {
  const { status, children, disabled, btnStyle, isBlockLevel, className } = props
  const [buttonsState, setButtonState] = useState(STATE_NORMAL)
  const [buttonKey, setButtonKey] = useState()

  useEffect(() => {
    console.log('doing useEffect')
    setButtonState(status)
    setButtonKey(shortid.generate())
  }, [status])

  // const { children, onClickAsync, btnStyle, isBlockLevel, disabled, className } = props

  // const { useAsyncSafeState } = prepareAsyncSafeState()

  // const [currState, setCurrState] = useAsyncSafeState(STATE_NORMAL)

  // const _onClickWithProcess = () => {
  //   if (currState !== STATE_NORMAL) {
  //     return
  //   }
  //   const result = onClickAsync()
  //   if (result instanceof Promise) {
  //     setCurrState(STATE_WAITING)
  //     result
  //       .then(() => {
  //         setCurrState(STATE_DONE)
  //         setTimeout(() => setCurrState(STATE_NORMAL), 2000)
  //       })
  //       .catch(() => {
  //         setCurrState(STATE_FAILED)
  //         setTimeout(() => setCurrState(STATE_NORMAL), 15000)
  //       })
  //   }

  // }

  const _getClassName = optionsBag => {
    const { forceBtnStyle } = ensureObject(optionsBag)
    const classList = [
      'SubmitButton',
      'btn',
      `btn-${forceBtnStyle || btnStyle}`,
      isBlockLevel ? 'btn-block' : null,
      className,
      'SubmitButton-' + buttonsState,
    ]
    return classList.filter(item => item).join(' ')
  }

  switch (buttonsState) {
    default:
    case STATE_NORMAL:
      console.log(buttonKey)
      return (
        <button key={buttonKey} type="submit" className={_getClassName()} disabled={disabled}>
          <span className="inner">{children}</span>
        </button>
      )

    case STATE_SUBMITTING:
      console.log('STATE_SUBMITTING')
      return (
        <button type="button" className={_getClassName()} disabled>
          <div className="inner spinner">
            <div className="bounce1" />
            <div className="bounce2" />
            <div className="bounce3" />
          </div>
        </button>
      )

    case STATE_DONE:
      return (
        <button
          type="button"
          className={_getClassName({ forceBtnStyle: btnStyle === 'success' ? 'secondary' : 'success' })}
          disabled
        >
          <span className="inner">DONE</span>
        </button>
      )

    case STATE_FAILED:
      return (
        <button
          type="button"
          className={_getClassName({ forceBtnStyle: btnStyle === 'danger' ? 'secondary' : 'danger' })}
          disabled
        >
          <span className="inner">FAILED</span>
        </button>
      )
  }
}

SubmitButton.propTypes = propTypes
SubmitButton.defaultProps = defaultProps
export default SubmitButton
