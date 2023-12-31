import React, { useState, useEffect } from "react";
import collectibleSound from "./collectiblesound/collectible_sound.mp3";
import "./Maze.css";

const levels = [
  // Level 1
  {
    mazeSize: 8,
    wallPositions: [
      { row: 1, col: 4 },
      { row: 2, col: 1 },
      { row: 2, col: 2 },
      { row: 2, col: 4 },
      { row: 2, col: 5 },
      { row: 3, col: 4 },
      { row: 4, col: 4 },
      { row: 4, col: 6 },
      { row: 4, col: 3 },
      { row: 4, col: 2 },
      { row: 5, col: 2 },
      { row: 6, col: 4 },
    ],
    collectibleQuantity: 5,
  },
  // Level 2
  {
    mazeSize: 16,
    wallPositions: [
      { row: 1, col: 4 },
      { row: 1, col: 7 },
      { row: 1, col: 12 },
      { row: 2, col: 7 },
      { row: 2, col: 8 },
      { row: 2, col: 9 },
      { row: 2, col: 14 },
      { row: 2, col: 11 },
      { row: 2, col: 12 },
      { row: 2, col: 1 },
      { row: 2, col: 2 },
      { row: 2, col: 4 },
      { row: 2, col: 5 },
      { row: 3, col: 4 },
      { row: 4, col: 4 },
      { row: 4, col: 8 },
      { row: 4, col: 10 },
      { row: 4, col: 12 },
      { row: 4, col: 13 },
      { row: 4, col: 14 },
      { row: 4, col: 6 },
      { row: 4, col: 3 },
      { row: 4, col: 2 },
      { row: 4, col: 7 },
      { row: 5, col: 2 },
      { row: 5, col: 7 },
      { row: 5, col: 10 },
      { row: 5, col: 12 },
      { row: 6, col: 14 },
      { row: 6, col: 4 },
      { row: 6, col: 10 },
      { row: 7, col: 1 },
      { row: 7, col: 2 },
      { row: 7, col: 4 },
      { row: 7, col: 5 },
      { row: 7, col: 6 },
      { row: 7, col: 7 },
      { row: 7, col: 9 },
      { row: 7, col: 10 },
      { row: 7, col: 12 },
      { row: 8, col: 9 },
      { row: 8, col: 12 },
      { row: 8, col: 13 },
      { row: 9, col: 12 },
      { row: 9, col: 1 },
      { row: 9, col: 3 },
      { row: 9, col: 4 },
      { row: 9, col: 6 },
      { row: 9, col: 7 },
      { row: 9, col: 9 },
      { row: 9, col: 11 },
      { row: 10, col: 3 },
      { row: 10, col: 6 },
      { row: 10, col: 9 },
      { row: 10, col: 14 },
      { row: 11, col: 3 },
      { row: 11, col: 2 },
      { row: 11, col: 4 },
      { row: 11, col: 5 },
      { row: 11, col: 6 },
      { row: 11, col: 9 },
      { row: 11, col: 8 },
      { row: 11, col: 10 },
      { row: 11, col: 12 },
      { row: 12, col: 5 },
      { row: 12, col: 10 },
      { row: 12, col: 14 },
      { row: 12, col: 12 },
      { row: 13, col: 1 },
      { row: 13, col: 3 },
      { row: 13, col: 5 },
      { row: 13, col: 6 },
      { row: 13, col: 8 },
      { row: 13, col: 10 },
      { row: 13, col: 12 },
      { row: 14, col: 3 },
    ],
    collectibleQuantity: 1,
  },
  // Level 3
  {
    mazeSize: 32,
    wallPositions: [
      { row: 1, col: 4 },
      { row: 1, col: 7 },
      { row: 1, col: 12 },
      { row: 1, col: 18 },
      { row: 1, col: 22 },
      { row: 1, col: 26 },
      { row: 2, col: 7 },
      { row: 2, col: 8 },
      { row: 2, col: 9 },
      { row: 2, col: 14 },
      { row: 2, col: 15 },
      { row: 2, col: 16 },
      { row: 2, col: 20 },
      { row: 2, col: 24 },
      { row: 2, col: 28 },
      { row: 2, col: 11 },
      { row: 2, col: 12 },
      { row: 2, col: 1 },
      { row: 2, col: 2 },
      { row: 2, col: 4 },
      { row: 2, col: 5 },
      { row: 3, col: 4 },
      { row: 3, col: 16 },
      { row: 3, col: 17 },
      { row: 3, col: 18 },
      { row: 3, col: 19 },
      { row: 3, col: 20 },
      { row: 3, col: 21 },
      { row: 3, col: 22 },
      { row: 3, col: 23 },
      { row: 3, col: 24 },
      { row: 3, col: 25 },
      { row: 3, col: 26 },
      { row: 3, col: 27 },
      { row: 3, col: 28 },
      { row: 3, col: 29 },
      { row: 4, col: 4 },
      { row: 4, col: 8 },
      { row: 4, col: 10 },
      { row: 4, col: 12 },
      { row: 4, col: 13 },
      { row: 4, col: 14 },
      { row: 4, col: 14 },
      { row: 4, col: 16 },
      { row: 4, col: 6 },
      { row: 4, col: 3 },
      { row: 4, col: 2 },
      { row: 4, col: 7 },
      { row: 4, col: 24 },
      { row: 4, col: 26 },
      { row: 4, col: 28 },
      { row: 5, col: 2 },
      { row: 5, col: 7 },
      { row: 5, col: 10 },
      { row: 5, col: 12 },
      { row: 5, col: 18 },
      { row: 5, col: 20 },
      { row: 5, col: 22 },
      { row: 6, col: 14 },
      { row: 6, col: 15 },
      { row: 6, col: 16 },
      { row: 6, col: 17 },
      { row: 6, col: 18 },
      { row: 6, col: 19 },
      { row: 6, col: 20 },
      { row: 6, col: 21 },
      { row: 6, col: 22 },
      { row: 6, col: 23 },
      { row: 6, col: 24 },
      { row: 6, col: 25 },
      { row: 6, col: 26 },
      { row: 6, col: 27 },
      { row: 6, col: 28 },
      { row: 6, col: 29 },

      { row: 6, col: 4 },
      { row: 6, col: 10 },
      { row: 7, col: 1 },
      { row: 7, col: 2 },
      { row: 7, col: 4 },
      { row: 7, col: 5 },
      { row: 7, col: 6 },
      { row: 7, col: 7 },
      { row: 7, col: 9 },
      { row: 7, col: 10 },
      { row: 7, col: 12 },
      { row: 8, col: 9 },
      { row: 8, col: 12 },
      { row: 8, col: 13 },
      { row: 8, col: 15 },
      { row: 8, col: 18 },
      { row: 8, col: 19 },
      { row: 8, col: 20 },
      { row: 8, col: 21 },
      { row: 8, col: 22 },
      { row: 8, col: 23 },
      { row: 8, col: 24 },
      { row: 8, col: 25 },
      { row: 8, col: 26 },
      { row: 8, col: 27 },
      { row: 8, col: 28 },
      { row: 8, col: 29 },
      { row: 8, col: 16 },
      { row: 9, col: 12 },
      { row: 9, col: 1 },
      { row: 9, col: 3 },
      { row: 9, col: 4 },
      { row: 9, col: 6 },
      { row: 9, col: 7 },
      { row: 9, col: 9 },
      { row: 9, col: 11 },
      { row: 9, col: 16 },
      { row: 10, col: 3 },
      { row: 10, col: 6 },
      { row: 10, col: 9 },
      { row: 10, col: 14 },
      { row: 10, col: 15 },
      { row: 10, col: 16 },
      { row: 10, col: 17 },
      { row: 10, col: 19 },
      { row: 10, col: 20 },
      { row: 10, col: 21 },
      { row: 10, col: 22 },
      { row: 10, col: 23 },
      { row: 10, col: 24 },
      { row: 10, col: 25 },
      { row: 10, col: 26 },
      { row: 10, col: 27 },
      { row: 10, col: 28 },
      { row: 10, col: 29 },
      { row: 11, col: 3 },
      { row: 11, col: 2 },
      { row: 11, col: 4 },
      { row: 11, col: 5 },
      { row: 11, col: 6 },
      { row: 11, col: 9 },
      { row: 11, col: 8 },
      { row: 11, col: 10 },
      { row: 11, col: 12 },
      { row: 11, col: 17 },
      { row: 11, col: 19 },
      { row: 11, col: 23 },
      { row: 11, col: 27 },
      { row: 12, col: 5 },
      { row: 12, col: 10 },
      { row: 12, col: 14 },
      { row: 12, col: 12 },
      { row: 12, col: 15 },
      { row: 12, col: 21 },
      { row: 12, col: 25 },
      { row: 12, col: 29 },
      { row: 13, col: 1 },
      { row: 13, col: 3 },
      { row: 13, col: 5 },
      { row: 13, col: 6 },
      { row: 13, col: 8 },
      { row: 13, col: 10 },
      { row: 13, col: 12 },
      { row: 13, col: 15 },
      { row: 13, col: 17 },
      { row: 13, col: 18 },
      { row: 13, col: 19 },
      { row: 13, col: 20 },
      { row: 13, col: 21 },
      { row: 13, col: 22 },
      { row: 13, col: 23 },
      { row: 13, col: 24 },
      { row: 13, col: 25 },
      { row: 13, col: 26 },
      { row: 13, col: 27 },
      { row: 13, col: 28 },
      { row: 13, col: 29 },
      { row: 14, col: 3 },
      { row: 14, col: 15 },
      { row: 14, col: 29 },
      { row: 15, col: 6 },
      { row: 15, col: 7 },
      { row: 15, col: 9 },
      { row: 15, col: 10 },
      { row: 15, col: 11 },
      { row: 15, col: 12 },
      { row: 15, col: 13 },
      { row: 15, col: 15 },
      { row: 15, col: 16 },
      { row: 15, col: 17 },
      { row: 15, col: 18 },
      { row: 15, col: 19 },
      { row: 15, col: 20 },
      { row: 15, col: 21 },
      { row: 15, col: 22 },
      { row: 15, col: 23 },
      { row: 15, col: 24 },
      { row: 15, col: 25 },
      { row: 15, col: 26 },
      { row: 15, col: 27 },
      { row: 15, col: 29 },
      { row: 16, col: 1 },
      { row: 16, col: 2 },
      { row: 16, col: 4 },
      { row: 16, col: 6 },
      { row: 16, col: 10 },
      { row: 16, col: 12 },
      { row: 16, col: 15 },
      { row: 16, col: 29 },
      { row: 17, col: 4 },
      { row: 17, col: 5 },
      { row: 17, col: 6 },
      { row: 17, col: 7 },
      { row: 17, col: 8 },
      { row: 17, col: 10 },
      { row: 17, col: 29 },
      { row: 17, col: 15 },
      { row: 17, col: 17 },
      { row: 17, col: 18 },
      { row: 17, col: 19 },
      { row: 17, col: 20 },
      { row: 17, col: 21 },
      { row: 17, col: 22 },
      { row: 17, col: 23 },
      { row: 17, col: 24 },
      { row: 17, col: 25 },
      { row: 17, col: 26 },
      { row: 17, col: 27 },
      { row: 17, col: 28 },
      { row: 18, col: 4 },
      { row: 18, col: 3 },
      { row: 18, col: 2 },
      { row: 18, col: 6 },
      { row: 18, col: 10 },
      { row: 18, col: 15 },
      { row: 18, col: 14 },
      { row: 18, col: 13 },
      { row: 18, col: 12 },
      { row: 18, col: 29 },
      { row: 19, col: 4 },
      { row: 19, col: 6 },
      { row: 19, col: 8 },
      { row: 19, col: 10 },
      { row: 19, col: 15 },
      { row: 19, col: 16 },
      { row: 19, col: 17 },
      { row: 19, col: 18 },
      { row: 19, col: 19 },
      { row: 19, col: 20 },
      { row: 19, col: 21 },
      { row: 19, col: 22 },
      { row: 19, col: 23 },
      { row: 19, col: 24 },
      { row: 19, col: 25 },
      { row: 19, col: 26 },
      { row: 19, col: 27 },
      { row: 19, col: 29 },
      { row: 20, col: 1 },
      { row: 20, col: 2 },
      { row: 20, col: 4 },
      { row: 20, col: 6 },
      { row: 20, col: 8 },
      { row: 20, col: 9 },
      { row: 20, col: 10 },
      { row: 20, col: 11 },
      { row: 20, col: 12 },
      { row: 20, col: 13 },
      { row: 20, col: 14 },
      { row: 20, col: 15 },
      { row: 20, col: 19 },
      { row: 20, col: 23 },
      { row: 20, col: 29 },
      { row: 20, col: 27 },
      { row: 21, col: 4 },
      { row: 21, col: 6 },
      { row: 21, col: 10 },
      { row: 21, col: 17 },
      { row: 21, col: 21 },
      { row: 21, col: 25 },
      { row: 21, col: 29 },
      { row: 22, col: 4 },
      { row: 22, col: 6 },
      { row: 22, col: 3 },
      { row: 22, col: 2 },
      { row: 22, col: 8 },
      { row: 22, col: 10 },
      { row: 22, col: 11 },
      { row: 22, col: 13 },
      { row: 22, col: 14 },
      { row: 22, col: 15 },
      { row: 22, col: 17 },
      { row: 22, col: 18 },
      { row: 22, col: 20 },
      { row: 22, col: 21 },
      { row: 22, col: 16 },
      { row: 22, col: 24 },
      { row: 22, col: 22 },
      { row: 22, col: 25 },
      { row: 22, col: 26 },
      { row: 22, col: 27 },
      { row: 22, col: 28 },
      { row: 22, col: 29 },
      { row: 23, col: 4 },
      { row: 23, col: 6 },
      { row: 23, col: 16 },
      { row: 23, col: 8 },
      { row: 23, col: 7 },
      { row: 23, col: 10 },
      { row: 23, col: 13 },
      { row: 23, col: 21 },
      { row: 23, col: 29 },
      { row: 24, col: 4 },
      { row: 24, col: 6 },
      { row: 24, col: 1 },
      { row: 24, col: 2 },
      { row: 24, col: 10 },
      { row: 24, col: 13 },
      { row: 24, col: 12 },
      { row: 24, col: 14 },
      { row: 24, col: 18 },
      { row: 24, col: 21 },
      { row: 24, col: 22 },
      { row: 24, col: 23 },
      { row: 24, col: 24 },
      { row: 24, col: 25 },
      { row: 24, col: 27 },
      { row: 24, col: 28 },
      { row: 24, col: 29 },
      { row: 25, col: 4 },
      { row: 25, col: 8 },
      { row: 25, col: 10 },
      { row: 25, col: 14 },
      { row: 25, col: 16 },
      { row: 25, col: 17 },
      { row: 25, col: 18 },
      { row: 25, col: 19 },
      { row: 25, col: 21 },
      { row: 25, col: 29 },
      { row: 26, col: 3 },
      { row: 26, col: 2 },
      { row: 26, col: 4 },
      { row: 26, col: 7 },
      { row: 26, col: 8 },
      { row: 26, col: 12 },
      { row: 26, col: 13 },
      { row: 26, col: 14 },
      { row: 26, col: 10 },
      { row: 26, col: 17 },
      { row: 26, col: 19 },
      { row: 26, col: 21 },
      { row: 26, col: 22 },
      { row: 26, col: 24 },
      { row: 26, col: 25 },
      { row: 26, col: 26 },
      { row: 26, col: 27 },
      { row: 26, col: 28 },
      { row: 26, col: 29 },
      { row: 26, col: 1 },
      { row: 26, col: 19 },
      { row: 27, col: 17 },
      { row: 27, col: 16 },
      { row: 27, col: 4 },
      { row: 27, col: 7 },
      { row: 27, col: 12 },
      { row: 27, col: 29 },
      { row: 28, col: 4 },
      { row: 28, col: 1 },
      { row: 28, col: 2 },
      { row: 28, col: 7 },
      { row: 28, col: 8 },
      { row: 28, col: 9 },
      { row: 28, col: 10 },
      { row: 28, col: 11 },
      { row: 28, col: 12 },
      { row: 28, col: 13 },
      { row: 28, col: 14 },
      { row: 28, col: 16 },
      { row: 28, col: 17 },
      { row: 28, col: 18 },
      { row: 28, col: 16 },
      { row: 28, col: 19 },
      { row: 28, col: 20 },
      { row: 28, col: 21 },
      { row: 28, col: 22 },
      { row: 28, col: 24 },
      { row: 28, col: 25 },
      { row: 28, col: 26 },
      { row: 28, col: 27 },
      { row: 28, col: 28 },
      { row: 28, col: 29 },
      { row: 29, col: 17 },
      { row: 29, col: 4 },
      { row: 29, col: 5 },
      { row: 29, col: 6 },
      { row: 29, col: 7 },
      { row: 29, col: 9 },
      { row: 29, col: 21 },
      { row: 29, col: 25 },
      { row: 29, col: 29 },
      { row: 29, col: 11 },
      { row: 29, col: 13 },
      { row: 29, col: 13 },
      { row: 30, col: 2 },
      { row: 30, col: 15 },
      { row: 30, col: 19 },
      { row: 30, col: 23 },
      { row: 30, col: 27 },
    ],
    collectibleQuantity: 1,
  },
  // Level 4
  {
    mazeSize: 32,
    wallPositions: [
      // ... wall positions for Level 4
    ],
    collectibleQuantity: 1,
  },
  // ... add more levels as needed
];

