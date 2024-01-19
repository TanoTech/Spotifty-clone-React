import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setCurrentSong } from '../redux/actions/index';
import './albumSec.css';

const AlbumSection = ({ title, albums }) => {
  const dispatch = useDispatch();
  const limitedAlbums = albums.slice(2, 6);

  console.log('Albums Data:', albums);

  const handleAlbumClick = (album) => {
  
    const songDetails = {
      songUrl: album.preview, 
      songTitle: album.title, 
      songImage: album.cover_medium 
    };
    dispatch(setCurrentSong(songDetails));
  };

  return (
    <div className="album-section">
      <h2>{title}</h2>
      <Row>
        {limitedAlbums.map((album) => (
          <Col  key={album.id}>
            <div className="album-card" onClick={() => handleAlbumClick(album)}>
              <div className='coverAlbum'><img src={album.album.cover_medium} alt={album.title} /></div>
              <p>{album.artist?.name}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AlbumSection;