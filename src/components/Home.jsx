import React from 'react';
import SearchResults from './SearchResults';
import './home.css'
import GenresPage from './GenresPage';
import Player from './Player';
import NavbarHome from './NavbarHome';

const Home = ({ searchResults }) => {

    return (
        <>
            <main className='home'>
                <NavbarHome />
                <SearchResults results={searchResults} />
                <GenresPage />
            </main>
        </>
    );
};

export default Home;