const generateMaze = (rows, columns, wallPositions, collectibleQuantity) => {
  const maze = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => 0)
  );

  // Set the outer walls (top, bottom, left, right)
  for (let i = 0; i < rows; i++) {
    maze[i][0] = 1; // Left wall
    maze[i][columns - 1] = 1; // Right wall
  }
  for (let j = 0; j < columns; j++) {
    maze[0][j] = 1; // Top wall
    maze[rows - 1][j] = 1; // Bottom wall
  }

  // Set the inner walls based on wallPositions
  wallPositions.forEach((position) => {
    maze[position.row][position.col] = 1; // Wall
  });

  // Set player position
  maze[1][1] = 3; // Assuming the starting position is (1, 1)

  const collectiblePositions = [];
  for (let i = 0; i < Math.min(collectibleQuantity, rows * columns); i++) {
    let randomRow, randomCol;
    do {
      randomRow = Math.floor(Math.random() * (rows - 2)) + 1;
      randomCol = Math.floor(Math.random() * (columns - 2)) + 1;
    } while (
      maze[randomRow][randomCol] !== 0 ||
      maze[randomRow][randomCol] === 4 ||
      collectiblePositions.some(
        (position) => position.row === randomRow && position.col === randomCol
      )
    );

    maze[randomRow][randomCol] = 2;
    collectiblePositions.push({ row: randomRow, col: randomCol });
  }

  return { maze, collectiblePositions };
};

