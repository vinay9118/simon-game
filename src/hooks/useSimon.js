import { useState, useCallback } from 'react';

export const useSimon = () => {
  const [gameSeq, setGameSeq] = useState([]);
  const [userSeq, setUserSeq] = useState([]);
  const [level, setLevel] = useState(0);
  const [activeBtn, setActiveBtn] = useState(null);
  const [isStarted, setIsStarted] = useState(false);
  
  // NEW: State for the Red Flash background
  const [isGameOver, setIsGameOver] = useState(false);

  // NEW: Persistence - Load high score from LocalStorage
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('simonHighScore');
    return saved ? parseInt(saved, 10) : 0;
  });

  const colors = ["red", "green", "blue", "yellow"];

  const showSequence = useCallback((sequence) => {
    sequence.forEach((color, i) => {
      setTimeout(() => {
        setActiveBtn(color);
        setTimeout(() => setActiveBtn(null), 300);
      }, (i + 1) * 600);
    });
  }, []);

  const nextLevel = useCallback(() => {
    setUserSeq([]);
    setLevel((prev) => prev + 1);
    
    const randomColor = colors[Math.floor(Math.random() * 4)];
    const newSeq = [...gameSeq, randomColor];
    setGameSeq(newSeq);
    
    setTimeout(() => showSequence(newSeq), 500);
  }, [gameSeq, showSequence]);

  const startGame = () => {
    if (!isStarted) {
      setIsStarted(true);
      setIsGameOver(false); // Ensure flash is off
      setGameSeq([]);
      setUserSeq([]);
      setLevel(0);
      setTimeout(nextLevel, 200);
    }
  };

  // NEW: The "Clean Reset" & "Persistence" trigger
  const triggerGameOver = () => {
    // 1. Persistence: Update high score if current level is higher
    if (level > highScore) {
      setHighScore(level);
      localStorage.setItem('simonHighScore', level.toString());
    }

    // 2. State Syncing: Turn background RED
    setIsGameOver(true);

    // 3. Clean Reset: Wait 500ms for effect, then reset UI
    setTimeout(() => {
      setIsGameOver(false);
      resetGame();
    }, 500);
  };

  const resetGame = () => {
    setIsStarted(false);
    setGameSeq([]);
    setUserSeq([]);
    setLevel(0);
  };

  return { 
    level, 
    highScore, 
    activeBtn, 
    isStarted, 
    isGameOver, 
    startGame, 
    resetGame, 
    triggerGameOver, // Export this for GameBoard.jsx
    gameSeq, 
    userSeq, 
    setUserSeq, 
    nextLevel 
  };
};