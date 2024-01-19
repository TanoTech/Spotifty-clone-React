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
        return () => {
            audioRef.current.pause();
        };
    }, [currentSong.songUrl]);

    useEffect(() => {
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
        <div className='player d-flex'>
            <div className='controls'>
                <img src="/assets/playerbuttons/shuffle.png" alt="shuffle button" />
                <img src="/assets/playerbuttons/Previous.png" alt="previous button" />
                <img 
    src={isPlaying ? "/assets/playerbuttons/Pause.png" : "/assets/playerbuttons/Play.png"} 
    alt={isPlaying ? "pause" : "play"} 
    onClick={handlePlayPauseClick}
/>


                <img src="/assets/playerbuttons/Next.png" alt="next button" />
            </div>
            <div className='song-info'>
                {currentSong.songTitle && <p>{currentSong.songTitle}</p>}
                {currentSong.songImage && <img src={currentSong.songImage} alt={currentSong.songTitle} />}
            </div>
        </div>
    );
};

export default Player;