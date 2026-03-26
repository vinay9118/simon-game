import GameBoard from './components/GameBoard';
import { useSimon } from './hooks/useSimon';

function App() {
  const game = useSimon(); 

  return (
    <main 
      className={`
        flex items-center justify-center min-h-screen w-full
        transition-all duration-500 ease-in-out
        ${game.isGameOver 
          ? 'bg-red-500' // Flash Red on Game Over
          : 'bg-white'    // NOW SET TO WHITE
        }
      `}
    >
      <div className={`transition-all duration-300 ${game.isGameOver ? 'scale-95' : 'scale-100'}`}>
        <GameBoard game={game} />
      </div>
    </main>
  );
}

export default App;