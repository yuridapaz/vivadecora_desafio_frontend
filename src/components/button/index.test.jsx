import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, test, vi } from 'vitest';

import { ButtonStyled } from '.';
import { theme } from '../../styles/Theme';

describe('Button', () => {
  beforeEach(() => {
    render(
      <ButtonStyled theme={theme} data-testid='button-test-id'>
        Texto
      </ButtonStyled>
    );
  });

  test('Should be able to render based on the children prop', () => {
    expect(screen.getByTestId('button-test-id')).toHaveTextContent('Texto');
  });
});
