import styled from "styled-components";

const SCPassion = styled.div`
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    text-align: center;

    .image {
      display: grid;
      grid-template-areas: "stack";
      width: fit-content;

      svg {
        grid-area: stack;

        &:first-child {
          transform: rotate(var(--bg-rotation, 0));
        }

        &:last-child {
          z-index: 1;
        }
      }

      @media screen and (max-width: 1110px) {
        grid-column: 1 / 2;
        grid-row: 1 / 3;
      }
    }

    .fs-h3 {
      margin-top: 48px;

      @media screen and (max-width: 1110px) and (min-width: 690px) {
        align-self: end;
        margin-top: 0;
      }
    }

    .fs-body {
      margin-top: 32px;

      @media screen and (max-width: 1110px) and (min-width: 690px) {
        align-self: start;
        margin-top: 0;
      }
    }

    @media screen and (max-width: 1110px) and (min-width: 690px) {
      display: grid;
      grid-template-columns: auto auto;
      grid-template-rows: auto auto;
      row-gap: 16px;
      column-gap: 48px;
      width: 690px;
      text-align: start;
    }

    @media screen and (max-width: 690px) {
      width: 330px;
    }
  }
`;

export default SCPassion;
