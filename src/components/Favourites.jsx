import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavourites } from '../redux/actions/index';
import './favourites.css';

const Favourites = () => {
    const favourites = useSelector(state => state.favourites);
    const dispatch = useDispatch();

    const handleRemoveFromFavourites = (songId) => {
        dispatch(removeFromFavourites(songId));
    };

    return (
        <main className='favoriti'>
            <h2>Your Library</h2>
            <ul>
                {favourites.map(song => (
                    <li key={song.id}>
                        {song.title}
                        <button onClick={() => handleRemoveFromFavourites(song.id)}>X</button>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Favourites;
