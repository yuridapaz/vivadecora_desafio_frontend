import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
  transform: rotateY(180deg);
  animation: 2s hideCard linear;

  @keyframes hideCard {
    0%,
    70% {
      transform: rotateY(0deg);
    }
    100% {
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
