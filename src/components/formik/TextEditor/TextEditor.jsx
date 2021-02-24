/* eslint no-use-before-define: ["error", "nofunc"] */

// @ts-check
import React, { useState } from 'react'
import { useField } from 'formik'

// @ts-ignore
import CKEditor from 'ckeditor4-react'
import Modal from '../../Modal/Modal'
// import BrowseModule from './BrowseModule'
// import i18n from '../../../../i18n'

const PropTypes = require('prop-types')

const { Badges } = require('../../helpers')

const propTypes = {
  id: PropTypes.string,
  editorUrl: PropTypes.string,
  label: PropTypes.string,
  badges: PropTypes.string,
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  currValue: PropTypes.string,
  setCurrValue: PropTypes.func
}

const defaultProps = {
  id: '',
  label: '',
  editorUrl: '',
  badges: '',
  className: '',
  currValue: '',
  setCurrValue: null
}

// /**
//  * `<TextEditor />`
//  *
//  * @param {object} props
//  * @param {string} [props.id]
//  * @param {string} [props.editorUrl]
//  * @param {string} [props.label]
//  * @param {string} [props.badges]
//  * @param {string} [props.className]
//  * @param {object} [props.dataBag]
//  * @param {string} [props.dataPath]
//  * @param {string} [props.currValue]
//  * @param {string} [props.name]
//  * @param {(newValue: string) => void} [props.setCurrValue]
//  */
export default function TextEditor(props) {
  const { id, label, className, currValue, setCurrValue, badges, name, editorUrl } = props

  const [modalVisibility, setModalVisibility] = useState(false)
  const [fileBrowseContent, setFileBrowseContent] = useState(null)
  const [editorInstance, setEditorInstance] = useState(null)

  let internalField = {}
  let internalHelpers

  if (name) {
    const [field, meta, helpers] = useField(name)
    internalField = { ...field }
    internalHelpers = helpers
  }

  CKEditor.editorUrl = editorUrl

  const SERVICE_BASEPATH = window.location.href

  if (badges && !label) {
    // eslint-disable-next-line no-console
    console.warn("<TextEditor/> can't show badges without label")
  }
  if (label && !id) {
    // eslint-disable-next-line no-console
    console.error("<TextEditor/> failed - can't show label without ID")
    return null
  }

  const gotDirectData = typeof setCurrValue === 'function'
  const isFormik = name !== undefined

  let value = null
  let onChange = null

  if (gotDirectData) {
    value = currValue
    onChange = (event) => setCurrValue(event.editor.getData())
  } else if (isFormik) {
    value = internalField.value
    onChange = (event) => internalHelpers.setValue(event.editor.getData())
  }

  const labelElement =
    id && label ? (
      <label className="form-control-label" htmlFor={id}>
        {label}
        <Badges content={badges} />
      </label>
    ) : null

  function getEditorConfig() {
    return {
      // embed_provider: SERVICE_BASEPATH + '/_embed?url={url}&callback={callback}',
      // language: 'sv',
      // format_tags: 'p;h3;pre',
      // removeDialogTabs: 'link:advanced;link:upload;link:target;image:advanced;',
      mathJaxLib: '//cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML',
      extraPlugins: 'kth_upload_vanilla_js',
      image2_alignClasses: ['pull-left', 'text-center', 'pull-right'],
      kth_upload: {
        imageClasses: 'kth-content-img'
      },
      extraAllowedContent: {
        img: {
          attributes: '!src,alt',
          classes: 'pull-left,text-center,pull-right,img-responsive, kth-content-img'
        },
        div: {
          classes: 'text-center,table-responsive'
        },
        p: {
          classes: 'text-center'
        },
        table: {
          classes: 'table'
        }
      },
      toolbar: [
        {
          name: 'format',
          items: ['RemoveFormat', 'Format']
        },
        {
          name: 'document',
          items: ['Source']
        },
        {
          name: 'editing',
          items: ['Find']
        },
        {
          name: 'insert',
          items: ['Table']
        },
        {
          name: 'kth',
          items: ['kth_upload_file', 'kth_upload_image', 'kth_upload_browse', 'Embed']
        },
        '/',
        {
          name: 'clipboard',
          items: ['Undo', 'Redo']
        },
        {
          name: 'basicstyles',
          items: ['Bold', 'Italic', 'Strike', 'BulletedList', 'NumberedList', 'Outdent', 'Indent']
        },
        {
          name: 'links',
          items: ['Link', 'Unlink', 'Anchor', 'Mathjax', 'SpecialChar']
        }
      ]
    }
  }

  const execBrowse = async () => {
    try {
      await fetch(SERVICE_BASEPATH + '_browse')
        .then((resp) => {
          resp.json()
        })
        .then((data) => {
          setFileBrowseContent(data)
        })
        .catch(() => {
          throw new Error('Something went wrong')
        })
    } catch (error) {
      console.log('ERROR: ')
    }
    setModalVisibility(true)
  }

  function insertImage(image) {
    const { editor } = editorInstance
    const pluginConfig = editor.config.kth_upload

    editor.insertHtml(
      '<img src="' +
        image.url +
        '" alt="" class="' +
        ((pluginConfig && pluginConfig.imageClasses) || '') +
        '">'
    )
  }

  function insertLink(link) {
    const { editor } = editorInstance

    const text =
      editor.getSelectedHtml(true) || link.url.substr(link.url.lastIndexOf('/') + 1) || link.url
    editor.insertHtml('<a href="' + link.url + '">' + text + '</a>')
  }

  return (
    <div className={`text-editor form-group ${className}`.trim()}>
      {labelElement}
      <CKEditor
        name="test"
        data={value}
        onChange={onChange}
        onInstanceReady={(CKEDITOR) => {
          setEditorInstance(CKEDITOR)
          CKEDITOR.editor.addCommand('kth_upload_browse', {
            exec: execBrowse
          })
        }}
        config={getEditorConfig()}
      />
      <Modal show={modalVisibility} onHide={() => setModalVisibility(false)} title="File Browser">
        To be implemented...
        {/* <BrowseModule
          fileBrowseContent={fileBrowseContent}
          fetchFiles={execBrowse}
          insertImage={insertImage}
          insertLink={insertLink}
        /> */}
      </Modal>
    </div>
  )
}

TextEditor.propTypes = propTypes
TextEditor.defaultProps = defaultProps
