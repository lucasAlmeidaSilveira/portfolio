import styled from 'styled-components';

export const Container = styled.article`
  max-width: 1080px;
  margin: 12rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 3.2rem;
    color: var(--white);
    margin-bottom: 3rem;
  }
`;

export const BoxServices = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 4.5rem;

  div{
    width: min-content;
    min-width: 30rem;
  }
`;

export const ServiceBox = styled.div`
  display: flex;
  flex-direction: column;

  padding: 3rem;

  background-color: var(--gray-60);
  border-bottom: 5px solid var(--green);
  
  transition: all .2s ease;
  
  &:hover {
    background-color: var(--gray-40);
    transform: translateY(-1rem);
  }

  svg {
    color: var(--green);
    font-size: 5rem;
    margin-bottom: 4rem;
  }

  h3 {
    width: 50%;
    font-size: 3.2rem;
    font-weight:500;
    color: var(--gray-20);
  }
`;
