import React, { useState, useEffect } from 'react';
import './player.css';

const Player = ({ songUrl }) => {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (songUrl) {
      const newAudio = new Audio(songUrl);
      setAudio(newAudio);

      newAudio.addEventListener('ended', () => setIsPlaying(false));

      return () => {
        newAudio.removeEventListener('ended', () => setIsPlaying(false));
      };
    }
  }, [songUrl]);

  const handlePlayPauseClick = () => {
    if (!audio) return; 

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='player'>
      <h2>Player</h2>
      <button onClick={handlePlayPauseClick} disabled={!audio}>
        {isPlaying ? 'Pausa' : 'Play'}
      </button>
    </div>
  );
};

export default Player;