import styled from "styled-components";

const SCTyping = styled.div`
  display: flex;
  flex-wrap: wrap;

  .word {
    display: flex;

    .character {
      opacity: 0;

      &.is-typing {
        animation: appear-anime calc(var(--duration) / 10)
          calc(var(--index) * var(--duration) / 10) forwards;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    justify-content: center;
  }
`;

export default SCTyping;
