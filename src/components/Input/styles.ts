import styled from 'styled-components'

export const Container = styled.div`

  input {
    width: 100%;
    height: 3rem;

    border-radius: 0.5rem;
    border: 1px solid #d7d7d7;
    background: var(--shape);
    padding: 0 1.5rem;

    font-weight: 400;
    font-size: 1rem;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: var(--text-body);
    }

    &.error {
      border: 2px solid var(--error);
    }
  }

  small {
    color: var(--error);
    font-size: 0.75rem;
    font-weight: 400;
  }

  & + & {
    margin-top: 1rem;
  }
`
