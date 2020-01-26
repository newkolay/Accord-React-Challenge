import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { GlobalStyle } from './global-style'
import { LogoUpload } from './components/logo-upload'
import { IMAGE_URL } from './config/constants'

console.info(`⚛️ ${React.version}`)

const value = IMAGE_URL

const onChange = (buffer: ArrayBuffer) => {
  console.log(buffer)
}

const Container = styled.div`
  width: 400px;
  height: 590px;
  align-self: center;
  margin: 0 auto;
`

const App = () => (
  <>
    <GlobalStyle />
    <Container>
      <LogoUpload value={value} onChange={onChange} />
    </Container>
  </>
)

ReactDOM.render(<App />, document.getElementById('root'))

module.hot && module.hot.accept()
