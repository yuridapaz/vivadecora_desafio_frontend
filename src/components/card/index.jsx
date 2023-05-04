/* eslint-disable react/prop-types */

import CardStyled from './styles';

export const CardComponent = ({ children, handleChoice, flipped, card, wrong }) => {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <CardStyled className={flipped ? 'flipped' : ''}>
      <div className={`front ${card.matched ? 'matched' : ''} ${wrong ? 'wrong' : ''}  `}>
        {children}
      </div>
      <div className='back' onClick={handleClick}></div>
    </CardStyled>
  );
};
