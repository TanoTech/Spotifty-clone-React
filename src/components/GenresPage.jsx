import React, { useState, useEffect } from 'react';
import AlbumSection from './AlbumSection';

const GenresPage = () => {
  const [hipHopAlbums, setHipHopAlbums] = useState([]);
  const [jazzAlbums, setJazzAlbums] = useState([]);
  const [bluesAlbums, setBluesAlbums] = useState([]);
  const [rnbAlbums, setRnbAlbums] = useState([]);
  const [dnbAlbums, setDnbAlbums] = useState([]);
  const [classicalAlbums, setClassicalAlbums] = useState([]);
  const [rockAlbums, setRockAlbums] = useState([]);

  const handleAlbumClick = (albumId) => {
    console.log('Album cliccato con ID:', albumId);
};

  useEffect(() => {
    const fetchAlbumsByGenre = async (genre) => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${genre}&limit=10`);
        if (!response.ok) {
          throw new Error('Errore di rete');
        }
        const data = await response.json();
        return data.data;
      } catch (err) {
        console.error('Errore nella richiesta API:', err);
        return [];
      }
    };

    fetchAlbumsByGenre('Hip-Hop').then((albums) => setHipHopAlbums(albums));
    fetchAlbumsByGenre('Jazz').then((albums) => setJazzAlbums(albums));
    fetchAlbumsByGenre('Blues').then((albums) => setBluesAlbums(albums));
    fetchAlbumsByGenre("R'n'B").then((albums) => setRnbAlbums(albums));
    fetchAlbumsByGenre("D'n'B").then((albums) => setDnbAlbums(albums));
    fetchAlbumsByGenre("Classical").then((albums) => setClassicalAlbums(albums));
    fetchAlbumsByGenre("Rock").then((albums) => setRockAlbums(albums));


  }, []);

  return (
    <>
      <AlbumSection title="Hip-Hop" albums={hipHopAlbums} onAlbumClick={handleAlbumClick} />
      <AlbumSection title="Drum and Bass" albums={dnbAlbums} onAlbumClick={handleAlbumClick} />
      <AlbumSection title="Classical" albums={classicalAlbums} onAlbumClick={handleAlbumClick} />
      <AlbumSection title="Rock" albums={rockAlbums} onAlbumClick={handleAlbumClick} />
      <AlbumSection title="R'n'B" albums={rnbAlbums} onAlbumClick={handleAlbumClick} />
      <AlbumSection title="Jazz" albums={jazzAlbums} onAlbumClick={handleAlbumClick} />
      <AlbumSection title="Blues" albums={bluesAlbums} onAlbumClick={handleAlbumClick} />
    </>
  );
};

export default GenresPage;