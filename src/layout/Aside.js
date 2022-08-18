import React from "react";
import styled from "styled-components";
import { BsFillTerminalFill } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";

export default function Aside(props) {
  const handleTerminal = () => {
    if (props.terminal) {
      props.currentApp === "terminal"
        ? props.setCurrentApp("")
        : props.setCurrentApp("terminal");
    } else {
      props.setCurrentApp("terminal");
      props.setTerminal(true);
    }
  };
  const handleGithub = () => {
    if (props.github) {
      props.currentApp === "github"
        ? props.setCurrentApp("")
        : props.setCurrentApp("github");
    } else {
      props.setCurrentApp("github");
      props.setGithub(true);
    }
  };
  return (
    <Container>
      <div className="aside_top">
        <span
          className={`terminal ${props.terminal ? "hasTab" : ""}`}
          onClick={handleTerminal}
        >
          <BsFillTerminalFill />
        </span>
        <span
          className={`github ${props.github ? "hasTab" : ""}`}
          onClick={handleGithub}
        >
          <VscGithub style={{ transform: "scale(1.1)", margin: "auto" }} />
        </span>
      </div>
    </Container>
  );
}

const Container = styled.aside`
  background-color: var(--nav-bg-transparent);
  height: calc(100vh - 27px);
  width: 50px;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 1441px) {
    width: calc(50px + 2vmin);
  }
  .aside_top {
    display: flex;
    flex-direction: column;
    gap: 12px;
    & > span {
      cursor: pointer;
      position: relative;
    }
  }
  .terminal {
    color: var(--program-header);
    font-size: 1.8rem;
    position: relative;
    display: flex;
    &:before {
      content: "";
      position: absolute;
      top: 4px;
      height: 15px;
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
  .github {
    color: #fff;
    background-color: #792f9e;
    font-size: 1.7rem;
    border-radius: 50%;
    display: flex;
  }
  .hasTab {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      width: 6px;
      top: 50%;
      left: auto;
      right: -9px;
      transform: translateY(-50%);
      aspect-ratio: 1/1;
      background-color: white;
      border-radius: 50%;
    }
  }
`;
