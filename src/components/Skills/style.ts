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

export const BoxSkills = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 4.5rem;
`;

export const SkillBox = styled.div`
  padding: 3.5rem;
  background: var(--gray-60);
  text-align: center;

  transition: all 0.2s ease;

  &:hover {
    background: var(--gray-40);
    transform: scale(1.02);
  }

  svg {
    font-size: 8rem;
    color: var(--green);
  }
`;
