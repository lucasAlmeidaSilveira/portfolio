import styled from 'styled-components';

export const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 20rem;
  width: 100%;
  border: 0;
  border-radius: 0.25rem;

  font-size: 1.4rem;
  font-weight: bold;
  color: var(--white);
  background-color: var(--gray-60);
  padding: 8px 24px;

  &:hover {
    background-color: var(--gray-40);
  }

  transition: background 0.2s ease;
`;
