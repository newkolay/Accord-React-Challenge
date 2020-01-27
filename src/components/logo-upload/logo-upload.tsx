import React, { useState } from 'react'
import { DropArea } from '../shared/drop-area'
import { CircularProgress } from './components/circular-progress'
import { uploadFile } from '../../lib/upload-file'
import { getArrayBuffer } from '../../lib/get-array-buffer'
import { validateImage } from '../../lib/validate-image'
import { Header } from './components/header'
import { Logo } from './components/logo'
import { Wrapper, MainContent, Instructions, Alternative } from './styles'
import { ButtonAsText } from './components/button-as-text'
import { FileInput } from './components/file-input'
import { FILE_UPLOAD_STATUS as Status } from '../../config/constants'

const ACCEPTED_FORMATS = ['image/png', 'image/jpeg']
const ACCEPTED_SIZE = 100
const xhr = new XMLHttpRequest()

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

const LogoUpload: FC<{
  value: string
  onChange(buffer: ArrayBuffer): void
}> = ({ value, onChange }) => {
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState<Status>(Status.default)

  const upload = async (files: FileList) => {
    const file = files[0]
    try {
      await validateImage(file, ACCEPTED_FORMATS, ACCEPTED_SIZE)
      try {
        await uploadFile(xhr, file, setStatus, setProgress)
        const buffer = await getArrayBuffer(file)
        onChange(buffer)
      } catch (e) {}
    } catch (e) {
      alert(e)
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
            <Alternative>- or -</Alternative>

            {status == Status.uploading ? (
              <ButtonAsText onClick={cancelRequest} text={'Cancel'} />
            ) : (
              <FileInput
                onChange={handleInput}
                formats={ACCEPTED_FORMATS}
                label={
                  status == Status.default
                    ? 'Select file to upload'
                    : 'Select file to replace'
                }
              />
            )}
          </form>
        </DropArea>
      </MainContent>
    </Wrapper>
  )
}

export { LogoUpload }
