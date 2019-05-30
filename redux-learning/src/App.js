import React from 'react'
import GlobalStyle from './styles/globalStyle'
import Routes from './routes'

import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GlobalStyle />
        <Routes />
      </div>
    </Provider>
  )
}

export default App
