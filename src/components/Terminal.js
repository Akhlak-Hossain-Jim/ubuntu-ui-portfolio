import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";
import useApp from "../store";

export default function Terminal() {
  const {
    currentApp,
    updateCurrentApp,
    showTerminal,
    updateShowTerminal,
    updateShowGithub,
    updateShowSetting,
    updateShowAbout,
    updateShowCV,
  } = useApp();
  const [state, setState] = useState("");
  const [terminalText, setTerminalText] = useState([]);
  const [input, setInput] = useState([""]);

  const body = useRef();

  const useableCommands = [
    "'about' to open up Akhlak's About",
    "'boot' to close the window",
    "'clear' to clear the terminal",
    "'code . to open the code",
    "'exit' to close the terminal",
    "'github .' to open up Github instance",
    "'help' to get help",
    "'mail' to send an email to Akhlak's mail",
    "'portfolio .' to open up Akhlak's Portfolio",
    "'reboot' to reload the window",
    "'settings .' to open up settings",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (input.toLowerCase()) {
      case "clear":
        setTerminalText([""]);
        break;
      case "help":
        setTerminalText([...terminalText, `$ ${input}`, ...useableCommands]);
        break;
      case "reboot":
        setTerminalText([...terminalText, `$ ${input}`, "rebooting..."]);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        break;
      case "boot":
        setTerminalText([
          ...terminalText,
          `$ ${input}`,
          "might not work in mobile or tablet",
          "Shuting down...",
        ]);
        setTimeout(() => {
          window.close();
        }, 2000);
        break;
      case "exit":
        setTerminalText([...terminalText, `$ ${input}`]);
        setTimeout(() => {
          updateShowTerminal(false);
        }, 1000);
        break;
      case "code .":
        setTerminalText([
          ...terminalText,
          `$ ${input}`,
          "opening github link...",
        ]);
        setTimeout(() => {
          window.open(
            "https://github.com/Akhlak-Hossain-Jim/ubuntu-ui-portfolio",
            "_blank"
          );
        }, 1000);
        break;
      case "portfolio .":
        setTerminalText([
          ...terminalText,
          `$ ${input}`,
          "opening github link...",
        ]);
        setTimeout(() => {
          window.open("https://ahjim.com", "_blank");
        }, 1000);
        break;
      case "github .":
        setTerminalText([...terminalText, `$ ${input}`, `Opening Github App`]);
        setTimeout(() => {
          updateShowGithub(true);
          updateCurrentApp("github");
        }, 1000);
        break;
      case "settings .":
        setTerminalText([...terminalText, `$ ${input}`, `Opening Settings...`]);
        setTimeout(() => {
          updateShowSetting(true);
          updateCurrentApp("settings");
        }, 1000);
        break;
      case "about .":
      case "About":
      case "about":
        setTerminalText([...terminalText, `$ ${input}`, `Opening about...`]);
        setTimeout(() => {
          updateShowAbout(true);
          updateCurrentApp("About");
        }, 1000);
        break;
      case "CV .":
      case "cv .":
      case "Cv .":
      case "cV .":
        setTerminalText([
          ...terminalText,
          `$ ${input}`,
          `Opening CV creator...`,
        ]);
        setTimeout(() => {
          updateShowCV(true);
          updateCurrentApp("CV Creator");
        }, 1000);
        break;
      case "mail":
      case "Mail":
        setTerminalText([
          ...terminalText,
          `$ ${input}`,
          `Opening native mail app...`,
        ]);
        window.open(
          `mailto:aklajim@yahoo.com?subject=Hello There!&body=Hi Akhlak, so, I was looking at your Ubuntu UI web app and...`,
          "_blank"
        );
        break;
      default:
        setTerminalText([
          ...terminalText,
          `$ ${input}`,
          `Command '${input}' not found,`,
          `try 'help' for available command list`,
        ]);
        break;
    }
    setInput("");
  };

  const handleMinimize = () => {
    setState("minimize");
    updateCurrentApp("");
  };

  const handleClose = () => {
    updateShowTerminal(false);
    updateCurrentApp("");
  };

  useEffect(() => {
    terminalText.length > 0 &&
      body.current.scrollTo(0, body.current.scrollHeight);
  }, [terminalText]);

  useEffect(() => {
    state === "minimize" && currentApp === "terminal" && setState("");
  }, [currentApp]);

  return (
    <>
      {showTerminal && (
        <Container
          className={`${state} ${currentApp === "terminal" ? "focused" : ""}`}
          onClick={() => updateCurrentApp("terminal")}
          onFocus={() => updateCurrentApp("terminal")}
        >
          <div className="terminal_header">
            <span onClick={handleMinimize}>
              <AiOutlineMinus />
            </span>
            <span
              onClick={() =>
                state === "" ? setState("maximize") : setState("")
              }
            >
              <BiCopy />
            </span>
            <span onClick={handleClose}>
              <AiOutlineClose />
            </span>
          </div>
          <div className="terminal_body" ref={body}>
            {React.Children.toArray(
              terminalText.map((data) =>
                data !== "" ? (
                  data.includes("$") ? (
                    <div className="terminal_body__previous">
                      <p>
                        <span>$</span>
                        {data.replace("$", "")}
                      </p>
                    </div>
                  ) : (
                    <div className="terminal_body__previous">
                      <p>
                        {"   "}
                        {data}
                      </p>
                    </div>
                  )
                ) : (
                  ""
                )
              )
            )}
            <div className="terminal_body__current">
              <p>
                <span>$</span>
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                {/* <button type="submit"></button> */}
              </form>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  position: absolute;
  background-color: var(--terminal-body);
  border-radius: 12px;
  width: min(500px, 100%);
  height: min(300px, 100%);
  overflow: none;
  z-index: 2;
  &.minimize {
    width: 0;
    height: 0;
    overflow: hidden;
  }
  &.maximize {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .terminal_header {
    background-color: var(--program-header);
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    padding: 10px;
    border-radius: 12px 12px 0 0;
    span {
      cursor: pointer;
    }
  }
  .terminal_body {
    padding: 10px;
    width: 100%;
    height: 85%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    p {
      span {
        padding-right: 10px;
        color: var(--terminal-p);
      }
    }
    &__previous {
      padding-bottom: 10px;
    }
    &__current {
      display: flex;
      flex-direction: row;
      gap: 4px;
    }
    form {
      flex: 1;
      input {
        border: none;
        outline: none;
        font-size: 16px;
        width: 100%;
        background-color: transparent;
        color: var(--color-p);
        height: max-content;
        word-wrap: break-word;
      }
    }
  }
`;
