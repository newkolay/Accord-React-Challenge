import React, { useState } from 'react'
import styled from 'styled-components'
import { Colors, FontSizes } from '../../lib/style-guide'
import { DropArea } from '../shared/drop-area'
import { CircularProgress } from './circular-progress'
import uploadFile from '../../lib/upload-file'

const LogoUpload: FC<{}> = ({ className }) => {
  const [progress, setProgress] = useState(0)
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const file = e.target.files[0]
      uploadFile(file, setProgress)
    }
  }

  const handleDrop = (files: FileList) => {
    const file = files[0]
    uploadFile(file, setProgress)
  }

  return (
    <div className={className}>
      <div className="header">
        <h1 className="title">Company Logo</h1>
        <p className="subTitle">
          Logo should be square, 100px size and in png, jpeg file format.
        </p>
      </div>
      <div className="mainContent">
        <DropArea onDrop={handleDrop}>
          <form>
            <CircularProgress progress={progress} />
            <p className="status">Drag & drop here</p>
            <p className="or">- or -</p>
            <input
              className="fileInput"
              type="file"
              id="uploadLogo"
              accept="image/jpeg, image/png"
              onChange={handleInput}
            ></input>
            <label className="actionButton" htmlFor="uploadLogo">
              Select file to upload
            </label>
          </form>
        </DropArea>
      </div>
    </div>
  )
}

const StyledLogoUpload = styled(LogoUpload)`
  width: 400px;
  height: 590px;
  align-self: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border: 1px solid ${Colors.BG2};
  background-color: ${Colors.PureWhite};
  .header {
    border-bottom: 1px solid ${Colors.BG2};
    padding: 21px 24px 18px 29px;
  }
  .title {
    ${FontSizes.title};
    color: ${Colors.TX1};
  }
  .subTitle {
    ${FontSizes.medium};
    color: ${Colors.TX3};
  }
  .mainContent {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    line-height: 1;
    align-items: center;
    padding: 19px 19px 20px 19px;
  }
  .status {
    ${FontSizes.medium};
    color: ${Colors.TX2};
    margin-bottom: 8px;
    margin-top: 9px;
  }
  .or {
    ${FontSizes.medium};
    color: ${Colors.TX3};
    margin-bottom: 4px;
  }
  .fileInput {
    display: none;
  }
  .actionButton {
    ${FontSizes.medium};
    color: ${Colors.AccordBlueSecondary};
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    line-height: 1;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export { StyledLogoUpload as LogoUpload }
