import styled from "styled-components";

const SCApp = styled.div`
  --peach: 231, 129, 107;
  --light-peach: 255, 173, 155;
  --burakku: 29, 28, 30;
  --light-gray: 241, 243, 245;
  --dark-gray: 51, 49, 54;
  --duration: 0.33s;

  .fs-h1,
  .fs-h2,
  .fs-h3,
  .fs-body {
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
  }

  .fs-h2 {
    font-size: 40px;
    letter-spacing: 2px;
  }

  .fs-h3 {
    font-size: 20px;
    letter-spacing: 5px;
  }

  .fs-h3,
  .fs-body {
    line-height: 26px;
  }

  .fs-body {
    font-size: 16px;
    font-weight: 400;
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

  /* anime */

  .anime-from-above {
    opacity: 0;
    filter: blur(5px);
    transform: translateY(-50vh);
    animation: from-above-anime calc(var(--duration) / 5) forwards;

    @keyframes from-above-anime {
      from {
        opacity: 0;
        filter: blur(5px);
        transform: translateY(-50vh);
      }

      to {
        opacity: 1;
        filter: blur(0);
        transform: translateY(0);
      }
    }
  }
`;

export default SCApp;
