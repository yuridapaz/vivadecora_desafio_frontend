import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonStyled } from './ButtonComponent';

const BoardLevelsStyle = styled.div`
  width: 80%;
  max-width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .board_link {
    align-self: center;
    text-decoration: none;
  }
`;

const BoardLevels = () => {
  return (
    <BoardLevelsStyle>
      <Link className='board_link' to='/facil'>
        <ButtonStyled btnColor='green'>👶 Fácil </ButtonStyled>
      </Link>
      <Link className='board_link' to='/medio'>
        <ButtonStyled>👦 Normal</ButtonStyled>
      </Link>
      <Link className='board_link' to='/dificil'>
        <ButtonStyled btnColor='red'>🤯 Difícil</ButtonStyled>
      </Link>
    </BoardLevelsStyle>
  );
};

export default BoardLevels;
