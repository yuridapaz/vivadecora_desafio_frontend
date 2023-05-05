export const theme = {
  colors: {
    primaryTextColor: '#594F43',
    secondaryTextColor: '#777777',
    black: '#000000',
    white: '#fff',
    red: '#ff1c1c',
    background: {
      appBackground: 'linear-gradient(-45deg, #ff1c1c, #ff5656)',
      boardBackground: '#fff',
      cardCurrentBackground: 'blue',
      cardCorrectBackground: '#52bd52',
      cardWrongBackground: '#ff5656',
      // Manter em uma única linha //
      cardFlippedBackground:
        'linear-gradient(135deg, #eceddc 25%, transparent 25%),linear-gradient(225deg, #eceddc 25%, transparent 25%),linear-gradient(315deg, #eceddc 25%, transparent 25%),linear-gradient(45deg, #eceddc 25%, transparent 25%)',
    },
  },
  boxShadow: '4px 4px #000000b4',
  borderRadius: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
  },
  fonts: {
    roboto: " 'Roboto', sans-serif ",
  },
  fontSize: {
    xxxs: '0.5rem',
    xxs: '0.6rem',
    xs: '0.7rem',
    sm: '0.8rem',
    md: '1rem',
    lg: '1.2rem',
    xl: '1.5rem',
    xxl: '2rem',
    xxxl: '2.5rem',
  },
  spacing: {
    xxxs: '4px',
    xxs: '8px',
    xs: '16px',
    sm: '24px',
    md: '32px',
    lg: '40px',
    xl: '48px',
    xxl: '56px',
    xxxl: '64px',
  },
};
