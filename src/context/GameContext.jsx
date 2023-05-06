import { createContext, useState } from 'react';
import emojiData from '../data/emojiData.json';

export const GameContext = createContext([]);

const GameContextProvider = ({ children }) => {
  // Criar um object contento as informações das jogadas e níveis //
  const [gamerData, setgamerData] = useState([
    { gameLevel: 'easy', gameScore: 0 },
    { gameLevel: 'medium', gameScore: 0 },
    { gameLevel: 'hard', gameScore: 0 },
  ]);

  // Shuffle Cards
  const shuffleCards = (boardLevel) => {
    let boardSize;
    switch (boardLevel) {
      case 'easy':
        boardSize = 2;
        break;
      case 'medium':
        boardSize = 4;
        break;
      case 'hard':
        boardSize = 8;
        break;
    }
    const sortEmojis = emojiData.sort(() => Math.random() - 0.5).slice(0, boardSize);
    const gameEmojis = [...sortEmojis, ...sortEmojis]
      .map((emoji) => ({
        ...emoji,
        matched: false,
      }))
      .sort(() => Math.random() - 0.5);

    return gameEmojis;
  };

  // Reset Turn
  const resetTurn = (setChoiceOne, setChoiceTwo, setMovements) => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setMovements((prev) => prev + 1);
  };

  return (
    <GameContext.Provider value={{ shuffleCards, resetTurn }}>{children}</GameContext.Provider>
  );
};

export default GameContextProvider;
