import styled from 'styled-components';

export const Container = styled.article`
  max-width: 1080px;
  margin: 12rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    color: var(--white);
    font-size: 3.2rem;
    margin-bottom: 3rem;
  }

  p {
    max-width: 700px;
    padding: 0 1rem;
    font-size: 1.8rem;
    font-weight: 400;
    color: var(--gray-20);
    line-height: 3.2rem;
    text-align: center;
  }
`;

export const Contact = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 8rem auto 0;
  flex-wrap: wrap;

`;

export const ContactBox = styled.a`
  padding: 3rem;
  min-width: 25rem;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: all .2s ease;

  &:hover {
    background-color: var(--gray-60);
  }

  svg {
    width: 62px;
    height: 62px;
    padding: 1.5rem;
    margin-bottom: 1.9rem;
    border-radius: 50%;

    background-color: var(--gray-60);
    color: var(--green);
  }

  h4 {
    color: var(--white);
    font-weight: 700;
    font-size: 1.8rem;

    & + p {
      color: var(--gray-20);
      font-size: 1.6rem;
      margin-top: 0.5rem;
    }
  }
`;
