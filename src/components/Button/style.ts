import styled from 'styled-components';

export const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  border: 0;
  border-radius: 0.25rem;

  font-size: 1.4rem;
  font-weight: bold;
  color: var(--white);
  background-color: var(--gray-60);
  padding: 8px 24px;

  &:hover {
    filter: brightness(.8);
  }

  transition: filter 0.2s ease;
`;
