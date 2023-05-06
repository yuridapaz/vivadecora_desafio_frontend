// import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BoardLevels } from './components/levels';
import GlobalStyle from './styles/Global';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';
import GameContextProvider from './context/GameContext';
import { BoardComponent } from './components/board';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <BoardLevels />,
      },
      {
        path: 'facil',
        element: <BoardComponent boardLevel={'easy'} />,
      },
      {
        path: 'medio',
        element: <BoardComponent boardLevel={'medium'} />,
      },
      {
        path: 'dificil',
        element: <BoardComponent boardLevel={'hard'} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <GameContextProvider>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </GameContextProvider>
  // </React.StrictMode>
);
