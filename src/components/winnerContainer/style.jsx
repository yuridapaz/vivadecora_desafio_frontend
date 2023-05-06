import styled from 'styled-components';

export const StyledWinnerContainer = styled.div`
  width: 80%;
  max-width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};

  .container_icon {
    font-synthesis: none;
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }

  .container_text {
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }

  .container_span_text {
    font-size: ${({ theme }) => theme.fontSize.md};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
`;
