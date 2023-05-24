import '@testing-library/jest-dom';
import { getByText, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { theme } from '../../styles/Theme';
import { ThemeProvider } from 'styled-components';
import WinnerContainer from '.';

describe('Winner Container', () => {
  it('Should be able to render based on props', () => {
    render(
      <ThemeProvider theme={theme}>
        <WinnerContainer movements={2} onClick={() => console.log('Click')} />
      </ThemeProvider>
    );
    expect(screen.getByText('Com 2 movimentos')).toBeInTheDocument();
    // screen.debug();
  });

  it('Should be able to render with text', () => {
    render(
      <ThemeProvider theme={theme}>
        <WinnerContainer movements={2} onClick={() => console.log('Click')} />
      </ThemeProvider>
    );
  });
});
