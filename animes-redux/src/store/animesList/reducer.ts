import { Reducer } from 'redux';
import { AnimeState } from './types';

const INITAL_STATE: AnimeState = {
  animes: [],
  loading: false,
  error: null,
};

const reducer: Reducer<AnimeState> = (state = INITAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
