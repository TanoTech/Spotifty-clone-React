import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Side';
import Home from './components/Home';
import AlbumDetails from './components/AlbumDetails';
import Player from './components/Player';
import Favourites from './components/Favourites'; 
import './components/sidebar.css';
import './App.css'


const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedSongUrl, setSelectedSongUrl] = useState(null);
  const [selectedSongTitle, setSelectedSongTitle] = useState(''); 
  const [selectedSongImage, setSelectedSongImage] = useState('');

  const handleSongSelect = (url) => {
    setSelectedSongUrl(url);
  };

  const handleSongTitleChange = (title) => {
    setSelectedSongTitle(title);
  };

  const handleSongImageChange = (image) => {
    setSelectedSongImage(image);
  };

  return (
    <BrowserRouter>
      <section>
        <Sidebar onSearchResults={setSearchResults} />
      </section>
      <Routes>
        <Route path="/" element={<Home searchResults={searchResults} />} />
        <Route
          path="/album/:albumId"
          element={
            <AlbumDetails
              onSongSelect={handleSongSelect}
              onSongTitleChange={handleSongTitleChange}
              onSongImageChange={handleSongImageChange}
            />
          }
        />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>   
      <footer>
        <Player
          songUrl={selectedSongUrl}
          songTitle={selectedSongTitle}
          songImage={selectedSongImage}
        />  
      </footer>
    </BrowserRouter>
  );
};

export default App;