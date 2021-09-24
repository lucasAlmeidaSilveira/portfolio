import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1080px;
  margin: 10rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentBanner = styled.div`
  p:first-child {
    color: var(white);
    font-size: 36px;
    font-weight: 700;

    span {
      color: var(--green);
    }

    & + p {
      color: var(--gray-20);
      font-size: 18px;

      margin: 1.4rem 0 3.5rem;
    }
  }

  button {
    padding: 1.2rem 2.7rem;
    border: 0;
    font-weight: 500;
    font-size: 1.6rem;
    transition: 0.2s ease;
    background: var(--green);
    color: var(--gray-60);
    
    & + button {
      margin-left: 1.5rem;
      border: 1px solid var(--gray-40);
      background: transparent;
      color: var(--white);
    }

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
