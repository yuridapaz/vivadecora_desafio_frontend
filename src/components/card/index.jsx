/* eslint-disable react/prop-types */
import styled from 'styled-components';

export const CardComponent = ({ children, handleChoice, flipped, card, wrong }) => {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <StyledCard className={flipped ? 'flipped' : ''}>
      <div className={`front ${card.matched ? 'matched' : ''} ${wrong ? 'wrong' : ''}  `}>
        {children}
      </div>
      <div className='back' onClick={handleClick}></div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  border-radius: 5px;
  cursor: pointer;
  position: relative;

  .front {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    font-size: 3.5rem;
    position: absolute;
    transform: rotateY(90deg);
    transition: all ease-in 0.2s;
  }

  &.flipped .front {
    transform: rotateY(0deg);
    transition-delay: 0.2s;
  }

  .matched {
    background-color: #52bd52;
  }

  .wrong {
    background-color: #ff5656;
  }

  .back {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background: linear-gradient(135deg, #eceddc 25%, transparent 25%),
      linear-gradient(225deg, #eceddc 25%, transparent 25%),
      linear-gradient(315deg, #eceddc 25%, transparent 25%),
      linear-gradient(45deg, #eceddc 25%, transparent 25%);
    background-size: 30px 30px;

    transform: rotateY(0deg);
    transition: all ease-in 0.2s;
    transition-delay: 0.2s;
  }

  &.flipped .back {
    transform: rotateY(90deg);
    transition-delay: 0s;
  }
`;