import React from 'react'
import styled from 'styled-components'

const StyledToggle = styled.button`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;

  div {
    width: 30px;
    height: 5px;
    margin-top: 5px;
    background: white;
  }
`

const SidebarToggle = props => (
  <StyledToggle onClick={props.clicked}>
    <div />
    <div />
    <div />
  </StyledToggle>
)

export default SidebarToggle
