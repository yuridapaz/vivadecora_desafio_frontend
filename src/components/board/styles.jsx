import styled from 'styled-components';

export const BoardStyle = styled.div`
  color: ${({ theme }) => theme.colors.white};
  width: 300px;
  height: 400px;

  .upper_content {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    font-size: 1.2rem;
    font-weight: 700;
    .restart_icon {
      background: none;
      outline: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }

  .board_container {
    box-sizing: border-box;
    width: 300px;
    height: 300px;
    padding: ${({ theme }) => theme.spacing.xxs};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius.xs};
    margin: 12px auto;
    box-shadow: ${({ theme }) => theme.boxShadow};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 0.5rem;
  }

  .difficulty {
    text-align: center;
    margin-top: ${({ theme }) => theme.spacing.md};
    span {
      background-color: ${({ theme }) => theme.colors.white};
      padding: ${({ theme }) => theme.spacing.xxxs};
      border-radius: ${({ theme }) => theme.spacing.xxxs};
      color: ${({ theme }) => theme.colors.red};
      font-weight: 600;
    }
  }
`;
