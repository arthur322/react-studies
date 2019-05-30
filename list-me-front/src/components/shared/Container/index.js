import React from 'react'
import PropTypes from 'prop-types'

import { StyledContainer } from './styles'

const Container = props => (
  <StyledContainer {...props}>{props.children}</StyledContainer>
)

Container.propTypes = {
  children: PropTypes.node
}

export default Container
