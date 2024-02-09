import styled from "styled-components";

const SCHome = styled.div`
  .header {
    background: rgb(var(--peach));
    border-radius: 15px;
    display: grid;
    grid-template-areas: "stack";

    .images,
    .text {
      grid-area: stack;
      width: 100%;
      height: 100%;
    }

    .images {
      display: flex;
      justify-content: flex-end;
      position: relative;

      .phone {
        position: absolute;
        /* ... */
        top: 100px;
        right: 95px;
      }
    }

    .text {
      color: white;
      display: flex;
      flex-direction: column;
      padding: 145px 95px;

      .fs-h1 {
        background: #1d9aa2;
        width: 540px;
        height: 165px;
      }
    }
  }
`;

export default SCHome;
