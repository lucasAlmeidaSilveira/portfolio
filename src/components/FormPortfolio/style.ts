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
    margin-bottom: 3.2rem;
    font-size: 4.8rem;

    span {
      color: var(--green);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    padding: 2.4rem;
    border-radius: 5px;
    background: var(--gray-60);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    button {
      background: var(--green);
      color: var(--gray-60);
      font-size: 2rem;
      width: 100%;
    }
  }
`;

export const DivRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10rem;

  div {
    min-width: 32rem;
  }

  img {
    border-radius: 100%;
    border: 4px solid var(--green);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    image-rendering: pixelated;

    width: 17.5rem;
    height: 17.5rem;
  }
`;
