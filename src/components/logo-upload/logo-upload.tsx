import React, { useState, createContext } from 'react'
import { DropArea } from '../shared/drop-area'
import { CircularProgress } from './components/circular-progress'
import { uploadFile } from '../../lib/upload-file'
import { getArrayBuffer } from '../../lib/get-array-buffer'
import { Header } from './components/header'
import { Logo } from './components/logo'
import { FileInput } from './components/file-input'
import { ButtonAsText } from '../shared/button-as-text'
import { Wrapper, MainContent, Instructions, TX3Text } from './styles'

enum Status {
  default = 'Default',
  uploading = 'Uploading',
  success = 'Success'
}

const xhr = new XMLHttpRequest()

const LogoUpload: FC<{
  value: string
  onChange(buffer: ArrayBuffer): void
}> = ({ value, onChange }) => {
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState<Status>(Status.default)

  const upload = async (files: FileList) => {
    const file = files[0]
    setStatus(Status.uploading)
    try {
      await uploadFile(xhr, file, setProgress)
      const buffer = await getArrayBuffer(file)
      onChange(buffer)
      setStatus(Status.success)
      setProgress(0)
    } catch (e) {
      setStatus(Status.default)
      setProgress(0)
    }
  }

  const cancelRequest = () => {
    xhr.abort()
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      upload(e.target.files)
      //clear input value to allow upload the same file
      e.target.value = ''
    }
  }

  const handleDrop = (files: FileList) => {
    upload(files)
  }

  return (
    <Wrapper>
      <Header />
      <MainContent>
        <DropArea onDrop={handleDrop}>
          <form>
            {status == Status.success ? (
              <Logo image={value} />
            ) : (
              <CircularProgress progress={progress} />
            )}

            <Instructions>{renderInstructions(status)}</Instructions>
            <TX3Text>- or -</TX3Text>

            {renderAction({ status, handleInput, cancelRequest })}
          </form>
        </DropArea>
      </MainContent>
    </Wrapper>
  )
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

export { LogoUpload }
