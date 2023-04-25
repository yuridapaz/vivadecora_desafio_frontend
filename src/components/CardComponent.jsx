/* eslint-disable react/prop-types */
import styled from 'styled-components';

export const CardComponent = ({ children, onClick, item }) => {
  const itemClass = item.status ? 'active ' + item.status : '';

  return (
    <StyledCard onClick={onClick} className={itemClass}>
      <span className='card_icon'>{children}</span>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transform: rotateY(180deg);
  animation: 2s hideCard linear;
  cursor: pointer;
  background: linear-gradient(135deg, #eceddc 25%, transparent 25%),
    linear-gradient(225deg, #eceddc 25%, transparent 25%),
    linear-gradient(315deg, #eceddc 25%, transparent 25%),
    linear-gradient(45deg, #eceddc 25%, transparent 25%);
  background-size: 30px 30px;

  @keyframes hideCard {
    0%,
    70% {
      background: #fff;
      transform: rotateY(0deg);
    }
    100% {
      background: linear-gradient(135deg, #eceddc 25%, transparent 25%),
        linear-gradient(225deg, #eceddc 25%, transparent 25%),
        linear-gradient(315deg, #eceddc 25%, transparent 25%),
        linear-gradient(45deg, #eceddc 25%, transparent 25%);
      background-size: 30px 30px;
      transform: rotateY(180deg);
    }
  }

  &.active {
    transform: rotateY(0deg);
  }

  &.wrong {
    background-color: #ff5656;
  }

  &.correct {
    background-color: #52bd52;
  }

  .card_icon {
    font-size: 5rem;
    transition: transform 0.5s;
    opacity: 0;
    animation: 2s hideEmoji linear;

    @keyframes hideEmoji {
      0%,
      70% {
        transform: rotateY(0deg);
        opacity: 1;
      }
      100% {
        transform: rotateY(180deg);
        opacity: 0;
      }
    }
    &.active .card_icon {
      opacity: 1;
    }
  }
`;
