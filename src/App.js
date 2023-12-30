import React, { useState, useRef, useEffect, lazy, Suspense } from "react";
import "./App.css";
import backgroundMusic from "./backgroundmusic/background_music.mp3";

const Maze = lazy(() => import("./Maze"));

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [showMaze, setShowMaze] = useState(false); // Add a state to control maze rendering
  const audioRef = useRef(new Audio(backgroundMusic));

  const startGame = () => {
    setGameStarted(true);
    setShowMaze(true); // Show the maze when the game starts
    /* playBackgroundMusic(); */
  };

  const exitGame = () => {
    setGameStarted(false);
    setShowMaze(false); // Hide the maze when exiting the game
  };

  const toggleMusic = () => {
    if (musicPlaying) {
      stopBackgroundMusic();
    } else {
      playBackgroundMusic();
    }
  };

  const playBackgroundMusic = () => {
    const audio = audioRef.current;
    audio.loop = true;
    audio.play();
    setMusicPlaying(true);
  };

  const stopBackgroundMusic = () => {
    const audio = audioRef.current;
    audio.pause();
    audio.currentTime = 0;
    setMusicPlaying(false);
  };

  useEffect(() => {
    return () => {
      // Cleanup audio when component unmounts
      const audio = audioRef.current;
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const showInstructions = () => {
    alert("Instructions:\nUse arrow keys to navigate through the maze.");
  };

  const showAboutUs = () => {
    alert("About Us:\nWe are a team of developers who love creating games!");
  };

  const renderTitleScreen = () => {
    return (
      <div className="title-screen">
        <h1>CAT MAZE GAME</h1>
        <div className="options">
          <button onClick={startGame}>Start Game</button>
          <button onClick={showInstructions}>Instructions</button>
          <button onClick={showAboutUs}>About Us</button>
        </div>
      </div>
    );
  };

  const renderGame = () => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Maze
          toggleMusic={toggleMusic}
          musicPlaying={musicPlaying}
          exitGame={exitGame}
        />
      </Suspense>
    );
  };

  return (
    <div className="App">
      <button onClick={toggleMusic} className="music-button">
        {musicPlaying ? (
          <img
            src={process.env.PUBLIC_URL + "/note-play.png"}
            alt="Note"
            className="music-icon"
          />
        ) : (
          <img
            src={process.env.PUBLIC_URL + "/note-mute.png"}
            alt="Note"
            className="music-icon"
          />
        )}
      </button>
      {gameStarted ? (
        <div>
          <button onClick={toggleMusic} className="music-button">
            {/* ... (existing code) */}
          </button>
          {showMaze ? (
            renderGame()
          ) : (
            <div>
              {/* You can customize the exit confirmation message or add any other logic */}
              <p>Are you sure you want to exit the game?</p>
              <button onClick={() => setShowMaze(true)}>No</button>
              <button onClick={exitGame}>Yes</button>
            </div>
          )}
        </div>
      ) : (
        renderTitleScreen()
      )}
    </div>
  );
};

export default App;
