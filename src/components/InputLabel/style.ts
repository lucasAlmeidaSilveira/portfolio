import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  margin-bottom: .8rem;

  font-size: 1.4rem;
  font-weight: bold;
  line-height: 1.6rem;
  color: var(--green);

  input {
    margin-top: .4rem;
    padding: 8px 16px;
    max-width: 20rem;
    background: var(--white);
    font-weight: bold;
    font-size: 1.6rem;
    color: var(--gray-20);
    border-radius: 5px;
    border: 0;

    transition: all 0.2 ease;

    &:hover {
      background: #ffffff;
    }
    
    &:focus {
      background: #ffffff;
      color: var(--gray-60);
    }
  }
`;
