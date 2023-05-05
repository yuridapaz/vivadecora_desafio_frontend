import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
   margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.fonts.roboto};
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

.header {
  margin-bottom: 30px;
}

`;

export default GlobalStyle;
