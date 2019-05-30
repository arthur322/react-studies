import React from 'react'
import './App.css'
import Routes from './routes'
import GlobalStyle from './styles/global'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

const App = () => (
  <>
    <GlobalStyle />
    <Routes />
  </>
)

export default App
