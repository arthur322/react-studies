export const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: { text }
})

export const removeTodo = (index) => ({
  type: 'REMOVE_TODO',
  payload: { index }
})
