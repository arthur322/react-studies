import React from 'react'
import PropTypes from 'prop-types'
import TopMenu from '../../TopMenu'
import Footer from '../../Footer'

import { MainWrapper } from './styled'

const MainTemplate = props => (
  <MainWrapper>
    <TopMenu />
    {props.children}
    <Footer />
  </MainWrapper>
)

MainTemplate.propTypes = {
  children: PropTypes.node
}

export default MainTemplate
