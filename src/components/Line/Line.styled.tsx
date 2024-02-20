import styled from "styled-components";

const SCLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  .word {
    display: flex;

    .block {
      --y: -50vh;
      opacity: 0;
      animation-delay: calc(
        2 * var(--duration) + var(--index) * var(--duration) / 5
      );
    }
  }

  @media screen and (max-width: 1200px) {
    justify-content: center;
  }
`;

export default SCLine;
