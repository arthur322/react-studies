import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../../store/actions/todos'

import { StyledList } from './styled'
import Item from './Item'
import Input from './Input'

const List = ({ todos, addTodo }) => {
  return (
    <StyledList>
      {todos.map((todo, i) => (
        <Item key={i} index={i}>
          {todo}
        </Item>
      ))}
      <Item noTrash>
        <Input placeholder="Novo item" onSave={addTodo} />
      </Item>
    </StyledList>
  )
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(TodoActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
