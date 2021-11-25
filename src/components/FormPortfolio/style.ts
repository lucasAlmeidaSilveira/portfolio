import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1080px;
  margin: 12rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: var(--white);

    span {
      color: var(--green);
    }
  }
`;
