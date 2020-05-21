import { createStore, combineReducers, Store } from 'redux';
import animesReducers from './animesList/reducer';
import { AnimeState } from './animesList/types';

const reducers = combineReducers({
  animes: animesReducers,
});

interface ApplicationState {
  animes: AnimeState;
}

const store: Store<ApplicationState> = createStore(reducers);

export default store;
