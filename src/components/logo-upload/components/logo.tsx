import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../../lib/style-guide'

const Logo: FC<{ image: string }> = ({ className, image }) => {
  return (
    <div className={className}>
      <img src={image} alt="logo" />
    </div>
  )
}

const StyledLogo = styled(Logo)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid ${Colors.Border};
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
  }
`

export { StyledLogo as Logo }
