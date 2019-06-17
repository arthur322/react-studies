import { combineReducers } from 'redux';

import usersReducer from './users';

const reducers = combineReducers({
  users: usersReducer,
});

export default reducers;
