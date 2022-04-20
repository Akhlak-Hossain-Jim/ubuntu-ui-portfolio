import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineCaretDown } from "react-icons/ai";
import { MdPowerSettingsNew } from "react-icons/md";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import { FiWifi, FiWifiOff } from "react-icons/fi";
import Close from "../components/Close";

export default function Header() {
  const [Sound, setSound] = useState(true);
  const [HeaderDrop, setHeaderDrop] = useState(true);
  const [close, setClose] = useState(false);

  const [DATE, setDATE] = useState();
  setInterval(() => {
    const date = new Date();
    setDATE(
      `${date.getDate()} ${
        {
          0: "Jan",
          1: "Feb",
          2: "Mar",
          3: "Apr",
          4: "May",
          5: "Jun",
          6: "Jul",
          7: "Aug",
          8: "Sep",
          9: "Oct",
          10: "Nov",
          11: "Dec",
        }[date.getMonth()]
      } ${date.getHours()}:${date.getMinutes()}`
    );

    // console.log(DATE);
  }, 1000);
  return (
    <>
      <Container>
        <div className="elements">Activities</div>
        <div className="elements">{DATE}</div>
        <div className="elements" onClick={() => setHeaderDrop(!HeaderDrop)}>
          <span>{navigator.onLine ? <FiWifi /> : <FiWifiOff />}</span>
          <span>{Sound ? <GiSpeaker /> : <GiSpeakerOff />}</span>
          <span>
            <MdPowerSettingsNew />
          </span>
          <span>
            <AiOutlineCaretDown />
          </span>
          <div className={`elements_drop ${HeaderDrop ? "active" : ""}`}>
            <div className="elements_drop__element">
              {navigator.onLine ? <FiWifi /> : <FiWifiOff />}
              {navigator.onLine ? "You are Connected" : "No Internet"}
            </div>
            <div className="elements_drop__element"><span onClick={()=>setSound(!Sound)}>{Sound ? <GiSpeaker /> : <GiSpeakerOff />}</span><input type="range" name="sound" id="sound" min="0" max="10" step="1" value={Sound ? "10": "0"} /></div>
            <div className="elements_drop__element"></div>
            <div className="elements_drop__element"></div>
          </div>
        </div>
      </Container>
      {close === true && <Close setClose={setClose} />}
    </>
  );
}

const Container = styled.header`
  background-color: var(--nav-bg);
  height: 27px;
  color: var(--color-p);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  font-size: var(--p-font);
  @media (min-width: 1441px) {
    height: calc(27px + 2vmin);
  }
  .elements {
    &:nth-child(3) {
      display: flex;
      gap: 8px;
      position: relative;
      span {
        cursor: pointer;
      }
    }
    &_drop {
      display: none;
      flex-direction: column;
      position: absolute;
      right: 0;
      top: 170%;
      background-color: var(--color-p);
      // padding: 10px 0;
      width: min(250px, 85vw);
      color: var(--nav-bg);
      border-radius: 4px;
      &__element {
        padding: 10px;
        display: flex;
        align-items: center;
        gap: 16px;
        &:not(:last-child) {
          border-bottom: 1px solid var(--color-p-dark);
        }
        input {
          flex: 1;
          accent-color: var(--terminal-body);
        }
      }
      &.active {
        display: flex;
      }
    }
  }
`;
