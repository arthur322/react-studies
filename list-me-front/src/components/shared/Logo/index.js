import React from 'react'
import PropTypes from 'prop-types'

import { StyledLogo, StyledSubtitle, Wrapper } from './styles'

const Logo = props => (
  <Wrapper className={props.className}>
    <StyledLogo to='/'>List-me</StyledLogo>
    <StyledSubtitle>Relacionando com as pessoas</StyledSubtitle>
  </Wrapper>
)

Logo.propTypes = {
  className: PropTypes.string.isRequired
}

export default Logo
