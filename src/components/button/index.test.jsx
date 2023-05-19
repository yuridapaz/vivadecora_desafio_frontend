import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { ButtonStyled } from '.';
import { theme } from '../../styles/Theme';

describe('Button', () => {
  test('Button should render', () => {
    const { debug } = render(
      <ButtonStyled theme={theme} boardLevel={'easy'}>
        Test Btn
      </ButtonStyled>
    );
    debug();
  });
});
