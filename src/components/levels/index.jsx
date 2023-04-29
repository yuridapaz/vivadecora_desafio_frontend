import { Link } from 'react-router-dom';
import { ButtonStyled } from '../button';
import LevelContainer from './styles';

export const BoardLevels = () => {
  return (
    <LevelContainer>
      <Link className='board_link' to='/facil'>
        <ButtonStyled color='green'>👶 Fácil </ButtonStyled>
      </Link>
      <Link className='board_link' to='/medio'>
        <ButtonStyled>👦 Normal</ButtonStyled>
      </Link>
      <Link className='board_link' to='/dificil'>
        <ButtonStyled color='red'>🤯 Difícil</ButtonStyled>
      </Link>
    </LevelContainer>
  );
};
