import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineCaretDown } from "react-icons/ai";
import { MdPowerSettingsNew, MdOutlineSettings } from "react-icons/md";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import { FiWifi, FiWifiOff } from "react-icons/fi";
import Close from "../components/Close";
import Divider from "../components/Divider";

import useApp from "../store";

export default function Header() {
  const { currentApp, allApps, updateCurrentApp, updateShowSetting } = useApp();

  const isCurrent = currentApp;
  const setIsCurrent = (value) => updateCurrentApp(value);
  const activity = allApps;
  const openSettings = (value) => updateShowSetting(value);

  const [Sound, setSound] = useState(true);
  const [HeaderDrop, setHeaderDrop] = useState(false);
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

  const handlePowerClick = () => {
    setClose(true);
    setIsCurrent("close");
  };
  return (
    <>
      <Container className={isCurrent === "close" ? "focused" : ""}>
        <div className={`elements ${activity ? "active" : ""}`}>
          {isCurrent ? isCurrent : "Activities"}
        </div>
        <div className="elements">{DATE}</div>
        <div
          className={`elements ${HeaderDrop ? "active" : ""}`}
          onClick={() => setHeaderDrop(!HeaderDrop)}
        >
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
              <span className="speaker" onClick={() => setSound(!Sound)}>
                {Sound ? <GiSpeaker /> : <GiSpeakerOff />}
              </span>
              <input
                type="range"
                name="sound"
                id="sound"
                min="0"
                max="10"
                step="1"
                value={Sound ? "10" : "0"}
                onChange={(e) => console.log(e)}
              />
            </div>
            <Divider />
            <div className="elements_drop__element">
              {navigator.onLine ? <FiWifi /> : <FiWifiOff />}
              {navigator.onLine ? "You are Connected" : "No Internet"}
            </div>
            <Divider />
            <div
              className="elements_drop__element"
              onClick={() =>
                document.fullscreen
                  ? document.exitFullscreen()
                  : document.body.requestFullscreen()
              }
            >
              <span>
                <MdOutlineSettings />
              </span>{" "}
              {document.fullscreen ? "Exit Full Screen" : "Entire Full Screen"}
            </div>
            <div
              className="elements_drop__element"
              onClick={() => openSettings(true)}
            >
              <span>
                <MdOutlineSettings />
              </span>{" "}
              Settings
            </div>
            <div className="elements_drop__element" onClick={handlePowerClick}>
              <span>
                <MdPowerSettingsNew />
              </span>{" "}
              Power Off
            </div>
          </div>
        </div>
      </Container>
      {close === true && <Close isCurrent={isCurrent} setClose={setClose} />}
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
    &:first-child {
      text-transform: capitalize;
    }
    &:nth-child(3) {
      display: flex;
      gap: 8px;
      position: relative;
      span {
        cursor: pointer;
      }
    }
    &.active {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        bottom: -4px;
        left: 50%;
        transform: translateX(-50%);
        width: 140%;
        height: 2px;
        background-color: var(--orange);
        border-radius: 4px;
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
      z-index: 10000;
      &__element {
        padding: 10px;
        display: flex;
        align-items: center;
        gap: 16px;
        cursor: pointer;
        input {
          flex: 1;
          accent-color: var(--terminal-body);
        }
        span {
          &.speaker {
            font-size: 18px;
            margin-top: 3px;
          }
        }
      }
      &.active {
        display: flex;
      }
    }
  }
`;
