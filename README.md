# 🎮 Simon Game - Industry Edition

A high-performance, responsive memory game built with **React 19**, **Vite**, and **Tailwind CSS v4**. This project demonstrates professional React patterns, including custom hooks, state synchronization, and persistent data storage.

## 🚀 Live Demo
[**Click here to play the game!**](https://vinay9118.github.io/simon-game/)

---

## ✨ Key Features

### 🧠 Logic & Interactivity
- **State Synchronization:** The entire application background reacts instantly to game states (Playing vs. Game Over) using a centralized `useSimon` hook.
- **Dynamic Sequences:** Randomized level generation with increasing difficulty.
- **Interactive UI:** Smooth transitions, hover effects, and active-button scaling for a tactile feel.

### 💾 Persistence & Performance
- **High Score Tracking:** Utilizes `localStorage` to persist the user's "Best Score" across browser sessions.
- **Optimized Rendering:** Built with Vite for lightning-fast Hot Module Replacement (HMR) and optimized production builds.
- **Clean Architecture:** Separated concerns between UI components (`GameBoard`) and business logic (`useSimon` hook).

### 🎨 Modern Design
- **Glassmorphism:** A sleek, transparent interface with `backdrop-blur` and multi-layered shadows.
- **Responsive Layout:** Fully optimized for Mobile, Tablet, and Desktop screens.
- **Industry Theming:** Professional white-theme aesthetic with high-contrast feedback for "Game Over" events.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Styling Engine:** Tailwind CSS v4
- **State Management:** Custom React Hooks (`useState`, `useCallback`)
- **Deployment:** GitHub Pages

---

## ⚙️ Installation & Setup

To run this project locally on your machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/vinay9118/simon-game.git](https://github.com/vinay9118/simon-game.git)