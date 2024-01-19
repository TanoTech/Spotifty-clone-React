export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';

export const addToFavourites = song => ({ type: ADD_TO_FAVOURITES, song });
export const removeFromFavourites = songId => ({ type: REMOVE_FROM_FAVOURITES, songId });

export const SET_CURRENT_SONG = 'SET_CURRENT_SONG';

export const setCurrentSong = (songData) => ({
    type: SET_CURRENT_SONG,
    payload: songData
});