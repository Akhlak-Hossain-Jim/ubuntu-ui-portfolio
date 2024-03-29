import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineCloud, AiOutlineGithub } from "react-icons/ai";
import { FaGlobeEurope, FaTelegramPlane } from "react-icons/fa";
import { MdMonitor } from "react-icons/md";
import { GiWrappingStar } from "react-icons/gi";
import { VscRepoForked, VscStarEmpty } from "react-icons/vsc";
import useApp from "../store";
import SoftContainer from "./SoftContainer";

export default function Settings({ Background, setBackground }) {
  const { showSetting, updateShowSetting } = useApp();
  const [CurrentTab, setCurrentTab] = useState(0);
  const [Navigator] = useState(navigator);

  const Bgs = ["default", "black", "ash", "cute_puppy"];

  const OnlineAccounts = [
    {
      title: "Github Repo",
      icon: <AiOutlineGithub />,
      link: "https://github.com/Akhlak-Hossain-Jim/ubuntu-ui-portfolio",
    },
    {
      title: "Creators Github",
      icon: <AiOutlineGithub />,
      link: "https://github.com/Akhlak-Hossain-Jim/",
    },
    {
      title: "Creators Website",
      icon: <FaGlobeEurope />,
      link: "https://ahjim.com",
    },
    {
      title: "Telegram",
      icon: <FaTelegramPlane />,
      link: "https://t.me/AkhlakHossainJim",
    },
  ];

  const [RepoOverview, setRepoOverview] = useState();
  const [LinesOfCode, setLinesOfCode] = useState();
  const [Versions, setVersions] = useState();

  useEffect(() => {
    fetch("https://api.github.com/repos/Akhlak-Hossain-Jim/ubuntu-ui-portfolio")
      .then((response) => response.json())
      .then((data) => setRepoOverview(data))
      .catch((error) => {
        alert(error);
        console.log(error);
      });
    fetch(
      "https://api.github.com/repos/Akhlak-Hossain-Jim/ubuntu-ui-portfolio/languages"
    )
      .then((response) => response.json())
      .then((data) => setLinesOfCode(data.JavaScript + data.HTML + data.CSS))
      .catch((error) => {
        alert(error);
        console.log(error);
      });
    fetch(
      "https://api.github.com/repos/Akhlak-Hossain-Jim/ubuntu-ui-portfolio/releases"
    )
      .then((response) => response.json())
      .then((data) => setVersions(data))
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  }, []);

  const CONTENTS = [
    {
      title: "Network",
      icon: <FaGlobeEurope />,
    },
    {
      title: "Background",
      icon: <MdMonitor />,
    },
    {
      title: "Online Accounts",
      icon: <AiOutlineCloud />,
    },
    {
      title: "About",
      icon: <GiWrappingStar />,
    },
  ];

  return (
    <>
      {showSetting && (
        <SoftContainer
          name={"Settings"}
          showApp={showSetting}
          updateShowApp={updateShowSetting}
        >
          <Container className="">
            <div className="settings_body__nav">
              {React.Children.toArray(
                CONTENTS.map((data, index) => (
                  <div
                    className={`settings_body__nav_element ${
                      CurrentTab === index ? "active" : ""
                    }`}
                    onClick={() => setCurrentTab(index)}
                  >
                    {data.icon} {data.title}
                  </div>
                ))
              )}
            </div>
            <div className="settings_body__content">
              {
                {
                  0: (
                    <div className="settings_body__content_network">
                      <h3>Wired</h3>
                      <p>
                        {Navigator && Navigator.onLine
                          ? `Connected; Network Speed: ${Navigator.connection.effectiveType.toUpperCase()}`
                          : "Not Connected, Check your connection"}
                      </p>
                    </div>
                  ),
                  1: (
                    <div className="settings_body__content_background">
                      <div className="settings_body__content_background__current">
                        <img
                          src={`/bg/${Background}.webp`}
                          alt={`${Background} background`}
                        />
                      </div>
                      <div className="settings_body__content_background__available">
                        {React.Children.toArray(
                          Bgs.map((data) => (
                            <div
                              className="settings_body__content_background__available__element"
                              onClick={() => setBackground(data)}
                            >
                              <img
                                src={`/bg/${data}.webp`}
                                alt={`${data} background`}
                              />
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  ),
                  2: (
                    <div className="settings_body__content_online">
                      <h3 style={{ textAlign: "center" }}>Online Presence</h3>
                      <h3>Accounts</h3>
                      <div className="settings_body__content_online__elements">
                        {React.Children.toArray(
                          OnlineAccounts.map((data) => (
                            <a
                              href={data.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="settings_body__content_online__elements_element"
                            >
                              {data.icon}
                              {data.title}
                            </a>
                          ))
                        )}
                      </div>
                    </div>
                  ),
                  3: (
                    <div className="settings_body__content_about">
                      <div className="settings_body__content_about__icon">
                        <img src="/icon-512.png" alt="icon" />
                      </div>
                      <div className="settings_body__content_about__box">
                        <div className="settings_body__content_about__box_element">
                          Device Name <span>Ubuntu Clone</span>
                        </div>
                      </div>
                      <div className="settings_body__content_about__box">
                        <div className="settings_body__content_about__box_element">
                          Cloned Ubuntu UI
                          <span>Ubuntu 20.4</span>
                        </div>
                        <div className="settings_body__content_about__box_element">
                          OS Type
                          <span>64bit</span>
                        </div>
                      </div>
                      <div className="settings_body__content_about__box">
                        <div className="settings_body__content_about__box_element">
                          Author{" "}
                          <a
                            href="https://ahjim.com"
                            terget="_blank"
                            rel="noopener noreferrer"
                          >
                            Akhlak Hossain Jim
                          </a>
                        </div>
                        <div className="settings_body__content_about__box_element">
                          Mostly written in{" "}
                          <span>{RepoOverview && RepoOverview.language}</span>
                        </div>
                        <div className="settings_body__content_about__box_element">
                          Lines of code
                          <span>{LinesOfCode && LinesOfCode}</span>
                        </div>
                        <div className="settings_body__content_about__box_element">
                          Created{" "}
                          {RepoOverview && (
                            <span>
                              {new Date(RepoOverview.created_at).toUTCString()}
                            </span>
                          )}
                        </div>
                        <div className="settings_body__content_about__box_element">
                          Updated{" "}
                          {RepoOverview && (
                            <span>
                              {new Date(RepoOverview.pushed_at).toUTCString()}
                            </span>
                          )}
                        </div>
                        <div className="settings_body__content_about__box_element">
                          <VscRepoForked />{" "}
                          <span>{RepoOverview && RepoOverview.forks}</span>
                        </div>
                        <div className="settings_body__content_about__box_element">
                          <VscStarEmpty />{" "}
                          <span>
                            {RepoOverview && RepoOverview.stargazers_count}
                          </span>
                        </div>
                        <div className="settings_body__content_about__box_element">
                          Total Number of Releases:{" "}
                          {Versions && <span>{Versions.length}</span>}
                        </div>
                        <div className="settings_body__content_about__box_element">
                          Current Version:{" "}
                          {Versions && <span>{Versions[0].name}</span>}
                        </div>
                        <div className="settings_body__content_about__box_element">
                          Version:{" "}
                          {Versions && <span>{Versions[0].tag_name}</span>}
                        </div>
                      </div>
                    </div>
                  ),
                }[CurrentTab]
              }
            </div>
          </Container>
        </SoftContainer>
      )}
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 9fr;
  height: 100%;
  @media (max-width: 600px) {
    grid-template-columns: 1fr 2fr;
  }
  .settings_body {
    &__nav {
      height: 100%;
      overflow-y: auto;
      &_element {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        cursor: pointer;
        &.active {
          background-color: var(--orange);
        }
      }
    }
    &__content {
      padding: 60px 24px 24px;
      height: 100%;
      overflow-y: auto;
      h3 {
        padding-bottom: 16px;
      }
      p {
        padding-bottom: 20px;
      }
      &_background {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        &__current {
          width: min(400px, 100%);
          & > img {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
        }
        &__available {
          background-color: var(--program-header);
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          padding: 24px;
          border-radius: 24px;
          align-items: center;
          justify-content: center;
          &__element {
            width: min(200px, 100%);
            aspect-ratio: 16/10;
            position: relative;
            overflow: hidden;
            & > img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: center;
            }
          }
        }
      }
      &_online {
        &__elements {
          display: flex;
          flex-direction: column;
          border-radius: 12px;
          border: 1px solid var(--blackTransparent);
          overflow: hidden;
          &_element {
            display: flex;
            align-items: center;
            gap: 20px;
            padding: 8px 12px;
            cursor: pointer;
            background-color: var(--program-header);
            color: var(--color-p);
            text-decoration: none;
            &:not(:last-child) {
              border-bottom: 1px solid var(--blackTransparent);
            }
            &:hover {
              background-color: var(--program-bg-p);
            }
          }
        }
      }
      &_about {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        &__icon {
          width: min(100px, 100%);
          & > img {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
        }
        &__box {
          width: 100%;
          display: flex;
          flex-direction: column;
          border-radius: 4px;
          border: 1px solid var(--blackTransparent);
          overflow: hidden;
          &_element {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 20px;
            padding: 8px 12px;
            cursor: pointer;
            background-color: var(--program-header);
            & > a,
            & > span {
              color: var(--color-p);
              opacity: 0.6;
              text-decoration: none;
            }
            &:not(:last-child) {
              border-bottom: 1px solid var(--blackTransparent);
            }
            &:hover {
              background-color: var(--program-bg-p);
            }
          }
        }
      }
    }
  }
`;
