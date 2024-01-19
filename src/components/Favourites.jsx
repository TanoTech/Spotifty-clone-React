import React from 'react';
import './favourites.css'

const Favourites = ({ favourites, onRemoveFromFavourites }) => {

    return (
        <main className='favoriti'>
            <h2>Your Library</h2>
            <ul>
                {favourites.map(song => (
                    <li key={song.id}>
                        {song.title}
                        <button onClick={() => onRemoveFromFavourites(song.id)}>X</button>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Favourites;