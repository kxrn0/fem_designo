import styled from "styled-components";

const SCApp = styled.div`
  --peach: 231, 129, 107;
  --light-peach: 255, 173, 155;
  --burakku: 29, 28, 30;
  --light-gray: 241, 243, 245;
  --dark-gray: 51, 49, 54;
  --duration: 0.33s;
  --dx: 0;
  --dy: 0;
  --d-time-scale: 1;

  overflow: hidden;

  .fs-h1,
  .fs-h2,
  .fs-h3,
  .fs-body,
  .fs-bag {
    font-family: jost;
  }

  .fs-h1,
  .fs-h2,
  .fs-h3 {
    font-weight: 500;
  }

  .fs-h1,
  .fs-h2 {
    line-height: 48px;
  }

  .fs-h1 {
    font-size: 48px;

    @media screen and (max-width: 700px) {
      font-size: 32px;
      line-height: 36px;
    }
  }

  .fs-h2 {
    font-size: 40px;
    letter-spacing: 2px;

    @media screen and (max-width: 700px) {
      font-size: 28px;
      line-height: 36px;
      letter-spacing: 1.4px;
    }
  }

  .fs-h3 {
    font-size: 20px;
    letter-spacing: 5px;
  }

  .fs-h3,
  .fs-body {
    line-height: 26px;
  }

  .fs-body,
  .fs-bag {
    font-weight: 400;
  }

  .fs-body {
    font-size: 16px;

    @media screen and (max-width: 700px) {
      font-size: 15px;
      line-height: 25px;
    }
  }

  /* the motherfucking designer didn't specify this font on the design system */
  .fs-bag {
    font-size: 15px;
    letter-spacing: 5px;
  }

  .button-primary {
    font-family: jost;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 1px;
    padding: 18px 25px;
    padding-bottom: 16px;
    border-radius: 8px;
    width: fit-content;
    user-select: none;
    transition: background-color var(--duration), color var(--duration);

    &.light {
      background-color: white;
      color: rgb(var(--dark-gray));
    }

    &.dark {
      background-color: rgb(var(--peach));
      color: white;
    }

    @media (hover: hover) {
      &:hover {
        background-color: rgb(var(--light-peach));
        color: white;
      }
    }
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  .invisible {
    opacity: 0;
    filter: blur(5px);
  }

  /* anime */

  .anime-enter {
    transform: translate(var(--x, var(--dx)), var(--y, var(--dy)));
    opacity: 0;
    filter: blur(5px);
    animation: enter-anime
      calc(var(--duration) * var(--time-scale, var(--d-time-scale))) forwards;

    @keyframes enter-anime {
      from {
        transform: translate(var(--x, var(--dx)), var(--y, var(--dy)));
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

  .anime-exit {
    transform: translate(0, 0);
    opacity: 1;
    filter: blur(0);
    animation: exit-anime
      calc(var(--duration) * var(--time-scale, var(--d-time-scale)));

    @keyframes exit-anime {
      from {
        transform: translate(0, 0);
        opacity: 1;
        filter: blur(0);
      }

      to {
        transform: translate(var(--x, var(--dx)), var(--y, var(--dy)));
        opacity: 0;
        filter: blur(5px);
      }
    }
  }

  .anime-appear {
    opacity: 0;
    filter: blur(5px);
    animation: appear-anime
      calc(var(--duration) * var(--time-scale, var(--d-time-scale))) forwards;

    @keyframes appear-anime {
      from {
        filter: blur(5px);
        opacity: 0;
      }

      to {
        filter: blur(0);
        opacity: 1;
      }
    }
  }
`;

export default SCApp;
