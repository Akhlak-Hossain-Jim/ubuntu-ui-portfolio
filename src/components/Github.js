import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import {
  BiCopy,
  BiBuildingHouse,
  BiLink,
  BiGitRepoForked,
} from "react-icons/bi";
import { FiTwitter } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GoMail } from "react-icons/go";
import { SiLinktree } from "react-icons/si";
import useApp from "../store";

export default function Github() {
  const { showGithub, updateShowGithub, currentApp, updateCurrentApp } =
    useApp();
  const [state, setState] = useState("");
  const [Input, setInput] = useState();
  const [Name, setName] = useState("Akhlak-Hossain-Jim");
  const [GithubData, setGithubData] = useState();

  useEffect(() => {
    fetch(`https://api.github.com/users/${Name}`)
      .then((res) => res.json())
      .then((data) => setGithubData(data));
  }, [Name]);

  const handleSubmit = (e) => {
    e.preventDefault();
    Input && Input.length > 0 && setName(Input);
  };

  const handleMinimize = () => {
    updateCurrentApp("");
    setState("minimize");
  };

  const handleClose = () => {
    updateCurrentApp("");
    setInput("");
    setName("Akhlak-Hossain-Jim");
    updateShowGithub(false);
  };

  useEffect(() => {
    state === "minimize" && currentApp === "github" && setState("");
  }, [currentApp]);

  return (
    <>
      {showGithub && (
        <Container
          className={`${state} ${currentApp === "github" ? "focused" : ""}`}
          onClick={() => updateCurrentApp("github")}
        >
          <div className="github_header">
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
          <div className="github_body">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={Input}
                placeholder="Enter Github A Username"
                required
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit">Search</button>
            </form>
            {GithubData && GithubData.login ? (
              <div className="github_body__profile">
                <div className="github_body__profile_avatar">
                  <img
                    src={GithubData.avatar_url && GithubData.avatar_url}
                    alt={`${GithubData.name && GithubData.name}'s avatar`}
                  />
                  {GithubData.login === "Akhlak-Hossain-Jim" && (
                    <div className="github_body__profile_avatar__creator">
                      &copy; Creator's Profile
                    </div>
                  )}
                </div>
                <div className="github_body__profile_info">
                  <div className="github_body__profile_info__element">
                    {GithubData.name && <h3>{GithubData.name}</h3>}
                    {GithubData.login && <p>{GithubData.login}</p>}
                    {GithubData.bio && <p>{GithubData.bio}</p>}
                  </div>
                  <div className="github_body__profile_info__element">
                    {GithubData.location && (
                      <p>
                        <HiOutlineLocationMarker /> {GithubData.location}
                      </p>
                    )}
                    {GithubData.company && (
                      <p>
                        <BiBuildingHouse />
                        {GithubData.company}
                      </p>
                    )}
                    {GithubData.blog && (
                      <a
                        href={GithubData.blog}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BiLink />
                        {GithubData.blog}
                      </a>
                    )}
                    {GithubData.twitter_username && (
                      <a
                        href={`https://twitter.com/${GithubData.twitter_username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiTwitter />@{GithubData.twitter_username}
                      </a>
                    )}
                    {GithubData.login === "Akhlak-Hossain-Jim" && (
                      <a
                        href="https://linktr.ee/akhlakhossainjim"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SiLinktree /> Linktree
                      </a>
                    )}
                    {GithubData.email && (
                      <a href={`mailto:${GithubData.email}`}>
                        <GoMail />
                        {GithubData.email}
                      </a>
                    )}
                    {GithubData.public_repos && (
                      <p>
                        <BiGitRepoForked /> {GithubData.public_repos}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <p className="github_body__profile">
                No Github Profile found for '{Name}'
              </p>
            )}
          </div>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  position: absolute;
  background-color: var(--github-bg);
  top: 5%;
  left: 5%;
  border-radius: 12px;
  width: min(800px, 100%);
  height: auto;
  overflow: none;
  overflow-y: auto;
  z-index: 2;
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
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .github_header {
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
  .github_body {
    padding: 10px;
    width: 100%;
    height: 85%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    color: var(--github-text);
    & > form {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      & > input {
        color: var(--github-text);
        background-color: var(--github-dark);
        padding: 12px 16px;
        border-radius: 12px;
        border: none;
        outline: none;
        width: min(214px, 100%);
      }
      & > button {
        color: var(--github-text);
        background-color: var(--github-blue);
        padding: 12px 16px;
        border-radius: 12px;
        border: none;
        outline: none;
      }
    }
    &__profile {
      padding: 18px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 24px;
      &_avatar {
        width: min(200px, 100%);
        aspect-ratio: 1/1;
        border-radius: 50%;
        position: relative;
        & > img {
          width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 50%;
        }
        &__creator {
          position: absolute;
          bottom: 0;
          right: 0;
          background-color: var(--golden);
          color: var(--github-dark);
          padding: 4px 8px;
          border-radius: 12px;
          text-align: right;
          font-weight: 700;
        }
      }
      &_info {
        display: grid;
        width: min(600px, 100%);
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        @media (max-width: 600px) {
          grid-template-columns: 1fr;
        }
        &__element {
          display: flex;
          flex-direction: column;
          gap: 12px;
          & > a {
            color: var(--github-text);
            text-decoration: none;
          }
        }
      }
    }
  }
`;
