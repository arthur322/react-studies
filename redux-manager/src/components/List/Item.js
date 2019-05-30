import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../../store/actions/todos'

import { StyledItem } from './styled'
import Input from './Input'

const Item = ({ children, noTrash, removeTodo, index }) => {
  const [editing, setEditing] = useState(false)
  return (
    <StyledItem>
      {!editing ? children : <Input value={children} />}
      {noTrash ? '' : <i className="fas fa-trash" onClick={() => removeTodo(index)} />}
    </StyledItem>
  )
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(TodoActions, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Item)
