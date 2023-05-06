import { ButtonStyled } from '../button';
import { StyledWinnerContainer } from './style';

function WinnerContainer({ movements, onClick }) {
  return (
    <StyledWinnerContainer>
      <i className='container_icon'>✅</i>
      <h1 className='container_text'>Parabéns! Você conseguiu!</h1>
      <p className='container_span_text'>Com {movements} movimentos</p>
      <ButtonStyled onClick={onClick}>Jogar novamente</ButtonStyled>
    </StyledWinnerContainer>
  );
}

export default WinnerContainer;
