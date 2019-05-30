import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Menu, MenuLink, StyledLogo, Nav, MobileNav } from './styles'

import Sidebar from './Sidebar'
import SidebarToggle from './SidebarToggle'
import Container from '../shared/Container'

const TopMenu = () => {
  const [mobileShow, setMobile] = useState(false)

  return (
    <Menu>
      <Container flex flexRow align='center' justify='space-between'>
        <StyledLogo />
        <Nav>
          <MenuLink to='/'>Home</MenuLink>
          <MenuLink to='/noticias'>Noticias</MenuLink>
          <MenuLink to='/sobre'>Sobre nós</MenuLink>
          <FontAwesomeIcon icon='search' color='white' />
        </Nav>
        <MobileNav>
          <SidebarToggle clicked={() => setMobile(true)} />
          <Sidebar show={mobileShow} click={() => setMobile(false)} />
        </MobileNav>
      </Container>
    </Menu>
  )
}

export default TopMenu
