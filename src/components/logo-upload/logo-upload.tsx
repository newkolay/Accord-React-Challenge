import React, { useState } from 'react'
import { DropArea } from '../shared/drop-area'
import { CircularProgress } from './components/circular-progress'
import { uploadFile } from '../../lib/upload-file'
import { getArrayBuffer } from '../../lib/get-array-buffer'
import { Header } from './components/header'
import { Logo } from './components/logo'
import {
  Status,
  renderInstructions,
  renderAction
} from './helpers/render-from-status'
import { Wrapper, MainContent, Instructions, TX3Text } from './styles'

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

export { LogoUpload }
