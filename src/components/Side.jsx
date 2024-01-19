import React from 'react';
import Search from './Search';
import { Nav, Navbar, Image, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './sidebar.css'

const Sidebar = ({onSearchResults}) => {
    return (
        <Navbar className="sidebar" id="sidebar" expand="lg" variant="dark">
            <Navbar.Brand href="/">
                <Image className='img-fluid logoPng' src='./assets/Spotify_Logo.png' alt="Spotify_Logo" />
            </Navbar.Brand>
                <Nav className="d-flex">
                    <Link to='/'>
                        Home
                    </Link>
                    <Link to="/favourites">
                        Your Library
                    </Link>
                </Nav>
                <Container>
                    <Search onResults={onSearchResults} />
                </Container>
                <div className="nav-btn">
                    <button className="btn" type="button">Sign Up</button>
                    <button className="btn" type="button">Login</button>
                    <div>
                        <a href="#"> Cookie Policy</a> |<a href="#"> Privacy</a>
                    </div>
                </div>
        </Navbar>
    );
};

export default Sidebar;