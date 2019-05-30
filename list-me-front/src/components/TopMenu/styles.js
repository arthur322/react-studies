import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import Logo from '../shared/Logo'

export const StyledLogo = styled(Logo)`
  margin-right: 60px;
`

export const Nav = styled.nav`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`

export const MobileNav = styled.nav`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`

export const Menu = styled.nav`
  width: 100%;
  padding: 20px 0;
  background-color: tomato;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const MenuLink = styled(NavLink)`
  margin-right: 20px;
  color: white;
  text-decoration: none !important;
`

// Hover
export const HoverMenu = styled.ul`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  background: gray;
  /* left: 0;
  right: 0; */
  height: 0;
  padding-top: 40px;
  overflow: hidden;
  transition: all 0.5s ease-in;
  ${MenuLink} {
    color: red;
  }
`

export const HoverLink = styled(MenuLink)`
  position: relative;
  margin-right: 28px;
  &:after {
    content: '';
    position: absolute;
    top: 6px;
    right: -16px;
    width: 5px;
    height: 5px;
    border-bottom: 2px solid white;
    border-left: 2px solid white;
    transform: rotate(-45deg) translate(-50%, -50%);
  }
`

export const HoverWrapper = styled.div`
  /* position: relative; */
  display: inline-block;
  &:hover ${HoverMenu} {
    opacity: 1;
    visibility: visible;
    height: 150px;
  }
`
