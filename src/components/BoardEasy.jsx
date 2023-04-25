/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
import { CardComponent } from './CardComponent';

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
  const [cards, setCards] = useState([
    {
      hex: '128022',
      status: '',
    },
    {
      hex: '128153',
      status: '',
    },
    {
      hex: '128153',
      status: '',
    },
    {
      hex: '128022',
      status: '',
    },
  ]);

  const [movements, setMovements] = useState(0);
  const [prev, setPrev] = useState(-1);

  useEffect(() => {
    // handleCards();
  }, []);

  const handleCards = () => {
    const newEmojis = sortAndFindEmojis();
    // Pegar os elementos criados e fazer mais um sort() para o jogo de memória
    const newSortCards = [...newEmojis, ...newEmojis].sort(() => Math.random() - 0.5);
    setCards(newSortCards);
    return;
  };

  const sortAndFindEmojis = () => {
    const newEmojis = emojiList
      // Sort() a lista completa de emojis para ter muitas opções
      .sort(() => Math.random() - 0.5)
      // Pegar os 2 primeiros elementos da lista
      .slice(0, 2)
      // Modificar os elementos e trazer a chave 'status'
      .map((emoji) => ({ hex: emoji, status: '' }));
    return newEmojis;
  };

  const check = (current) => {
    if (current.hex == prev.hex) {
      current.status = 'correct';
      prev.status = 'correct';
      setPrev(-1);
    } else {
      current.status = 'wrong';
      prev.status = 'wrong';
      setCards([...cards]);

      setTimeout(() => {
        current.status = '';
        prev.status = '';
        setCards([...cards]);
        setPrev(-1);
      }, 1000);
    }
  };

  const handleClick = (currentCard) => {
    if (prev === -1) {
      currentCard.status = 'active';
      setCards([...cards]);
      setPrev(currentCard);
    } else {
      check(currentCard);
    }
    console.log(currentCard);
  };

  return (
    <BoardEasyStyle>
      <div className='upper_content'>
        <p className='movements'>{movements} movimentos</p>
        <button className='restart_icon' onClick={handleCards}>
          🔄
        </button>
      </div>
      <div className='board_container'>
        {cards &&
          cards.map((item) => {
            return (
              <CardComponent key={Math.random()} onClick={() => handleClick(item)} item={item}>
                {String.fromCodePoint(item.hex)}
              </CardComponent>
            );
          })}
      </div>
      <div className='lower_content'>
        <p className='difficulty'>
          Nível: <span>Fácil - 14</span>
        </p>
      </div>
    </BoardEasyStyle>
  );
};

const BoardEasyStyle = styled.div`
  color: #fff;
  width: 300px;
  height: 400px;

  .upper_content {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    font-size: 1.2rem;
    font-weight: 700;
    .restart_icon {
      background: none;
      outline: none;
      border: none;
      font-size: 1.5rem;
    }
  }

  .board_container {
    width: 300px;
    height: 300px;
    padding: 1rem;
    background-color: #fff;
    border-radius: 5px;
    margin: 12px auto;
    box-shadow: 4px 4px #000000b4;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem;
  }

  .difficulty {
    text-align: center;
    margin-top: 30px;
    span {
      background-color: #fff;
      padding: 5px;
      border-radius: 5px;
      color: #ff1c1c;
      font-weight: 600;
    }
  }
`;
