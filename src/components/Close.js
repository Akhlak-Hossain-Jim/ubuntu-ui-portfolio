import React from "react";
import styled from "styled-components";

export default function Close({ close, setClose, isCurrent }) {
  return (
    <Container className={isCurrent ? "focused" : ""}>
      <div className="close_container">
        <div className="close_container--header">Close Window?</div>
        <div className="close_container__body">
          <div className="close_container__body_line">
            This will close your browser with all tab
          </div>
          <div className="close_container__body_line">
            <button
              className="close_container__body_line-button"
              onClick={() => window.close()}
            >
              Close All
            </button>
            <button
              className="close_container__body_line-button"
              onClick={() => window.location.reload()}
            >
              ReBoot
            </button>
            <button
              className="close_container__body_line-button"
              onClick={() => setClose(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 27px;
  left: 50px;
  background-color: var(--blackTransparent);
  @media (min-width: 1441px) {
    left: calc(50px + 2vmin);
    top: calc(27px + 2vmin);
  }
  .close_container {
    width: min(95%, 500px);
  }
  .close_container--header {
    background-color: var(--program-header);
    padding: 10px 20px;
    border-radius: 10px 10px 0 0;
  }
  .close_container__body {
    background-color: var(--program-bg-p);
    padding: 30px 20px 10px;
    border-radius: 0 0 10px 10px;
    &_line {
      &:nth-child(2) {
        padding-top: 30px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: wrap;
        gap: calc(5px + 2vmin);
      }
      &-button {
        background-color: var(--program-header);
        color: var(--color-p);
        padding: 10px 20px;
        border: none;
        outline: none;
        border-radius: 10px;
      }
    }
  }
`;
