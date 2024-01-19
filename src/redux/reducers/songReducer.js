import { SET_CURRENT_SONG } from '../actions/index';

const initialState = {
    songUrl: null,
    songTitle: '',
    songImage: ''
};

const songReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_SONG:
            return {
                ...state,
                songUrl: action.payload.songUrl,
                songTitle: action.payload.songTitle,
                songImage: action.payload.songImage
            };
        default:
            return state;
    }
};

export default songReducer;