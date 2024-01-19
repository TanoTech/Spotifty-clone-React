import { createStore, combineReducers } from 'redux';
import favouritesReducer from '../reducers/favoritesReducer';
import songReducer from '../reducers/songReducer';

const rootReducer = combineReducers({
    favourites: favouritesReducer,
    currentSong: songReducer
});

const store = createStore(rootReducer);

export default store;