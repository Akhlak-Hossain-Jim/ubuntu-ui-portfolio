import React, { useEffect, useState } from "react";
import useApp from "../store";
import styled from "styled-components";
import { AiOutlineClose, AiOutlineMinus } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";

export default function SoftContainer({
  name,
  children,
  updateShowApp,
  showApp,
}) {
  const { currentApp, updateCurrentApp } = useApp();
  const [state, setState] = useState("");
  const handleMinimize = () => {
    updateCurrentApp("Activity");
    setState("minimize");
  };

  const handleClose = () => {
    updateCurrentApp("Activity");
    updateShowApp(false);
  };

  useEffect(() => {
    state === "minimize" && currentApp === name && setState("");
  }, [currentApp, name]);

  return (
    <>
      {showApp && (
        <Container
          className={`${state} ${currentApp === name ? "focused" : ""}`}
          onClick={() => updateCurrentApp(name)}
        >
          <div className="soft_header">
            <p className="soft_header__name">{name}</p>
            <div className="soft_header__actions">
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
          </div>
          <div className="soft_body">{children}</div>
        </Container>
      )}
    </>
  );
}
const Container = styled.div`
  position: absolute;
  background-color: var(--github-bg);
  top: 5%;
  left: 2%;
  border-radius: 12px;
  width: min(800px, 100%);
  z-index: 2;
  height: 80%;
  @media (max-height: 600px) {
    height: 100%;
  }
  @media (max-width: 900px) {
    top: 0;
    left: 0;
  }
  &.minimize {
    width: 0;
    height: 0;
    overflow: hidden;
  }
  &.maximize {
    width: 100%;
    height: 100%;
    max-height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .soft_header {
    background-color: var(--program-header);
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 10px;
    border-radius: 12px 12px 0 0;
    top: 0;
    z-index: 1;
    &__name {
      font-weight: 400;
    }
    &__actions {
      display: flex;
      align-items: center;
      gap: 10px;
      span {
        cursor: pointer;
      }
    }
  }
  .soft_body {
    background-color: var(--program-bg-p);
    /* flex: 1; */
    height: 100%;
    padding-bottom: 12px;
  }
`;
