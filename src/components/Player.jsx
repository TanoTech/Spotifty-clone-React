import React, { useState, useEffect } from 'react';
import './player.css';

const Player = ({ songUrl, songTitle, songImage }) => {
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

  const handleStopClick = () => {
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <div className='player'>
      <div className='song-info'>
        {songImage && <img src={songImage} alt={songTitle} />}
        {songTitle && <h3>{songTitle}</h3>}
      </div>
      <div className='controls'>
        <button onClick={handlePlayPauseClick} disabled={!audio}>
          {isPlaying ? 'Pausa' : 'Play'}
        </button>
        <button onClick={handleStopClick} disabled={!audio}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default Player;