import React, { Component } from 'react'
import { Button } from 'reactstrap'

class FileInput extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.clickFileInput = this.clickFileInput.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  clickFileInput (event) {
    if (event.target !== event.currentTarget) event.currentTarget.click()
  }

  handleChange (event) {
    this.props.onChange(event)
  }

  render () {
    /* accept = 'image/jpg,image/jpeg,image/png'
      <FileInput id='pic-upload' onChange={this.parentFunctionDisplayValidatedPic}
          accept='image/jpg,image/jpeg,image/png'
          btnLabel='Välj bild'>
          {this.isApiPicAvailable &&
                 <Button color='secondary' onClick={this.resetToPrevApiPicture}>Återställ till sparad bild</Button>
            }
        </FileInput>
    */
    const { accept, id, btnLabel } = this.props

    return (
      <span className='btn-upload-file'>
        {/* label-Button is to make label compatible with keyborad/mouse and behave as button  */}
        <label htmlFor={id} onClick={this.clickFileInput}>
          <Button color='secondary' block>
            <h4>{btnLabel}</h4>
          </Button>
        </label>
        {/* tabIndex='-1' skip if user use tab because label takes all action */}
        <input
          type='file'
          id={id}
          name={id}
          tabIndex='-1'
          accept={accept}
          onChange={this.handleChange}
        />

        {this.props.children}
      </span>
    )
  }
}

export default FileInput
