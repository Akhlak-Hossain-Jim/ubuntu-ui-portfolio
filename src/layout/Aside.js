import React from "react";
import styled from "styled-components";
import { BsFillTerminalFill } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";
import { CgMenuGridR } from "react-icons/cg";
import { FcSettings } from "react-icons/fc";
import { TiInfoLarge } from "react-icons/ti";
import useApp from "../store";
import { RiMailSendFill } from "react-icons/ri";
import { FaFileInvoice } from "react-icons/fa";

export default function Aside() {
  const {
    allApps,
    updateAllApp,
    currentApp,
    updateCurrentApp,
    showTerminal,
    updateShowTerminal,
    showGithub,
    updateShowGithub,
    showSetting,
    updateShowSetting,
    showAbout,
    updateShowAbout,
    showCV,
    updateShowCV,
  } = useApp();

  const setAllApps = (value) => updateAllApp(value);

  const handleTerminal = () => {
    setAllApps(false);
    if (showTerminal) {
      currentApp === "terminal"
        ? updateCurrentApp("")
        : updateCurrentApp("terminal");
    } else {
      updateCurrentApp("terminal");
      updateShowTerminal(true);
    }
  };
  const handleGithub = () => {
    setAllApps(false);
    if (showGithub) {
      currentApp === "github"
        ? updateCurrentApp("")
        : updateCurrentApp("github");
    } else {
      updateCurrentApp("github");
      updateShowGithub(true);
    }
  };
  const handleApp = (show, name, setShow) => {
    setAllApps(false);
    if (show) {
      currentApp === name ? updateCurrentApp("") : updateCurrentApp(name);
    } else {
      updateCurrentApp(name);
      setShow(true);
    }
  };

  const AsideTop = () => {
    return (
      <div className="aside_top">
        <span
          className={`terminal ${showTerminal ? "hasTab" : ""}`}
          onClick={handleTerminal}
        >
          <BsFillTerminalFill />
          <span className="app_-name">Terminal</span>
        </span>
        <span
          className={`github ${showGithub ? "hasTab" : ""}`}
          onClick={handleGithub}
        >
          <VscGithub style={{ transform: "scale(1.1)", margin: "auto" }} />
          <span className="app_-name">Github</span>
        </span>
        <ComApp
          className={`${showAbout ? "hasTab" : ""}`}
          style={{ borderRadius: "50%" }}
          bg="var(--orange)"
          onClick={() => handleApp(showAbout, "About", updateShowAbout)}
        >
          <TiInfoLarge
            style={{
              transform: "scale(1.1)",
              margin: "auto",
              borderRadius: "50%",
            }}
          />
          <span className="app_-name">About</span>
        </ComApp>
        <span
          className={`settings ${showSetting ? "hasTab active" : ""}`}
          onClick={() => handleApp(showSetting, "Settings", updateShowSetting)}
        >
          <FcSettings />
          <span className="app_-name">Settings</span>
        </span>
        <ComApp
          className={`vis ${showCV ? "hasTab active" : ""}`}
          bg="$00000000"
          onClick={() => handleApp(showCV, "CV Creator", updateShowCV)}
        >
          <FaFileInvoice
            style={{
              transform: "scale(1.1)",
              margin: "auto",
            }}
          />
          <span className="app_-name">CV Creator</span>
        </ComApp>
        <ComApp
          className="vis"
          style={{ borderRadius: "50%" }}
          bg="$00000000"
          onClick={() =>
            window.open(
              `mailto:aklajim@yahoo.com?subject=Hello There!&body=Hi Akhlak, so, I was looking at your Ubuntu UI web app and...`,
              "_blank"
            )
          }
        >
          <RiMailSendFill style={{ transform: "scale(1.1)", margin: "auto" }} />
          <span className="app_-name">Mail</span>
        </ComApp>
      </div>
    );
  };
  return (
    <>
      <Container>
        <AsideTop />
        <div className="aside_bottom" onClick={() => setAllApps(!allApps)}>
          <CgMenuGridR />
        </div>
      </Container>
      {allApps && (
        <AllAppsContainer>
          <h1>All apps</h1>
          <AsideTop />
        </AllAppsContainer>
      )}
    </>
  );
}

const Container = styled.aside`
  position: relative;
  background-color: var(--nav-bg-transparent);
  height: calc(100vh - 27px);
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* @media (min-width: 1536px) {
    width: calc(50px + 2vmin);
  } */
  @media print {
    display: none;
  }
  .aside_top {
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 100%;
    overflow-y: auto;
    padding: 8px;
    & > span {
      cursor: pointer;
      position: relative;
      & > .app_-name {
        display: none;
      }
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
      width: 60%;
      top: 4px;
      left: 2px;
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
    margin: 0 2px;
  }
  .settings {
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    &.active {
      display: flex;
    }
  }
  .hasTab {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      width: 6px;
      top: 50%;
      left: auto;
      right: -8px;
      transform: translateY(-50%);
      aspect-ratio: 1/1;
      background-color: white;
      border-radius: 50%;
    }
  }
  .aside_bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    aspect-ratio: 1/1;
    backdrop-filter: blur(20px);
    border-radius: 4px;
    font-size: 28px;
    &:hover {
      background-color: var(--white-transparent);
    }
  }
`;

const ComApp = styled.span`
  color: ${(props) => (props.color ? props.color : "#fff")};
  font-size: 1.7rem;
  display: flex;
  margin: 2px;
  aspect-ratio: 1/1;
  &.vis {
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    &.active {
      display: flex;
    }
  }
  & > *:first-child {
    background-color: ${(props) => (props.bg ? props.bg : "#000")};
  }
  .hasTab {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      width: 6px;
      top: 50%;
      left: auto;
      right: -8px;
      transform: translateY(-50%);
      aspect-ratio: 1/1;
      background-color: white;
      border-radius: 50%;
    }
  }
`;

const AllAppsContainer = styled.div`
  position: fixed;
  top: 27px;
  left: 50px;
  width: calc(100vw - 50px);
  height: calc(100vh - 27px);
  background: var(--blackTransparent);
  backdrop-filter: blur(24px);
  z-index: 700;
  padding: 50px;
  text-align: center;
  & > h1 {
    padding-bottom: 28px;
  }
  .aside_top {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 28px;
    font-size: 32px;
    & > span {
      cursor: pointer;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 12px;
      max-width: 50px;
      & > .app_-name {
        font-size: 16px;
      }
    }
  }
`;
