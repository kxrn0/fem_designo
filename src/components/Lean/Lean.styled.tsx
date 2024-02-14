import styled from "styled-components";

const SCLean = styled.div`
  display: grid;
  grid-template-areas: "stack";
  /* width: 100%; */
  /* height: 100%; */

  .image,
  .text {
    grid-area: stack;
    width: 100%;
    height: 100%;
  }

  .image {
    object-fit: cover;
  }

  .text {
    background: rgb(var(--burakku), 0.5);
  }
`;

export default SCLean;
