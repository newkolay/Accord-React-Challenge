import React from 'react'
import styled from 'styled-components'
import { Colors, FontSizes } from '../../../lib/style-guide'

const Header: FC<{}> = ({ className }) => {
  return (
    <div className={className}>
      <h1 className="title">Company Logo</h1>
      <p className="sub-title">
        Logo should be square, 100px size and in png, jpeg file format.
      </p>
    </div>
  )
}

const StyledHeader = styled(Header)`
  border-bottom: 1px solid ${Colors.BG2};
  padding: 21px 24px 18px 29px;
  line-height: 1;
  .title {
    ${FontSizes.title};
    color: ${Colors.TX1};
  }
  .sub-title {
    ${FontSizes.medium};
    color: ${Colors.TX3};
    min-height: 20px;
    display: flex;
    align-items: center;
  }
`

export { StyledHeader as Header }
