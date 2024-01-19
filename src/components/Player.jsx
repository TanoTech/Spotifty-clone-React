import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import './player.css';

const Player = () => {
    const currentSong = useSelector(state => state.currentSong);
    const audioRef = useRef(new Audio());
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (currentSong.songUrl) {
            audioRef.current.pause();
            audioRef.current = new Audio(currentSong.songUrl);
            audioRef.current.play();
            setIsPlaying(true);
        }
        // Pulizia: ferma la musica quando il componente viene smontato o la canzone cambia
        return () => {
            audioRef.current.pause();
        };
    }, [currentSong.songUrl]);

    useEffect(() => {
        // Ascoltatore per quando la canzone finisce
        const audio = audioRef.current;
        const handleEnded = () => setIsPlaying(false);
        if (audio) {
            audio.addEventListener('ended', handleEnded);
        }
        
        return () => {
            if (audio) {
                audio.removeEventListener('ended', handleEnded);
            }
        };
    }, []);

    const handlePlayPauseClick = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className='player'>
            <div className='song-info'>
                {currentSong.songImage && <img src={currentSong.songImage} alt={currentSong.songTitle} />}
                {currentSong.songTitle && <h3>{currentSong.songTitle}</h3>}
            </div>
            <div className='controls'>
                <button onClick={handlePlayPauseClick}>
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
            </div>
        </div>
    );
};

export default Player;