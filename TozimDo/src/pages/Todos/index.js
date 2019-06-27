import React from 'react';
import { useSelector } from 'react-redux';

import { Container, TodoWrapper, TodoItem } from './styles';

const Todos = () => {
  const todos = useSelector(state => state.todos);

  return (
    <Container>
      {todos.map(todo => (
        <TodoWrapper key={todo.id}>
          <TodoItem>{todo.text}</TodoItem>
        </TodoWrapper>
      ))}
    </Container>
  );
};

export default Todos;
