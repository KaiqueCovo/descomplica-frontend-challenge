import styled from "styled-components";

export const Container = styled.header`
    background: var(--green);
`;

export const Content = styled.div`

    img {
      @media (max-width: 720px) {
        width: 35vw
      }
    }

    max-width: 1440px;
    margin: 0 auto;

    padding: 1.875rem 4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 720px) {
      padding: 1.875rem 2rem;
    }

    button {
      width: 8.125rem;

      font-size: 0.875rem;
      font-weight: 600;
      color: var(--text-body);

      border-radius: 1.5rem;
      border: 1px solid var(--text-body);
      background: var(--green);
      padding: 0.6rem 0;

      transition: all 0.25s ease 0s;

      &:hover {
        background: var(--shape);
        border: 1px solid var(--shape);
      }
    }
`
