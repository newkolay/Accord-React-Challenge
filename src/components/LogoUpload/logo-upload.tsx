import React from 'react'
import styled from 'styled-components'
import { Colors, FontSizes } from '../../lib/style-guide'
import logoPlaceholder from '../../assets/images/logo-placeholder.svg'
import { DropArea } from '../shared/drop-area'

const LogoUpload: FC<{
  uri: string
  onChange(Array: string): void
}> = ({ uri, onChange, className }) => {
  const inputChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget)
  }

  const handleDrop = (file: FileList) => {
    console.log(file)
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
            <div className="logoContainer">
              <img src={logoPlaceholder} />
            </div>
            <p className="status">Drag & drop here</p>
            <p className="or">- or -</p>
            <input
              className="fileInput"
              type="file"
              id="uploadLogo"
              accept="image/jpeg, image/png"
              onChange={inputChange}
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
  .logoContainer {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid ${Colors.Border};
    background-color: ${Colors.PureWhite};
    margin-bottom: 9px;
  }
  .status {
    ${FontSizes.medium};
    color: ${Colors.TX2};
    margin-bottom: 8px;
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
