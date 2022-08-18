import styled from "styled-components";

const HomeContainer = styled.main`
  /* max-width: 1440px; */
  margin: 0 auto;
  .body {
    background-image: url(/bg/default.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    height: calc(100vh - 27px);
    display: flex;
    flex-direction: row;
    main {
      flex: 1;
      position: relative;
      height: 100%;
      overflow: hidden;
    }
  }
`;

export default HomeContainer;
