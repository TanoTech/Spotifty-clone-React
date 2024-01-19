import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Side';
import Home from './components/Home';
import AlbumDetail from './components/AlbumDetails';
import Player from './components/Player';
import Favourites from './components/Favourites'; 
import './components/sidebar.css';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedSongUrl, setSelectedSongUrl] = useState(null);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavourites = localStorage.getItem('favourites');
    if (storedFavourites) {
        setFavourites(JSON.parse(storedFavourites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const addToFavourites = (song) => {
    if (!favourites.some(favourite => favourite.id === song.id)) {
      setFavourites(prevFavourites => [...prevFavourites, song]);
    }
  };

  const removeFromFavourites = (songId) => {
    setFavourites(prevFavourites => prevFavourites.filter(song => song.id !== songId));
  };

  return (
    <BrowserRouter>
      <section>
        <Sidebar onSearchResults={setSearchResults} />
      </section>
      <Routes>
        <Route path="/" element={<Home searchResults={searchResults} />} />
        <Route path="/album/:albumId" element={<AlbumDetail onSongSelect={setSelectedSongUrl} onAddToFavourites={addToFavourites} />} />
        <Route path="/favourites" element={<Favourites favourites={favourites} onRemoveFromFavourites={removeFromFavourites} />} />
      </Routes>   
      <footer>
        <Player songUrl={selectedSongUrl} />  
      </footer>
    </BrowserRouter>
  );
};

export default App;