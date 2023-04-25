/* eslint-disable react/prop-types */
import styled from 'styled-components';

export const CardComponent = ({ children, handleChoice, flipped, card }) => {
  return (
    <StyledCard className={flipped ? 'flipped' : ''}>
      <div className='front'> {children} </div>
      <div className='back' onClick={() => handleChoice(card)}></div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;

  /* &.wrong {
    background-color: #ff5656;
  }

  &.correct {
    background-color: #52bd52;
  } */

  .front {
    font-size: 3.5rem;
    position: absolute;
    /* transform: rotateY(90deg); */
    transition: all ease-in 0.2s;
  }

  &.flipped .front {
    transform: translateY(0deg);
    transition-delay: 0.2s;
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

    transition: all ease-in 0.2s;
    transition-delay: 0.2s;
  }

  &.flipped .back {
    transform: rotateY(90deg);
    transition-delay: 0s;
  }
`;
