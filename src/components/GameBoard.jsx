import React from 'react';
import { useSimon } from '../hooks/useSimon';

const BUTTON_DATA = [
    {
        id: 'red',
        col: 'bg-red-600',
        glow: 'shadow-[0_0_60px_rgba(239,68,68,0.8)] bg-red-400 border-red-200'
    },
    {
        id: 'green',
        col: 'bg-emerald-600',
        glow: 'shadow-[0_0_60px_rgba(16,185,129,0.8)] bg-emerald-400 border-emerald-200'
    },
    {
        id: 'blue',
        col: 'bg-blue-600',
        glow: 'shadow-[0_0_60px_rgba(59,130,246,0.8)] bg-blue-400 border-blue-200'
    },
    {
        id: 'yellow',
        col: 'bg-amber-500',
        glow: 'shadow-[0_0_60px_rgba(245,158,11,0.8)] bg-amber-300 border-amber-100'
    },
];

export default function GameBoard() {
    // UPDATED: Added isGameOver, highScore, and triggerGameOver to the destructuring
    const { 
        level, 
        highScore, 
        activeBtn, 
        isStarted, 
        isGameOver, 
        startGame, 
        triggerGameOver, 
        gameSeq, 
        userSeq, 
        setUserSeq, 
        nextLevel 
    } = useSimon();

    const handlePress = (id) => {
        // Prevent clicks if game isn't started, a sequence is playing, or it's game over
        if (!isStarted || activeBtn || isGameOver) return;

        const currentIdx = userSeq.length;
        const newUserSeq = [...userSeq, id];
        setUserSeq(newUserSeq);

        if (id === gameSeq[currentIdx]) {
            if (newUserSeq.length === gameSeq.length) {
                setTimeout(nextLevel, 1000);
            }
        } else {
            // This now triggers the persistence and syncing logic in your hook
            triggerGameOver(); 
        }
    };

    return (
        <div className="flex flex-col items-center gap-10 p-10 bg-white/90 backdrop-blur-xl rounded-[3rem] shadow-2xl border border-slate-200 min-w-[350px]">
            
            {/* Top Bar for Persistence Display */}
            <div className="flex justify-between w-full px-2 mb-[-20px]">
                <div className="flex flex-col">
                    <span className="text-slate-400 text-[10px] uppercase font-bold tracking-tighter">Best Score</span>
                    <span className="text-slate-900 font-black text-xl">{highScore}</span>
                </div>
                <div className="text-right flex flex-col">
                    <span className="text-indigo-400 text-[10px] uppercase font-bold tracking-tighter">Current</span>
                    <span className="text-indigo-600 font-black text-xl">{level}</span>
                </div>
            </div>

            <div className="text-center">
                <h1 className="text-6xl font-black tracking-tighter italic text-slate-900 mb-2 uppercase">SIMON</h1>
                <p className={`font-mono text-lg font-bold uppercase tracking-widest transition-colors duration-300 ${isGameOver ? 'text-red-600' : 'text-emerald-500'}`}>
                    {isGameOver ? "Game Over!" : isStarted ? `Playing...` : "Press Start"}
                </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
                {BUTTON_DATA.map((btn) => (
                    <button
                        key={btn.id}
                        onClick={() => handlePress(btn.id)}
                        disabled={isGameOver}
                        className={`w-32 h-32 md:w-44 md:h-44 rounded-3xl transition-all duration-150 border-4 border-white shadow-md
                        ${activeBtn === btn.id ? `${btn.glow} scale-105 opacity-100` : `${btn.col} opacity-40 hover:opacity-60 hover:scale-[1.02]`}
                        ${isGameOver ? 'grayscale-[50%] brightness-50' : ''}
                        `}
                    />
                ))}
            </div>

            {!isStarted && (
                <button 
                    onClick={startGame} 
                    className="bg-slate-900 text-white px-12 py-4 rounded-2xl font-bold hover:bg-indigo-600 hover:scale-105 transition-all uppercase tracking-widest shadow-lg active:scale-95"
                >
                    Start Game
                </button>
            )}
        </div>
    );
}