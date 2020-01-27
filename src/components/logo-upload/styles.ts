import styled from 'styled-components'
import { Colors, FontSizes } from '../../lib/style-guide'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${Colors.BG2};
  background-color: ${Colors.PureWhite};
`

const MainContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  line-height: 1;
  align-items: center;
  padding: 19px 19px 20px 19px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
const Instructions = styled.p`
  ${FontSizes.medium};
  color: ${Colors.TX2};
  margin-bottom: 8px;
  margin-top: 9px;
`

const Alternative = styled.p`
  ${FontSizes.medium};
  color: ${Colors.TX3};
  margin-bottom: 4px;
`

export { Wrapper, MainContent, Instructions, Alternative }
