import styled from "styled-components";

const HomeContainer = styled.main`
  /* max-width: 1440px; */
  margin: 0 auto;
  .body {
    background-image: ${({ background }) =>
      background ? `url(/bg/${background}.webp)` : `url(/bg/default.webp)`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: calc(100vh - 27px);
    display: flex;
    flex-direction: row;
    main {
      flex: 1;
      position: relative;
      height: 100%;
      overflow: hidden;
      & > .bg {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
      }
    }
  }
`;

export default HomeContainer;
