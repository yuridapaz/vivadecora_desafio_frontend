import { createContext, useState, useEffect } from 'react';
import emojiData from '../data/emojiData.json';

export const GameContext = createContext([]);

const GameContextProvider = ({ children }) => {
  const [gamerData, setGamerData] = useState(() => {
    const savedData = localStorage.getItem('gamerSavedData');
    return savedData
      ? JSON.parse(savedData)
      : [
          { gameLevel: 'easy', gameScore: 0 },
          { gameLevel: 'medium', gameScore: 0 },
          { gameLevel: 'hard', gameScore: 0 },
        ];
  });

  useEffect(() => {
    localStorage.setItem('gamerSavedData', JSON.stringify(gamerData));
  }, [gamerData]);

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

  //
  const findingCurrentGame = (boardLevel) => {
    return gamerData.find((data) => data.gameLevel === boardLevel);
  };

  return (
    <GameContext.Provider
      value={{ shuffleCards, resetTurn, gamerData, setGamerData, findingCurrentGame }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
