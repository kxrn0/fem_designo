import styled from "styled-components";

const SCTyping = styled.div`
  display: flex;
  flex-wrap: wrap;

  .word {
    display: flex;

    .character {
      --time-scale: 1 / 10;
      opacity: 0;
      animation-delay: calc(var(--index) * var(--duration) / 10);
    }
  }

  @media screen and (max-width: 1200px) {
    justify-content: center;
  }
`;

export default SCTyping;
