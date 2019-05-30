import React from 'react'

import { StyledInput } from './styled'

const Input = ({ placeholder, onSave }) => {
  const handleChange = ({ key, target }) => {
    if (key === 'Enter' && target.value.length !== 0) {
      onSave(target.value)
      target.value = ''
    }
  }

  return <StyledInput placeholder={placeholder} onKeyDown={handleChange} />
}
export default Input
