import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BoardLevels } from './components/levels';
import { BoardEasy } from './components/board';
import GlobalStyle from './styles/Global';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';

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
        element: <BoardEasy />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
