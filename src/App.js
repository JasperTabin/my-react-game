import React, { useState, useRef, useEffect, lazy, Suspense } from "react";
import "./App.css";
import backgroundMusic from "./backgroundmusic/background_music.mp3";

const Maze = lazy(() => import("./Maze"));

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [showMaze, setShowMaze] = useState(false);
  const [aboutUsVisible, setAboutUsVisible] = useState(false);
  const [instructionsVisible, setInstructionsVisible] = useState(false);
  const audioRef = useRef(new Audio(backgroundMusic));
  const [showExitPrompt, setShowExitPrompt] = useState(false);

  const developers = [
    {
      name: "SARMIENTO, JERICO J, QUERIJERO",
      responsibility: "UI/UX DESIGNER",
    },
    {
      name: "DE LUNA, MART DEXTER, SASI",
      responsibility: "PROGRAMMER",
    },
    {
      name: "CRESENCIO, RODOLFO MIGUEL, CARREON",
      responsibility: "UI/UX DESIGNER",
    },
    {
      name: "TABIN, JASPER, PALPAL-LATOC",
      responsibility: "PROGRAMMER",
    },
    {
      name: "GEROLIA, JOHN GABRIEL, SAN ANDRES",
      responsibility: "PROGRAMMER",
    },
  ];

  const showExitPromptHandler = () => {
    setShowExitPrompt(true);
  };

  const closeExitPrompt = () => {
    setShowExitPrompt(false);
  };

  const handleExitGame = () => {
    exitGame();
    closeExitPrompt();
    window.close(); // Close the tab
  };

  const startGame = () => {
    setGameStarted(true);
    setShowMaze(true);
    // playBackgroundMusic();
  };

  const exitGame = () => {
    setGameStarted(false);
    setShowMaze(false);
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
      const audio = audioRef.current;
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const showInstructions = () => {
    setInstructionsVisible(true);
  };

  const closeInstructions = () => {
    setInstructionsVisible(false);
  };

  const closeAboutUs = () => {
    setAboutUsVisible(false);
  };

  const showAboutUs = () => {
    setGameStarted(false);
    setShowMaze(false);
    setAboutUsVisible(true);
  };

  const renderInstructions = () => {
    return (
      <div className="instructions">
        <div className="close-instructions" onClick={closeInstructions}>
          <img
            src={process.env.PUBLIC_URL + "/images/Close.png"}
            alt="Close"
            className="close-icon"
          />
        </div>
        <h2>Instructions</h2>
        <p>Use arrow keys or buttons to navigate through the maze.</p>
      </div>
    );
  };

  const renderAboutUs = () => {
    return (
      <div className="about-us">
        <div className="close-button" onClick={closeAboutUs}>
          <img
            src={process.env.PUBLIC_URL + "/images/Close.png"}
            alt="Close"
            className="close-icon"
          />
        </div>
        <h2>About Us</h2>
        <p>
          Welcome to our game! Here's some information about the game and the
          talented developers behind it.
        </p>

        <h3>Game Information</h3>
        <p>
          Join Whisker on a delightful adventure in "CAT MAZE GAME"! Navigate
          through mazes, avoid obstacles, and collect tasty fish. With adorable
          graphics, intuitive controls, and exciting power-ups, this
          cat-and-mouse game is perfect for quick, fun play. Compete with
          friends to see who can guide Whisker to the most fish. Ready for a
          purr-fect quest? Play "Whisker's Fishy Maze" now!
        </p>

        <h3>Meet the Developers</h3>
        <div className="developers-container">
          {developers.map((developer, index) => (
            <div key={index} className="developer-card">
              <h4>{developer.name}</h4>
              <p>
                <strong>Responsibility:</strong> {developer.responsibility}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderTitleScreen = () => {
    return (
      <div className="title-screen">
        <h1>CAT MAZE GAME</h1>
        <div className="options">
          <button onClick={startGame}>Start Game</button>
          <button onClick={showInstructions}>Instructions</button>
          <button onClick={showAboutUs}>About Us</button>
          <button onClick={showExitPromptHandler}>Exit Game</button>
        </div>
        {aboutUsVisible && renderAboutUs()}
        {instructionsVisible && renderInstructions()}
        {showExitPrompt && (
          <div className="exit-prompt">
            <p>Are you sure you want to exit the game?</p>
            <button onClick={handleExitGame}>Yes</button>
            <button
              onClick={() => {
                setShowMaze(true);
                closeExitPrompt();
              }}
            >
              No
            </button>
          </div>
        )}
      </div>
    );
  };

  const renderGame = () => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        {showMaze && (
          <Maze
            toggleMusic={toggleMusic}
            musicPlaying={musicPlaying}
            exitGame={exitGame}
          />
        )}
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
          <button onClick={toggleMusic} className="music-button"></button>
          {showMaze ? (
            renderGame()
          ) : (
            <div>
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
