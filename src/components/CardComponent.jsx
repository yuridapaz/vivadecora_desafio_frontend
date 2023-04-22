import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transform: rotateY(180deg);
  animation: 2s hideCard linear;
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
  }
`;

// eslint-disable-next-line react/prop-types
export const CardComponent = ({ children }) => {
  return (
    <StyledCard>
      <span className='card_icon'> {children} </span>
    </StyledCard>
  );
};
