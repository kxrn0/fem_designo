import styled from "styled-components";

const SCNavbar = styled.div`
  position: relative;
  z-index: 1;

  .scaron {
    position: fixed;
    top: 5px;
    right: 5px;
  }

  .placeholder {
    height: 160px;

    @media screen and (max-width: 700px) {
      height: 94px;
    }
  }

  .overlay {
    display: none;

    @media screen and (max-width: 700px) {
      background-color: transparent;
      display: block;
      position: fixed;
      inset: 0;
      pointer-events: none;
      transition: background-color var(--duration);

      &.open {
        background: rgb(var(--burakku), 0.5);
        pointer-events: all;
      }
    }
  }

  .content {
    background: rgb(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 64px 165px;
    width: 100%;
    transition: padding var(--duration);

    &.scrolled {
      box-shadow: 0 1px 10px 0 rgb(0, 0, 0, 0.1);
      border-bottom: 1px solid rgb(255, 255, 255, 0.5);
      padding: 32px 80px;

      @media screen and (max-width: 1000px) {
        padding: 20px;
      }
    }

    .head {
      display: flex;
      justify-content: space-between;
      width: 100%;

      .logo {
        width: 196px;
      }

      .toggle {
        --c: 0.41421;
        width: 24px;
        height: 24px;
        position: relative;
        display: none;

        input[type="checkbox"] {
          appearance: none;
          position: absolute;
          inset: 0;

          &:checked ~ .line:first-of-type {
            transform: rotate(45deg)
              translate(calc(100% * var(--c) / 2), calc(-1 * var(--h) / 2));
          }

          &:checked ~ .line:nth-of-type(2) {
            transform: translate(-100%);
            opacity: 0;
          }

          &:checked ~ .line:last-of-type {
            transform: rotate(-45deg)
              translate(calc(100% * var(--c) / 2), calc(var(--h) / 2));
          }
        }

        .line {
          --h: 4px;
          background: rgb(var(--burakku));
          width: 100%;
          height: var(--h);
          position: absolute;
          left: 0;
          transition: transform var(--duration), opacity var(--duration);

          &:first-of-type {
            top: 0;
            transform-origin: left top;
          }

          &:nth-of-type(2) {
            top: 50%;
            transform: translate(0, -50%);
          }

          &:last-of-type {
            bottom: 0;
            transform-origin: left bottom;
          }
        }

        @media screen and (max-width: 700px) {
          display: block;
        }
      }
    }

    .links {
      display: flex;
      gap: 42px;

      a {
        p {
          width: max-content;
          color: rgb(var(--dark-gray));
          font-family: jost;
          font-weight: 400;
          font-size: 14px;
          letter-spacing: 2px;

          @media (hover: hover) {
            &:after {
              content: "";
              display: block;
              background: rgb(var(--dark-gray));
              width: 100%;
              height: 1px;
              opacity: 0;
              transition: opacity var(--duration);
            }

            &:hover {
              &::after {
                opacity: 1;
              }
            }
          }

          @media screen and (max-width: 700px) {
            color: white;
            font-size: 24px;
            line-height: 25px;
          }
        }
      }

      @media screen and (max-width: 700px) {
        background-color: rgb(var(--burakku));
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        flex-direction: column;
        gap: 32px;
        padding: 48px 24px;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-100px);
        pointer-events: none;

        &.open {
          animation: open-links var(--duration) forwards;

          @keyframes open-links {
            from {
              opacity: 0;
              visibility: hidden;
              transform: translateY(-100px);
              pointer-events: none;
            }

            to {
              opacity: 1;
              visibility: visible;
              transform: translateY(0);
              pointer-events: all;
            }
          }
        }

        &.closed.mounted {
          animation: close-links var(--duration) forwards;

          @keyframes close-links {
            from {
              opacity: 1;
              visibility: visible;
              transform: translateY(0);
              pointer-events: all;
            }

            to {
              opacity: 0;
              visibility: hidden;
              transform: translateY(-100px);
              pointer-events: none;
            }
          }
        }
      }
    }

    @media screen and (max-width: 1000px) {
      padding: 64px 40px;
    }

    @media screen and (max-width: 700px) {
      background-color: white;
      padding: 35px 24px;
    }
  }
`;

export default SCNavbar;
