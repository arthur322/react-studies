import { combineReducers } from 'redux';
import exampleReducer from './example';

const rootReducer = combineReducers({
  example: exampleReducer,
});

export default rootReducer;
