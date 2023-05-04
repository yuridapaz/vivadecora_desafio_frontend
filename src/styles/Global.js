import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

 * {
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

.app {
  min-height: 100vh;
  height: 100%;
  width: 100vw;
  background: linear-gradient(-45deg, #ff1c1c, #ff5656);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


`;

export default GlobalStyle;
