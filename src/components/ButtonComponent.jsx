import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: 250px;
  padding: 15px;
  margin: 15px;
  border: none;
  border-radius: 10px;
  box-shadow: 3px 3px #000000b4;
  color: ${(props) => props.btnColor || '#000000'};
  font-size: 1.2rem;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;
