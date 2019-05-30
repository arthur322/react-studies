import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledLogo = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  color: white;
  display: inline-block;
`

export const StyledSubtitle = styled.span`
  font-size: 13px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