const Maze = ({ toggleMusic, musicPlaying, exitGame }) => {
  const [collectibles, setCollectibles] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [maze, setMaze] = useState(null);
  const [collectiblePositions, setCollectiblePositions] = useState([]);
  const [playerRow, setPlayerRow] = useState(1);
  const [playerCol, setPlayerCol] = useState(1);
  const [paused, setPaused] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [collectibleSoundRef, setCollectibleSoundRef] = useState(
    new Audio(collectibleSound)
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handlePauseResumeClick = () => {
    setPaused(!paused);
    setShowButtons(!paused);
  };

  const showInstructions = () => {
    alert(
      "Instructions:\nUse arrow keys or button to navigate through the maze."
    );
  };

  useEffect(() => {
    return () => {
      collectibleSoundRef.pause();
      collectibleSoundRef.currentTime = 0;
    };
  }, [collectibleSoundRef]);

  useEffect(() => {
    const currentLevel = levels[currentLevelIndex];

    const { maze, collectiblePositions } = generateMaze(
      currentLevel.mazeSize,
      currentLevel.mazeSize,
      currentLevel.wallPositions,
      currentLevel.collectibleQuantity
    );

    setCollectiblePositions(collectiblePositions);
    setMaze(maze);
  }, [currentLevelIndex]);

  const handleButtonPress = (direction) => {
    if (gameWon || paused) {
      return;
    }

    let newPlayerRow = playerRow;
    let newPlayerCol = playerCol;

    switch (direction) {
      case "up":
        newPlayerRow -= 1;
        break;
      case "down":
        newPlayerRow += 1;
        break;
      case "left":
        newPlayerCol -= 1;
        break;
      case "right":
        newPlayerCol += 1;
        break;
      default:
        return;
    }

    if (
      newPlayerRow >= 0 &&
      newPlayerRow < maze.length &&
      newPlayerCol >= 0 &&
      newPlayerCol < maze[0].length
    ) {
      const targetCell = maze[newPlayerRow][newPlayerCol];

      if (targetCell !== 1 && targetCell !== 4) {
        const newMaze = [...maze];
        newMaze[playerRow][playerCol] = 0;

        const collectibleAtNewPosition = collectiblePositions.find(
          (position) =>
            position.row === newPlayerRow && position.col === newPlayerCol
        );

        if (collectibleAtNewPosition) {
          setCollectibles((prevCollectibles) => prevCollectibles + 1);
          const newCollectiblePositions = collectiblePositions.filter(
            (position) =>
              position.row !== newPlayerRow || position.col !== newPlayerCol
          );
          setCollectiblePositions(newCollectiblePositions);

          // Play collectible sound
          collectibleSoundRef.currentTime = 0;
          collectibleSoundRef.play();
        }

        newMaze[newPlayerRow][newPlayerCol] = 3;
        setMaze(newMaze);

        setPlayerRow(newPlayerRow);
        setPlayerCol(newPlayerCol);
      }
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (gameWon || paused) {
        return;
      }

      let newPlayerRow = playerRow;
      let newPlayerCol = playerCol;

      switch (event.key) {
        case "ArrowUp":
          newPlayerRow -= 1;
          break;
        case "ArrowDown":
          newPlayerRow += 1;
          break;
        case "ArrowLeft":
          newPlayerCol -= 1;
          break;
        case "ArrowRight":
          newPlayerCol += 1;
          break;
        default:
          return;
      }

      if (
        newPlayerRow >= 0 &&
        newPlayerRow < maze.length &&
        newPlayerCol >= 0 &&
        newPlayerCol < maze[0].length
      ) {
        const targetCell = maze[newPlayerRow][newPlayerCol];

        if (targetCell !== 1 && targetCell !== 4) {
          const newMaze = [...maze];
          newMaze[playerRow][playerCol] = 0;

          const collectibleAtNewPosition = collectiblePositions.find(
            (position) =>
              position.row === newPlayerRow && position.col === newPlayerCol
          );

          if (collectibleAtNewPosition) {
            setCollectibles((prevCollectibles) => prevCollectibles + 1);
            const newCollectiblePositions = collectiblePositions.filter(
              (position) =>
                position.row !== newPlayerRow || position.col !== newPlayerCol
            );
            setCollectiblePositions(newCollectiblePositions);

            // Play collectible sound
            collectibleSoundRef.currentTime = 0;
            collectibleSoundRef.play();
          }

          newMaze[newPlayerRow][newPlayerCol] = 3;
          setMaze(newMaze);
          setPlayerRow(newPlayerRow);
          setPlayerCol(newPlayerCol);
        }
      }
    };

    if (collectibles === levels[currentLevelIndex].collectibleQuantity) {
      setGameWon(true);
    }

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [
    gameWon,
    paused,
    playerRow,
    playerCol,
    maze,
    collectibles,
    collectiblePositions,
  ]);

  const handleNextLevelClick = () => {
    const nextLevelIndex = (currentLevelIndex + 1) % levels.length;
    setCurrentLevelIndex(nextLevelIndex);
    setGameWon(false);
    setCollectibles(0);

    // Reset player position and other variables
    setPlayerRow(1);
    setPlayerCol(1);

    // Update maze and collectibles
    const currentLevel = levels[nextLevelIndex];
    const { maze, collectiblePositions } = generateMaze(
      currentLevel.mazeSize,
      currentLevel.mazeSize,
      currentLevel.wallPositions,
      currentLevel.collectibleQuantity
    );

    setCollectiblePositions(collectiblePositions);
    setMaze(maze);
  };

  const handleTryAgainClick = () => {
    setGameWon(false);
    setCollectibles(0);

    // Reset player position and other variables
    setPlayerRow(1);
    setPlayerCol(1);

    // Update maze and collectibles
    const currentLevel = levels[currentLevelIndex];
    const { maze, collectiblePositions } = generateMaze(
      currentLevel.mazeSize,
      currentLevel.mazeSize,
      currentLevel.wallPositions,
      currentLevel.collectibleQuantity
    );

    setCollectiblePositions(collectiblePositions);
    setMaze(maze);
  };

  const createMaze = () => {
    if (!maze || !maze.length || !maze[0].length) {
      return null;
    }

    const cellSize = 80;
    const maxRows = maze.length;
    const maxColumns = maze[0].length;

    const calculatedCellSize = Math.floor(
      Math.min(cellSize, (cellSize * 8) / maxRows, (cellSize * 8) / maxColumns)
    );

    const handleExitClick = () => {
      exitGame();
    };

    return (
      <div className="maze-container">
        <div className="icon-container">
          <img
            src={`${process.env.PUBLIC_URL}/images/Pause.png`}
            alt="Pause Icon"
            className="pause-icon"
            onClick={handlePauseResumeClick}
          />
        </div>
        <div className="maze">
          <div className="info-bar">
            <div className="collectibles">COLLECTIBLES: {collectibles}</div>
            <div className="current-level">LEVEL: {currentLevelIndex + 1}</div>
          </div>

          {maze.map((row, rowIndex) => (
            <div key={rowIndex} className="maze-row">
              {row.map((cell, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`cell`}
                  style={{
                    width: `${calculatedCellSize}px`,
                    height: `${calculatedCellSize}px`,
                    lineHeight: `${calculatedCellSize}px`,
                  }}
                >
                  {cell === 1 && (
                    <img
                      src={`${process.env.PUBLIC_URL}/images/Brick.png`}
                      alt="Wall"
                      style={{ width: "100%", height: "100%" }}
                    />
                  )}
                  {cell === 2 && (
                    <img
                      className="collectible-image"
                      src={`${process.env.PUBLIC_URL}/images/collectible-image.png`}
                      alt="Collectible"
                      style={{ width: "100%", height: "100%" }}
                    />
                  )}
                  {cell === 3 && (
                    <img
                      className="player-image"
                      src={`${process.env.PUBLIC_URL}/images/player-image.png`}
                      alt="Player"
                      style={{ width: "100%", height: "100%" }}
                    />
                  )}
                  {cell === 4 && (
                    <img
                      src={`${process.env.PUBLIC_URL}/images/Brick.png`}
                      alt="Manual Wall"
                      style={{ width: "100%", height: "100%" }}
                    />
                  )}
                </div>
              ))}
            </div>
          ))}

          {isMobile && (
            <div className="Mobile-Controls">
              <button
                className="mobile-button"
                onClick={() => handleButtonPress("up")}
              >
                Up
              </button>
              <button
                className="mobile-button"
                onClick={() => handleButtonPress("down")}
              >
                Down
              </button>
              <button
                className="mobile-button"
                onClick={() => handleButtonPress("left")}
              >
                Left
              </button>
              <button
                className="mobile-button"
                onClick={() => handleButtonPress("right")}
              >
                Right
              </button>
            </div>
          )}
          {showButtons && (
            <div className="popup">
              <p>CAT MAZE GAME</p>
              <button onClick={handlePauseResumeClick}>Resume</button>
              <button onClick={showInstructions}>Instructions</button>
              <button onClick={handleExitClick}>Exit Game</button>
            </div>
          )}
          {gameWon && (
            <div className="popup">
              <div className="popup-content">
                <p>Congratulations! You won!</p>
                <button onClick={handleNextLevelClick}>Next Level</button>
                <button onClick={handleTryAgainClick}>Try Again</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return <div className="Maze">{createMaze()}</div>;
};

export default Maze;
