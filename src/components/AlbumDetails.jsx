import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { addToFavourites } from '../redux/actions/index';
import './albumDetails.css';

const AlbumDetails = ({ onSongSelect, onSongTitleChange, onSongImageChange }) => {
    const { albumId } = useParams();
    const [album, setAlbum] = useState({});
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const favourites = useSelector(state => state.favourites);


    const isFavourite = (songId) => {
        return favourites.some(fav => fav.id === songId);
    };

    useEffect(() => {
        const fetchAlbumData = async () => {
            try {
                const response = await fetch(
                    `https://striveschool-api.herokuapp.com/api/deezer/album/${albumId}`
                );
                if (!response.ok) {
                    throw new Error('Errore di rete');
                }
                const data = await response.json();
                setAlbum(data);
                setSongs(data.tracks?.data || []);
                setLoading(false);
            } catch (err) {
                console.error('Errore nella richiesta API:', err);
                setLoading(false);
            }
        };

        fetchAlbumData();
    }, [albumId]);

    const handleSongClick = (song) => {
        onSongSelect(song.preview);
        onSongTitleChange(song.title);
        onSongImageChange(song.album.cover_medium);
    };

    const handleAddToFavourites = (song) => {
        dispatch(addToFavourites(song));
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <Container className="albumDetails">
            <img src={album.cover_medium} alt={album.title} />
            <div>
                <h2>{album.title || 'Titolo sconosciuto'}</h2>
                <p>{album.artist?.name || 'Artista sconosciuto'}</p>
                <ul>
                    {songs.map((song) => (
                        <li key={song.id}>
                            <span onClick={() => handleSongClick(song)}>
                                {song.title || 'Titolo sconosciuto'}
                            </span>
                            <button
                                onClick={() => handleAddToFavourites(song)}
                                className={isFavourite(song.id) ? 'heart-icon-favourite' : 'heart-icon-not-favourite'} 
                            >
                                ♡
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </Container> 
    );
};

export default AlbumDetails;