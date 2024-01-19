import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import './albumDetails.css';

const AlbumDetail = ({ onSongSelect, onAddToFavourites }) => {
    const { albumId } = useParams();
    const [album, setAlbum] = useState({});
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [favourites, setFavourites] = useState(new Set());

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

    const handleSongClick = (songUrl) => {
        onSongSelect(songUrl);
    };

    const handleAddToFavourites = (song) => {
        onAddToFavourites(song);
        setFavourites(new Set(favourites.add(song.id)));
    };

    if (loading) {
        return <p>Caricamento in corso...</p>;
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
                            <span onClick={() => handleSongClick(song.preview)}>
                                {song.title || 'Titolo sconosciuto'}
                            </span>
                            <Link 
                            onClick={() => handleAddToFavourites(song)}
                            className={favourites.has(song.id) ? 'favourite' : ''} 
                        >
                            ♥️
                        </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    );
};

export default AlbumDetail;