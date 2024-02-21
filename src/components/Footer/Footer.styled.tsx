import styled from "styled-components";

const SCFooter = styled.footer`
  background-color: rgb(var(--burakku));
  padding: 145px 165px;
  padding-bottom: 75px;
  position: relative;

  .pseudofooter {
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

        @media screen and (max-width: 690px) {
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

        @media screen and (max-width: 690px) {
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

      @media screen and (max-width: 690px) {
        padding: 64px 24px;
      }
    }

    @media screen and (max-width: 1111px) {
      width: 690px;
      height: auto;
    }

    @media screen and (max-width: 690px) {
      width: 330px;
    }
  }
`;

export default SCFooter;
