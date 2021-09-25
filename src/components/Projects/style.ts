import styled from 'styled-components';

export const Container = styled.article`
  max-width: 1080px;
  margin: 12rem auto;
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

export const BoxProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem;

  @media (max-width: 1080px) {
    & {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 780px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`

export const ProjectBox = styled.div`
  max-width: 40rem;
  height: 24rem;
  padding: 2rem 2.5rem;
  border-radius: .5rem;

  background: var(--gray-60);

  cursor: pointer;

  transition: all .2s ease;

  &:hover {
    background: var(--gray-40);
    transform: scale(1.02);
  }


  
  img {
    width: 31rem;
    height: 13rem;
    margin-bottom: 2.3rem;
    object-fit: cover;
    
    background: var(--background);
  }

  h4 {
    font-weight: 500;
    font-size: 1.8rem;

    color: var(--white);
  }

  p {
    font-weight: 400;
    font-size: 1.4rem;

    color: var(--gray-20);

    margin-top: .6rem;
  }
  
`;