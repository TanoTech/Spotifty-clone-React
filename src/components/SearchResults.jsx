import React from 'react';
import { Card, CardBody, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './searchResults.css'

const SearchResults = ({ results = [] }) => {
    return (
        <Container className='search-results'>
            {results.map((result) => (
                <Link to={`/album/${result.album.id}`} key={result.id}>
                    <Card className="search-result-card">
                        <CardBody>
                            <img src={result.album.cover_medium} alt={result.title} />
                        </CardBody>
                        <p>{result.title}</p>
                        <p>{result.artist.name}</p>
                    </Card>
                </Link>
            ))}
        </Container>
    );
};

export default SearchResults;