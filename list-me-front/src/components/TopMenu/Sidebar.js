import React from 'react'

import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledSidebar = styled.div`
  transform: ${props =>
    props.shouldShow ? 'translateX(0)' : 'translateX(100%)'};
  opacity: ${props => (props.shouldShow ? '1' : '0')};
  display: flex;
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  justify-content: center;
  align-items: center;
  background: tomato;
  z-index: 30;
  transition: all 0.3s ease;

  ul {
    list-style: none;
    font-size: 20px;

    li:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`

const MenuLink = styled(NavLink)`
  color: black;
  text-decoration: none !important;
  font-weight: bold;
  display: block;
  text-align: center;
  margin-bottom: 10px;
`

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-weight: bold;
  font-size: 30px;
  position: absolute;
  top: 20%;
  right: 100px;
  width: 30px;
  height: 30px;
`

const Sidebar = props => (
  <StyledSidebar shouldShow={props.show}>
    <CloseButton onClick={props.click}>×</CloseButton>
    <ul>
      <MenuLink to="/">Home</MenuLink>
      <MenuLink to="/noticias">Noticias</MenuLink>
      <MenuLink to="/sobre">Sobre nós</MenuLink>
    </ul>
  </StyledSidebar>
)

export default Sidebar
