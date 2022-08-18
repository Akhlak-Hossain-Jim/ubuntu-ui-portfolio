import React from "react";
import styled from "styled-components";
import { BsFillTerminalFill } from "react-icons/bs";

export default function Aside(props) {
  const handleTerminal = () => {
    props.terminal
      ? props.currentApp === "terminal"
        ? props.setCurrentApp("")
        : props.setCurrentApp("terminal")
      : props.setTerminal(true);
  };
  return (
    <Container>
      <span
        className={`terminal ${props.terminal ? "hasTab" : ""}`}
        onClick={handleTerminal}
      >
        <BsFillTerminalFill />
      </span>
    </Container>
  );
}

const Container = styled.aside`
  background-color: var(--nav-bg-transparent);
  height: calc(100vh - 27px);
  width: 50px;
  padding: 8px;
  @media (min-width: 1441px) {
    width: calc(50px + 2vmin);
  }
  & > span {
    cursor: pointer;
  }
  .terminal {
    color: var(--program-header);
    font-size: 1.8rem;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      height: 10px;
      width: 100%;
      top: 4px;
      background-color: white;
      z-index: 1;
    }
    & > * {
      position: relative;
      z-index: 2;
    }
  }
  .hasTab {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      width: 6px;
      top: 50%;
      transform: translateY(-100%) translateX(4px);
      aspect-ratio: 1/1;
      background-color: white;
      border-radius: 50%;
    }
  }
`;
