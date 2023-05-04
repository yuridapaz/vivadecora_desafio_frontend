/* eslint-disable react-hooks/exhaustive-deps */

import { useState } from 'react';
import { useEffect } from 'react';
import { CardComponent } from '../card';
import { BoardStyle } from './styles';
import axios from 'axios';

export const BoardEasy = () => {
  const [cards, setCards] = useState([]);
  const [emojiList, setEmojiList] = useState([]);
  const [movements, setMovements] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [wrong, setWrong] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setEmojiList(data);
    };

    fetchData();
  }, []);

  // getData
  const getData = async () => {
    const emojiData = await axios
      .get('../../../public/data/emojiData.json')
      .then((res) => res.data);

    return emojiData;
  };

  // sortCards
  const shuffleCards = () => {
    resetTurn();
    const newEmojis = emojiList.sort(() => Math.random() - 0.5).slice(0, 2);
    const newGameEmojis = [...newEmojis, ...newEmojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji) => ({ hexCode: emoji.hexCode, matched: false, id: emoji.id }));

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
    <BoardStyle>
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
    </BoardStyle>
  );
};
