import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from '../actions/index';

const initialState = [];

const favouritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITES:

            if (state.find(song => song.id === action.song.id)) {
                return state;
            }
            return [...state, action.song];
        case REMOVE_FROM_FAVOURITES:
            return state.filter(song => song.id !== action.songId);
        default:
            return state;
    }
};

export default favouritesReducer;
