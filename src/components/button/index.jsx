import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: 250px;
  padding: ${({ theme }) => theme.spacing.xs};
  margin: ${({ theme }) => theme.spacing.xs};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${(props) => props.color || '#000000'};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;
