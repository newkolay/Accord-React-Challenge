import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle } from './global-style'
import LogoUpload from './components/LogoUpload'

console.info(`⚛️ ${React.version}`)

const App = () => (
  <>
    <GlobalStyle />
    <LogoUpload />
  </>
)

ReactDOM.render(<App />, document.getElementById('root'))

module.hot && module.hot.accept()
