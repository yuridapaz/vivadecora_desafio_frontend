import styled from 'styled-components';

const handleButtonColor = (boardLevel) => {
  switch (boardLevel) {
    case 'easy':
      return '#52bd52';

    case 'medium':
      return '#000000';

    case 'hard':
      return '#ff1c1c';
  }
};

export const ButtonStyled = styled.button`
  width: 250px;
  padding: ${({ theme }) => theme.spacing.xs};
  margin: ${({ theme }) => theme.spacing.xs};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.boxShadow};

  color: ${({ boardLevel }) => handleButtonColor(boardLevel)};

  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;
