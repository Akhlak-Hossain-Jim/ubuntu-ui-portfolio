import styled from "styled-components";

const HomeContainer = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  .body {
    background-image: url(/bg/default.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    min-height: calc(100vh - 27px);
    aside {
      background-color: var(--nav-bg-transparent);
      height: calc(100vh - 27px);
      width: 50px;
    }
  }
`;

export default HomeContainer;
