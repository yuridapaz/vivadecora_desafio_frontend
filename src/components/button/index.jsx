import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: 250px;
  padding: ${({ theme }) => theme.spacing.xs};
  margin: ${({ theme }) => theme.spacing.xs};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${(props) => props.color || '#000000'};
  font-size: 1.2rem;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;
