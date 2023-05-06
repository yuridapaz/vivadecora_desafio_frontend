import styled from 'styled-components';

const CardComponentS = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  cursor: pointer;
  position: relative;

  .front {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background.cardCurrentBackground};
    border-radius: ${({ theme }) => theme.borderRadius.xs};
    font-size: 3.5rem;
    position: absolute;
    transform: rotateY(90deg);
    transition: all ease 0.2s;
  }

  &.flipped .front {
    transform: rotateY(0deg);
    transition-delay: 0.2s;
  }

  .matched {
    background-color: #52bd52;
  }

  .wrongCard {
    background-color: #ff5656;
  }

  .back {
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.xs};
    background: ${({ theme }) => theme.colors.background.cardFlippedBackground};
    background-size: 34px 34px;
    transform: rotateY(0deg);
    transition: all ease 0.2s;
    transition-delay: 0.2s;
  }

  &.flipped .back {
    transform: rotateY(90deg);
    transition-delay: 0;
  }
`;

export default CardComponentS;
