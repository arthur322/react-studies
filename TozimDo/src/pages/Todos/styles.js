import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  height: 100%;
  background: 'tomato';
`;

export const TodoWrapper = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const TodoItem = styled.Text`
  font-size: 22px;
  ${({ done }) => (done ? 'text-decoration: line-through;' : '')}
`;
