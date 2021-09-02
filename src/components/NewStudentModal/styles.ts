import styled from 'styled-components'

export const Container = styled.form`
  h2 {
    font-size: 1.5rem;
    color: var(--text-title);
    text-align: center;

    margin-bottom: 2rem;
    border-bottom: 2px solid var(--spring-green);
  }

  input {
    width: 100%;
    height: 3rem;

    border-radius: 0.5rem;
    border: 1px solid #d7d7d7;
    background: var(--shape);
    padding: 0 1.5rem;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    height: 3rem;

    background: var(--spring-green);
    color: var(--text-title);
    border: 0;
    border-radius: 2.5rem;
    margin-top: 1.5rem;

    font-size: 1rem;
    font-weight: 600;

    transition: background 0.2s;

    &:hover {
      background: var(--spring-green-hover);
    }
  }
`
