import CardComponentS from './styles';

export const CardComponent = ({ children, flipped, card, wrongCard, onClick }) => {
  return (
    <CardComponentS className={flipped ? 'flipped' : ''}>
      <div
        className={`front ${card.matched ? 'matched' : ''} ${
          !card.matched && wrongCard ? 'wrongCard' : ''
        }`}
      >
        {children}
      </div>
      <div className='back' onClick={onClick}></div>
    </CardComponentS>
  );
};
