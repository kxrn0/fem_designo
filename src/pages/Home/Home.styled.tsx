import styled from "styled-components";

const SCHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    background-color: transparent;
    border-radius: 15px;
    display: grid;
    grid-template-areas: "stack";
    overflow: hidden;
    width: 1111px;
    transition: background-color calc(5 * var(--duration));

    &.visible {
      background: rgb(var(--peach));

      .images {
        animation: appear-anime calc(5 * var(--duration)) forwards;
      }

      .text {
        a {
          animation: from-below-anime calc(var(--duration) * 5)
            calc(var(--duration) * 25) forwards;
        }
      }
    }

    .images,
    .text {
      grid-area: stack;
      width: 100%;
      height: 100%;
      position: relative;
    }

    .images {
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
          /* width: 330px; */
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

        @media screen and (max-width: 700px) {
          /* width: 330px; */
          width: 100%;
        }
      }

      a {
        margin-top: 40px;
        opacity: 0;
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

  .byme {
    background-color: greenyellow;
    width: 10px;
    height: 100vh;
  }
`;

export default SCHome;
