import styled from "styled-components";

const SCNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 65px 165px;

  .logo {
    width: 195px;
  }

  .links {
    display: flex;
    gap: 42px;

    a {
      color: rgb(var(--dark-gray));
      font-family: jost;
      font-weight: 400;
      font-size: 14px;
      letter-spacing: 2px;
      text-transform: uppercase;

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
    }
  }
`;

export default SCNavbar;
