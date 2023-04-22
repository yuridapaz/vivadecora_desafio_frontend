/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import { CardComponent } from './CardComponent';
import { useState } from 'react';

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
  const [cards, setCards] = useState(['127851', '127868', '127851', '127868']);
  // eslint-disable-next-line no-unused-vars
  const [movements, setMovements] = useState(0);

  const handleCards = () => {
    setMovements(movements + 1);

    console.log(cards);
    return;
  };

  return (
    <BoardEasyStyle>
      <div className='upper_content'>
        <p className='movements'>{movements} movimentos</p>
        <span className='upper_icon' onClick={handleCards}>
          🔄
        </span>
      </div>
      <div className='board_container'>
        {cards &&
          cards.map((elem) => {
            return <CardComponent key={elem}>{String.fromCodePoint(elem)}</CardComponent>;
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

  .upper_content {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    font-size: 1.2rem;
    font-weight: 700;
    .upper_icon {
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
