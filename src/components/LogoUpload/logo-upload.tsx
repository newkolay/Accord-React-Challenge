import React from 'react'
import styled from 'styled-components'
import { Colors, FontSizes } from '../../lib/style-guide'
import logoPlaceholder from '../../assets/images/logo-placeholder.svg'

const LogoUpload: FC<{
  uri: string
  onChange(Array: string): void
}> = ({ uri, onChange, className }) => {
  return (
    <div className={className}>
      <div className="header">
        <h1 className="title">Company Logo</h1>
        <p className="subTitle">
          Logo should be square, 100px size and in png, jpeg file format.
        </p>
      </div>
      <div className="mainContent">
        <div className="logoContainer">
          <img src={logoPlaceholder} />
        </div>
        <p className="status">Drag & drop here</p>
        <p className="or">- or -</p>
        <button className="actionButton">Select file to upload</button>
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
  }
  .logoContainer {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid ${Colors.Border};
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
  .actionButton {
    ${FontSizes.medium};
    color: ${Colors.TextButton};
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
`

export { StyledLogoUpload as LogoUpload }
