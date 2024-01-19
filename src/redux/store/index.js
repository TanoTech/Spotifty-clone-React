import { createStore, combineReducers } from 'redux';
import favouritesReducer from '../reducers/favoritesReducer';

const rootReducer = combineReducers({
    favourites: favouritesReducer
});

const store = createStore(rootReducer);

export default store;