import React from 'react'
import styled from 'styled-components'
import { FontSizes, Colors } from '../../../lib/style-guide'

const ButtonAsText: FC<{ text: string; onClick(): void }> = ({
  className,
  text,
  onClick
}) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  )
}

const StyledButton = styled(ButtonAsText)`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  ${FontSizes.medium};
  color: ${Colors.AccordBlueSecondary};
  line-height: 1;
`

export { StyledButton as ButtonAsText }
