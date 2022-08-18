import React from "react";
import styled from "styled-components";

export default function Divider() {
  return (
    <Component>
      <hr />
    </Component>
  );
}

const Component = styled.div`
  display: flex;
  justify-content: center;
  /* padding: ; */
  & > hr {
    width: 50%;
    height: 1px;
    background-color: var(--color-p-dark);
  }
`;
