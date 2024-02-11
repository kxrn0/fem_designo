import styled from "styled-components";

const SCLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  .word {
    display: flex;

    .block {
      animation-delay: calc(
        2 * var(--duration) + var(--index) * var(--duration) / 5
      );
    }
  }
`;

export default SCLine;
