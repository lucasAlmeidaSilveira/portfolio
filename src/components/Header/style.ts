import styled from 'styled-components';

export const Container = styled.header`
  max-width: 1080px;
  margin: 0 auto;
  padding: 3.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: var(--white);
  }

  .logo {
    font-weight: 700;
    font-size: 2.6rem;
    
    transition: .2s ease;
    
    &:hover{
      color: var(--green);
    }
  }
  
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    
    a {
      font-size: 1.8rem;
      
      transition: .2s ease;
      
      &:hover {
        color: var(--green);
        filter: brightness(.8);
      }
    }

    li + li {
      margin-left: 3rem;
    }
  }
`;
