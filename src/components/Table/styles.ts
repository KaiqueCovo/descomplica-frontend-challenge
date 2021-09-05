import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
`;


export const Content = styled.div`
  overflow-x: auto;

  table {
    width: 100%;

    th {
      color: var(--text-body);
      padding: 1rem 2rem;
      font-weight: 600;
      text-align: left;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
    }
  }
`;
