/* eslint-disable react-hooks/exhaustive-deps */

import { useState } from 'react';
import { useEffect } from 'react';
import { CardComponent } from '../card';
import { BoardComponent } from './styles';
import emojiData from '../../data/emojiData.json';

export const BoardEasy = () => {
  const [cards, setCards] = useState([]);
  const [movements, setMovements] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [wrong, setWrong] = useState(false);

  const venceu = cards.every((card) => card.matched === true);
  console.log(venceu);

  useEffect(() => {
    shuffleCards();
  }, []);

  // sortCards
  const shuffleCards = () => {
    resetTurn();

    const sortEmojis = emojiData.sort(() => Math.random() - 0.5).slice(0, 2);
    const gameEmojis = [...sortEmojis, ...sortEmojis]
      .map((emoji) => ({
        ...emoji,
        matched: false,
      }))
      .sort(() => Math.random() - 0.5);

    setCards(gameEmojis);
    setMovements(0);
    return;
  };

  // handleClick
  const handleChoice = (card) => {
    if (choiceOne && choiceTwo) return;
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // handleChoice
  useEffect(() => {
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
        resetTurn();
      } else {
        setWrong(true);
        setTimeout(() => {
          resetTurn();
          setWrong(false);
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // resetTurn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setMovements((prev) => prev + 1);
  };

  return (
    <BoardComponent>
      <div className='upper_content'>
        <p className='movements'>{movements} movimentos</p>
        <button className='restart_icon' onClick={shuffleCards}>
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
                wrong={wrong}
                handleChoice={handleChoice}
              >
                {String.fromCodePoint(card.hexCode)}
              </CardComponent>
            );
          })}
      </div>
      <div className='lower_content'>
        <p className='difficulty'>
          Nível: <span>Fácil - 14</span>
        </p>
      </div>
    </BoardComponent>
  );
};
