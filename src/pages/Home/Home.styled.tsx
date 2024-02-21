import styled from "styled-components";

const SCHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  > svg {
    position: absolute;
    z-index: -1;

    &:first-of-type {
      top: 475px;
      left: 0;
    }

    &:last-of-type {
      top: 1725px;
      right: 0;
      transform: rotate(180deg);
    }

    @media screen and (max-width: 1010px) {
      display: none;
    }
  }

  .header {
    --y: 50vh;
    background-color: transparent;
    border-radius: 15px;
    display: grid;
    grid-template-areas: "stack";
    overflow: hidden;
    width: 1111px;
    transition: background-color calc(5 * var(--duration));

    &.visible {
      background: rgb(var(--peach));
    }

    &.anime-exit {
      --time-scale: 2;
    }

    .images,
    .text {
      grid-area: stack;
      width: 100%;
      height: 100%;
      position: relative;
    }

    .images {
      --time-scale: 5;
      display: flex;
      justify-content: flex-end;
      opacity: 0;
      filter: blur(5px);

      .gradient {
        @media screen and (max-width: 1200px) {
          position: absolute;
          top: 101px;
          left: 170px;
        }

        @media screen and (max-width: 700px) {
          top: 102px;
          left: 0;
        }
      }

      .phone {
        position: absolute;
        top: 0;
        right: 0;

        @media screen and (max-width: 1200px) {
          top: 285px;
          right: 50%;
          transform: translate(50%);
        }
      }
    }

    .text {
      color: white;
      display: flex;
      flex-direction: column;
      padding: 145px 95px;

      .fs-h1 {
        width: 500px;
        height: 165px;

        @media screen and (max-width: 700px) {
          width: 100%;
          height: 120px;
        }
      }

      .fs-body {
        width: 450px;
        margin-top: 11px;

        .typing {
          column-gap: 5px;
        }

        @media screen and (max-width: 100px) {
          margin-top: 8px;
        }

        @media screen and (max-width: 700px) {
          width: 100%;
          margin-top: 14px;
        }
      }

      a {
        margin-top: 40px;
        /* opacity: 0; */

        p {
          --y: 50vh;
          --time-scale: 5;
          animation-delay: calc(var(--duration) * 25);
        }

        @media screen and (max-width: 1000px) {
          margin-top: 20px;
        }

        @media screen and (max-width: 700px) {
          margin-top: 24px;
        }
      }

      @media screen and (max-width: 1200px) {
        align-items: center;
        padding: 60px;
      }

      @media screen and (max-width: 700px) {
        padding: 80px 24px;
      }
    }

    @media screen and (max-width: 1200px) {
      width: 690px;
      height: 845px;
    }

    @media screen and (max-width: 700px) {
      width: 100%;
      height: 843px;
      border-radius: 0;
    }
  }

  .links {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    row-gap: 24px;
    column-gap: 30px;
    padding: 160px 0;

    &.out {
      > * {
        --time-scale: 2;
      }
    }

    > * {
      --time-scale: 3;

      &:first-child {
        --x: -50vw;
        grid-column: 1 / 2;
        grid-row: 1 / 3;
      }

      &:nth-child(2) {
        --y: -50vh;

        @media screen and (max-width: 1200px) {
          --y: 0;
          --x: 50vw;
        }
      }

      &:last-child {
        --x: 50vw;

        @media screen and (max-width: 1200px) {
          --x: -50vw;
        }
      }
    }

    @media screen and (max-width: 1200px) {
      display: flex;
      flex-direction: column;
      padding: 120px 0;
    }
  }

  .passions {
    --time-scale: 3;
    display: flex;
    gap: 30px;
    padding-bottom: 380px;

    > * {
      --x: -100vw;

      &:first-child {
        .content {
          animation-delay: 0s;

          &:not(.anime-exit) {
            animation-delay: calc(var(--duration) * 3 / 5);
          }
        }
      }

      &:nth-child(2) {
        --bg-rotation: -90deg;

        .content {
          animation-delay: calc(var(--duration) * 2 / 5);
        }

        @media screen and (max-width: 1110px) {
          --x: 100vw;
        }
      }

      &:last-child {
        --bg-rotation: 90deg;

        .content {
          &.anime-exit {
            animation-delay: calc(var(--duration) * 3 / 5);
          }
        }
      }

      .content {
        @media screen and (max-width: 1110px) {
          animation-delay: 0s;
        }
      }
    }

    @media screen and (max-width: 1110px) {
      flex-direction: column;
      gap: 32px;
    }
  }
`;

export default SCHome;
