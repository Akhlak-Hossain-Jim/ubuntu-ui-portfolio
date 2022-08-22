import React from "react";
import styled from "styled-components";
import { RiInstallFill } from "react-icons/ri";

export default function Install({
  deferredPrompt,
  setDeferredPrompt,
  setShowInstall,
  showInstall,
}) {
  const handleClick = () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
        setShowInstall(false);
      }
      setShowInstall(false);
    });
    setDeferredPrompt();
  };

  return (
    <>
      {showInstall && (
        <Container>
          <button
            className="modal_container__button_close"
            onClick={handleClick}
          >
            <span>
              <RiInstallFill style={{ color: "var(--color-p)" }} />
            </span>
            Install
          </button>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
  & > button {
    padding: 12px;
    font-size: 16px;
    font-weight: 400;
    color: var(--color-p);
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4px;
    border: none;
    outline: none;
    cursor: pointer;
    & > span {
      color: var(--color-p);
      font-size: 32px;
    }
    &:hover {
      background-color: var(--white-transparent);
      backdrop-filter: 60px;
    }
  }
`;
