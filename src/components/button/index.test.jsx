import '@testing-library/jest-dom';
import 'jest-styled-components';
import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import renderer from 'react-test-renderer';
import { ButtonStyled } from '.';
import { theme } from '../../styles/Theme';

describe('Button', () => {
  beforeEach(() => {
    render(
      <ButtonStyled theme={theme} data-testid='button-test-id' boardLevel={'medium'}>
        Texto
      </ButtonStyled>
    );
  });

  it('Should be able to render based on the children prop', () => {
    expect(screen.getByTestId('button-test-id')).toHaveTextContent('Texto');
  });
});

describe('Button with Styled Components', () => {
  it('Should be able to present styled components properties', () => {
    const testTree = renderer
      .create(
        <ButtonStyled theme={theme} data-testid='button-test-id' boardLevel={'medium'}>
          Texto
        </ButtonStyled>
      )
      .toJSON();
    expect(testTree).toMatchSnapshot();
    expect(testTree).toHaveStyleRule('color', '#000000');
    expect(testTree).toHaveStyleRule('width', '250px');
  });
});
