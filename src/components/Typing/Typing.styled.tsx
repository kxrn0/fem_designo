import styled from "styled-components";

const SCTyping = styled.div`
  display: flex;
  flex-wrap: wrap;

  .word {
    display: flex;

    .character {
      opacity: 0;

      &.visible {
        animation: appear calc(var(--duration) / 10)
          calc(var(--index) * var(--duration) / 10) forwards;

        @keyframes appear {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }
      }
    }
  }
`;

export default SCTyping;
