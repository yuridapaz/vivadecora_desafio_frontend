import { Link } from 'react-router-dom';
import { ButtonStyled } from '../button';
import LevelContainer from './styles';

export const BoardLevels = () => {
  return (
    <LevelContainer>
      <Link className='board_link' to='/facil'>
        <ButtonStyled boardLevel={'easy'}>👶 Fácil </ButtonStyled>
      </Link>
      <Link className='board_link' to='/medio'>
        <ButtonStyled boardLevel={'medium'}>👦 Normal</ButtonStyled>
      </Link>
      <Link className='board_link' to='/dificil'>
        <ButtonStyled boardLevel={'hard'}>🤯 Difícil</ButtonStyled>
      </Link>
    </LevelContainer>
  );
};
