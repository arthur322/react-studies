export default function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload.text]
    case 'REMOVE_TODO':
      console.log(state, action.payload.index)
      return state.filter((todo, i) => i !== action.payload.index)
    default:
      return state
  }
}
