import React from "react";
import styled from "styled-components";

export default function Terminal() {
  return (
    <Container>
      <div className="header"></div>
      <div className="body">
        <p></p>
        <form action="">
          <input type="text" />
          <button type="submit"></button>
        </form>
      </div>
    </Container>
  );
}

const Container = styled.div``;
