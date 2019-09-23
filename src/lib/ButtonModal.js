import React from 'react'
import { Button,
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter } from 'reactstrap'
import classNames from 'classnames'

class ButtonModal extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  _goBackToStartPage (returnToUrl) {
    window.location = returnToUrl
  }

  handleConfirm (event) {
    event.preventDefault()
    if (this.props.type === 'cancel') this._goBackToStartPage(this.props.returnToUrl)
    else {
    // return control to parent element function
      this.props.handleParentConfirm()
    // close modal
      this.toggle()
    }
  }

  render () {
    //* *** Properties *** *//
        /* type: info-icon, submit, cancel, remove
         btnLabel: t.e., 'Publish and quit', if it is info modal then no btnLabel need
         modalLabels = {
          header: 'To be aware of before cancelling!',
          body: 'Unsaved changes will be lost if you cancel the publishing of course information (image and text) <br/>  <br/> Do you want to cancel?',
          btnCancel: 'No, go back',
          btnConfirm: 'Yes, cancel',
        }
      */
    //* *** example 1 SUBMIT*** *//
        /*
        <ButtonModal id='publish' btnLabel={introLabel.button.publish} type='submit' handleParentConfirm={this.handlePublish}
            modalLabels={introLabel.info_publish}
            disabled={this.state.hasDoneSubmit}
            />
        */
    //* *** example 2 INFO MODAL*** *//
        /*
              <ButtonModal id='infoImage2' type='info-icon'
                modalLabels={introLabel.info_image} />
            </span>
        */
    //* *** example 3 CANCEL AND RETURN TO START PAGE *** *//
        /*
              <ButtonModal id='cancelStep3' btnLabel={introLabel.button.cancel} type='cancel'
                  returnToUrl={`${ADMIN_OM_COURSE}${this.courseCode}?serv=kinfo&event=cancel`}
                  modalLabels={introLabel.info_cancel} course={this.courseCode}
                  disabled={this.state.hasDoneSubmit}
                  />
          />
        */

    const { type, id, modalLabels, className } = this.props
    const { header, body, btnCancel, btnConfirm } = modalLabels
    const btnStyle = classNames(
      {'btn-info-modal': type === 'info-icon'},
      {'secondary': type === 'cancel'},
      {'success': type === 'submit'},
      {'danger': type === 'remove'}
    )
    return <span className={className}>
      <Button type='button' color={btnStyle} className={btnStyle}
        disabled={this.props.disabled}
        onClick={this.toggle}>
          {this.props.btnLabel}
      </Button>
      <Modal isOpen={this.state.isOpen} toggle={this.toggle} id={id}>
        <ModalHeader toggle={this.toggle}>{header}</ModalHeader>
        <ModalBody>
            {this.props.children}
            {body ? <p dangerouslySetInnerHTML={{__html: body}}></p> : ''}
        </ModalBody>
        <ModalFooter>
          <Button color='secondary' onClick={this.toggle}>{btnCancel}</Button>
            {
              type === 'submit' || type === 'remove' || type === 'cancel'
              ? <Button color='secondary' type={type} onClick={this.handleConfirm}>{btnConfirm}</Button>
              : ''
            }
        </ModalFooter>
      </Modal>
    </span>
  }
}

export default ButtonModal
