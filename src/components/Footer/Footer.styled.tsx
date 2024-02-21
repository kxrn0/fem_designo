import styled from "styled-components";

const SCFooter = styled.footer`
  background-color: rgb(var(--burakku));
  padding: 145px 165px;
  padding-bottom: 75px;
  position: relative;

  &.in-contacts {
    padding: 75px 165px;

    @media screen and (max-width: 1111px) {
      padding: 80px 40px;
    }

    @media screen and (max-width: 700px) {
      padding: 64px 24px;
    }
  }

  .pseudofooter {
    --time-scale: 3;
    background-color: rgb(var(--peach));
    color: white;
    display: grid;
    grid-template-areas: "stack";
    width: 1111px;
    height: 292px;
    overflow: hidden;
    position: absolute;
    top: -220px;
    left: 50%;
    transform: translate(-50%);
    border-radius: 15px;

    > * {
      grid-area: stack;
    }

    svg {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0, -50%);

      @media screen and (max-width: 1111px) {
        right: -20%;
      }
    }

    .content {
      display: grid;
      grid-template-columns: auto auto;
      grid-template-rows: auto auto;
      z-index: 1;
      padding: 72px 95px;

      .fs-h2 {
        width: 300px;
        line-height: 40px;

        @media screen and (max-width: 700px) {
          width: auto;
        }
      }

      .fs-body {
        width: 460px;
        align-self: end;

        @media screen and (max-width: 1111px) {
          margin: 24px 0 32px 0;
          align-self: center;
        }

        @media screen and (max-width: 700px) {
          width: auto;
        }
      }

      a {
        grid-column: 2 / 3;
        grid-row: 1 / 3;
        align-self: center;
        justify-self: end;
      }

      @media screen and (max-width: 1111px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 58px;
      }

      @media screen and (max-width: 700px) {
        padding: 64px 24px;
      }
    }

    @media screen and (max-width: 1111px) {
      width: 700px;
      height: auto;
      top: -270px;
    }

    @media screen and (max-width: 700px) {
      width: 330px;
      top: -190px;
    }
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(255, 255, 255, 0.1);
    padding-bottom: 40px;

    .image {
      width: 202px;

      @media screen and (max-width: 700px) {
        padding-bottom: 32px;
        border-bottom: 1px solid rgb(255, 255, 255, 0.1);
      }
    }

    .links {
      display: flex;
      gap: 42px;

      a {
        color: white;

        p {
          @media (hover: hover) {
            &:after {
              content: "";
              display: block;
              background-color: white;
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
        }
      }

      @media screen and (max-width: 700px) {
        flex-direction: column;
        align-items: center;
        gap: 32px;
        padding-top: 32px;
      }
    }

    @media screen and (max-width: 700px) {
      flex-direction: column;
      border: none;
    }
  }

  .bottom {
    color: rgb(255, 255, 255, 0.5);
    display: flex;
    gap: 200px;
    padding-top: 32px;

    .unbold,
    .bold {
      font-weight: 700;
    }

    .unbold {
      @media screen and (max-width: 700px) {
        font-weight: 400;
      }
    }

    .socials {
      flex-grow: 1;

      display: flex;
      justify-content: end;
      align-items: end;
      gap: 16px;

      svg {
        @media (hover: hover) {
          &:hover {
            path {
              fill: rgb(var(--light-peach));
            }
          }
        }

        path {
          transition: fill var(--duration);
        }
      }
    }

    @media screen and (max-width: 1350px) {
      gap: 60px;
    }

    @media screen and (max-width: 760px) {
      gap: 20px;
    }

    @media screen and (max-width: 700px) {
      padding-top: 0;
      flex-direction: column;
      align-items: center;
      gap: 40px;
      text-align: center;
    }
  }

  @media screen and (max-width: 1111px) {
    padding: 165px 40px;
    padding-bottom: 80px;
  }

  @media screen and (max-width: 700px) {
    padding: 255px 24px;
    padding-bottom: 64px;
  }
`;

export default SCFooter;
