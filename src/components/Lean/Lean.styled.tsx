import styled from "styled-components";

const SCLean = styled.div`
  .content {
    display: grid;
    grid-template-areas: "stack";
    border-radius: 15px;
    overflow: hidden;

    .picture,
    .text {
      grid-area: stack;
      width: 100%;
      height: 100%;
    }

    .picture {
      .image {
        object-fit: cover;
        display: block;
      }
    }

    .text {
      background: rgb(var(--burakku), 0.5);
      color: white;
      display: grid;
      place-items: center;
      align-content: center;
      gap: 24px;
      transition: background-color var(--duration);

      .fs-bag {
        display: flex;
        align-items: center;
        gap: 21px;

        @media screen and (max-width: 700px) {
          gap: 16px;
        }
      }

      @media (hover: hover) {
        &:hover {
          background-color: rgb(var(--peach), 0.8);
        }
      }

      @media screen and (max-width: 700px) {
        gap: 12px;
      }
    }

    @keyframes animate-lean {
      from {
        transform: translate(var(--xOff), var(--yOff));
        opacity: 0;
        filter: blur(5px);
      }

      to {
        transform: translate(0, 0);
        opacity: 1;
        filter: blur(0);
      }
    }
  }
`;

export default SCLean;
