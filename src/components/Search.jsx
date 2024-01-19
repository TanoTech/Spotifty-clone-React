import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = ({ onResults }) => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery}&limit=10`);
            if (!response.ok) {
                throw new Error('Errore di rete');
            }
            const data = await response.json();
            onResults(data.data);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
        setIsLoading(false);
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Inserisci la tua ricerca"
                    value={searchQuery}
                    onChange={handleInputChange}
                />
                <button onClick={handleSearch}>Cerca</button>
            </div>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
        </div>
    );
};

export default Search;