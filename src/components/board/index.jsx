/* eslint-disable react-hooks/exhaustive-deps */

import { useState } from 'react';
import { useEffect } from 'react';
import { CardComponent } from '../card';
import { BoardComponent } from './styles';

// Mock
const emojiList = [
  '9200',
  '9889',
  '9917',
  '9924',
  '11088',
  '127770',
  '127774',
  '127775',
  '127797',
  '127800',
  '127804',
  '127817',
  '127821',
  '127820',
  '127826',
  '127838',
  '127846',
  '127852',
  '127851',
  '127868',
  '127875',
  '127877',
  '127880',
  '127881',
  '127890',
  '127929',
  '127936',
  '127952',
  '127968',
  '128001',
  '128008',
  '128018',
  '128010',
  '128022',
  '128027',
  '128028',
  '128029',
  '128039',
  '128055',
  '128056',
  '128059',
  '128063',
  '128123',
  '128154',
  '128153',
  '128156',
  '128293',
  '128512',
  '128526',
  '128640',
  '128663',
  '128690',
  '129302',
  '129365',
  '129382',
  '129409',
  '129419',
  '129497',
  '129430',
  '129412',
];

export const BoardEasy = () => {
  const [cards, setCards] = useState([]);
  const [movements, setMovements] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [wrong, setWrong] = useState(false);

  useEffect(() => {
    shuffleCards();
  }, []);

  // sortCards
  const shuffleCards = () => {
    const newEmojis = emojiList.sort(() => Math.random() - 0.5).slice(0, 2);
    const newGameEmojis = [...newEmojis, ...newEmojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji) => ({ hexCode: emoji, matched: false, id: Math.random() }));

    setCards(newGameEmojis);
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
                key={card.id}
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
