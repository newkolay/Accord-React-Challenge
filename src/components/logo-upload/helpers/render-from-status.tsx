import React from 'react'
import { FileInput } from '../components/file-input'
import { ButtonAsText } from '../../shared/button-as-text'

enum Status {
  default = 'Default',
  uploading = 'Uploading',
  success = 'Success'
}

const renderInstructions = (status: Status) => {
  switch (status) {
    case Status.default:
      return 'Drag & drop here'
    case Status.uploading:
      return 'Uploading'
    case Status.success:
      return 'Drag & drop here to replace'
  }
}

interface RenderAction {
  status: Status
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  cancelRequest: () => void
}

const renderAction = ({ status, handleInput, cancelRequest }: RenderAction) => {
  switch (status) {
    case Status.default:
      return (
        <FileInput onChange={handleInput} label={'Select file to upload'} />
      )
    case Status.uploading:
      return <ButtonAsText onClick={cancelRequest} text={'Cancel'} />
    case Status.success:
      return (
        <FileInput onChange={handleInput} label={'Select file to replace'} />
      )
  }
}

export { Status, renderInstructions, renderAction }
