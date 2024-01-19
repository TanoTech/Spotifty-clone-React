import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { setCurrentSong, addToFavourites } from '../redux/actions/index';
import './albumDetails.css';

const AlbumDetails = () => {
    const { albumId } = useParams();
    const [album, setAlbum] = useState({});
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const favourites = useSelector(state => state.favourites);

    useEffect(() => {
        const fetchAlbumData = async () => {
            try {
                const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${albumId}`);
                if (!response.ok) {
                    throw new Error('Errore nel fetch');
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
        dispatch(setCurrentSong({
            songUrl: song.preview,
            songTitle: song.title,
            songImage: song.album.cover_medium
        }));
    };

    const handleAddToFavourites = (song) => {
        dispatch(addToFavourites(song));
    };

    const isFavourite = (songId) => {
        return favourites.some(fav => fav.id === songId);
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