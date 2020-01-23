import React from 'react'
import styled from 'styled-components'
import { Colors, FontSizes } from '../../lib/style-guide'

const LogoUpload: FC<{
  uri: string
  onChange(Array: string): void
}> = ({ uri, onChange, className }) => {
  return (
    <div className={className}>
      <div className={'header'}>
        <h1 className={'title'}>Company Logo</h1>
        <p className={'subTitle'}>
          Logo should be square, 100px size and in png, jpeg file format.
        </p>
      </div>
    </div>
  )
}

const StyledLogoUpload = styled(LogoUpload)`
  width: 400px;
  height: 590px;
  align-self: center;
  margin: 0 auto;
  border: 1px solid ${Colors.BG2};
  background-color: ${Colors.PureWhite};
  .header {
    border-bottom: 1px solid ${Colors.BG2};
    padding: 21px 24px 18px 29px;
  }
  .title {
    ${FontSizes.title}
    color: ${Colors.TX1};
  }
  .subTitle {
    ${FontSizes.medium}
    color: ${Colors.TX3};
  }
`

export { StyledLogoUpload as LogoUpload }
