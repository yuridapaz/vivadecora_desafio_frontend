/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { CardComponent } from '../card';
import WinnerContainer from '../winnerContainer';
import { GameContext } from '../../context/GameContext';
import { useContext } from 'react';
import { StyledBoardComponent } from './styles';

// Criar layout para os 3 tipos de jogos !!

export const BoardComponent = ({ boardLevel }) => {
  const { shuffleCards, resetTurn, findingCurrentGame, gamerData, setGamerData } =
    useContext(GameContext);
  const [cards, setCards] = useState([]);
  const [movements, setMovements] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [wrongCard, setWrongCard] = useState(false);
  const winMatch = cards.every((card) => card.matched === true);
  const currentGame = findingCurrentGame(boardLevel);

  useEffect(() => {
    startGame();
  }, []);

  // sort cards and start game
  const startGame = () => {
    resetTurn(setChoiceOne, setChoiceTwo, setMovements);
    const gameEmojis = shuffleCards(boardLevel);
    setCards(gameEmojis);
    setMovements(0);
    return;
  };

  useEffect(() => {
    handleComparison();
  }, [choiceOne, choiceTwo]);

  // setChoice
  const handleChoice = (card) => {
    if (choiceOne && choiceTwo) return;
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // handleComparison
  const handleComparison = () => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.hexCode === choiceTwo.hexCode) {
        setCards((prev) => {
          return prev.map((card) => {
            if (card.hexCode === choiceOne.hexCode) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn(setChoiceOne, setChoiceTwo, setMovements);
      } else {
        setWrongCard(true);
        setTimeout(() => {
          resetTurn(setChoiceOne, setChoiceTwo, setMovements);
          setWrongCard(false);
        }, 1000);
      }
    }
    return;
  };

  // handle Winning
  const handleWinning = () => {
    gamerData.map((data) => {
      if (data.gameLevel === currentGame.gameLevel) {
        data.gameScore++;
      }
    });
    const newGamerData = [...gamerData];
    setGamerData(newGamerData);
    console.log(newGamerData);
    startGame();
    return;
  };

  return (
    <>
      {winMatch ? (
        <WinnerContainer movements={movements} onClick={handleWinning} />
      ) : (
        <StyledBoardComponent boardLevel={boardLevel}>
          <div className='upper_content'>
            <p className='movements'>{movements} movimentos</p>
            <button className='restart_icon' onClick={startGame}>
              🔄
            </button>
          </div>
          <div className='board_container'>
            {cards &&
              cards.map((card) => {
                return (
                  <CardComponent
                    key={card.id + Math.random()}
                    card={card}
                    flipped={card === choiceOne || card === choiceTwo || card.matched}
                    wrongCard={wrongCard}
                    onClick={() => handleChoice(card)}
                  >
                    {String.fromCodePoint(card.hexCode)}
                  </CardComponent>
                );
              })}
          </div>
          <div className='lower_content'>
            <p className='difficulty'>
              Nível: <span> - {currentGame.gameScore} </span>
            </p>
          </div>
        </StyledBoardComponent>
      )}
    </>
  );
};
