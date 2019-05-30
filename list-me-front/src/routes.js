import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.js'

import Home from './pages/Home'
import Noticias from './pages/Noticias'
import Sobre from './pages/Sobre'

const Routes = () => (
  <Router>
    <ScrollToTop>
      <Route path="/" exact component={Home} />
      <Route path="/noticias" component={Noticias} />
      <Route path="/sobre" component={Sobre} />
    </ScrollToTop>
  </Router>
)

export default Routes
