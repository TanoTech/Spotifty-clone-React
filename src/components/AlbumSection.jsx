import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './albumSec.css'

const AlbumSection = ({ title, albums, onAlbumClick }) => {
  const limitedAlbums = albums.slice(2, 6);

  return (
    <div className="album-section">
      <h2>{title}</h2>
        <Row>
          {limitedAlbums.map((album) => (
            <Col xs={6} md={4} lg={3} key={album.id}>
              <Link
                to={`/album/${album.id}`}
                className="album-link"
                onClick={() => onAlbumClick(album.id)}
              >
                <div className="album-card">
                  <div className='coverAlbum'><img src={album.album.cover_medium} alt={album.title} /></div>
                  <p>{album.title}</p>
                  <p>{album.artist.name}</p>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
    </div>
  );
};

export default AlbumSection;
