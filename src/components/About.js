import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SoftContainer from "./SoftContainer";
import useApp from "../store";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GoGlobe, GoMail } from "react-icons/go";
import { FaDev } from "react-icons/fa";

export default function About() {
  const { showAbout, updateShowAbout } = useApp();
  const [GithubData, setGithubData] = useState();

  useEffect(() => {
    fetch(`https://api.github.com/users/Akhlak-Hossain-Jim`)
      .then((res) => res.json())
      .then((data) => setGithubData(data));
  }, []);

  const socials = [
    {
      name: "Web",
      icon: <GoGlobe />,
      href: "https://ahjim.com/",
    },
    {
      name: "LinkedIn",
      icon: <BsLinkedin />,
      href: "https://www.linkedin.com/in/akhlakhossainjim/",
    },
    {
      name: "Github",
      icon: <BsGithub />,
      href: "https://github.com/Akhlak-Hossain-Jim/",
    },
    {
      name: "Mail",
      icon: <GoMail />,
      href: "mailto:ahjim@yahoo.com",
    },
    {
      name: "DEV",
      icon: <FaDev />,
      href: "https://dev.to/akhlakhossainjim",
    },
  ];

  console.log(GithubData);

  return (
    <SoftContainer
      name={"About"}
      showApp={showAbout}
      updateShowApp={updateShowAbout}
      bg={`var(--github-bg)`}
    >
      <Container>
        <div className="about">
          <div className="avatar">
            {GithubData && (
              <img
                src={GithubData.avatar_url && GithubData.avatar_url}
                alt={`${GithubData.name && GithubData.name}'s avatar`}
              />
            )}
          </div>
          <div className="text">
            <h1>Hello World</h1>
            <h2>My self Jim! 👋</h2>
            <p>and I write code for web.</p>
            <div className="social">
              {React.Children.toArray(
                socials.map((el) => (
                  <a
                    className={el.name}
                    href={el.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {el.icon}
                  </a>
                ))
              )}
            </div>
          </div>
        </div>
        <div className="details">
          <p>
            I write code as a UI Developer in the product team of{" "}
            <a
              href="http://assetmantle.one"
              target="_blank"
              rel="noopener noreferrer"
            >
              Assetmantle
            </a>
            . My focus is to ship Frontend's of web apps for the company and
            ensuring the product is seamlessly accessible across platforms, are
            easy to use/navigate, primarily through React.js/Next.js,
            SCSS/Bootstrap and with JavaScripts. Along with my team lead and
            fellow engineers, and other members from different team we ensure
            the product quality that we push in production, write documents
            about products we build and discuss about the betterment of the
            functionality we are currently using and the functionality we can
            introduce to enhance the experience of the current apps.
          </p>
          <p>
            Before that I worked on building scalable, rich, web experience As a
            Frontend Developer at{" "}
            <a
              href="http://alphapromed.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              AlphaProMed
            </a>
            ,{" "}
            <a
              href="http://worldwidewo.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Woman Opportunity
            </a>
            ,{" "}
            <a
              href="http://aamartaka.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aamartaka
            </a>
            ,{" "}
            <a href="#" target="_blank" rel="noopener noreferrer">
              Parthib Associates
            </a>
            , and Technical Support Lead at{" "}
            <a
              href="https://www.facebook.com/ShuvroJaya"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shuvro Jaya
            </a>
            .
          </p>
          <p>
            From the beginning I taught myself how to code, and how to solve
            problems with code. In my free time, I love to explore and build
            apps for my regular life problem of simple tasks that I can easily
            complete with my created app, and also it's fun to do. I also like
            explore other language such as C, Python and currently in Java.
          </p>
          <p>
            Besides tech In my holidays, I like to ride my cycle for
            refreshment, it's also my favorite way of exercising and exploring
            my local area/country.
          </p>
          <p>
            Thanks for stopping by my site, and feel free to{" "}
            <a
              href="mailto:aklajim@yahoo.com?subject=Hello There!&body=Hi Akhlak, so I was looking at your Ubuntu UI web app and..."
              target="_blank"
              rel="noopener noreferrer"
            >
              reach out
            </a>
            ! 😊
          </p>
        </div>
      </Container>
    </SoftContainer>
  );
}
const Container = styled.div`
  margin: 0 auto;
  width: min(900px, 100%);
  padding: 24px;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  & > .about {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    align-items: center;
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      gap: 24px;
    }
    & > * {
      /* width: 100%; */
      & > img {
        border-radius: 50%;
        width: 100%;
        height: auto;
        box-shadow: 20px 8px 0 var(--orange);
      }
    }
    & > .text {
      display: flex;
      flex-direction: column;
      gap: 12px;
      & > h1 {
        font-size: 3rem;
        font-weight: 300;
        @media (max-width: 600px) {
          font-size: 2.5rem;
        }
      }
      & > h2 {
        font-size: 2.2rem;
        font-weight: 500;
        @media (max-width: 600px) {
          font-size: 1.8rem;
        }
      }
      & > p {
        font-size: 1.4rem;
        @media (max-width: 600px) {
          font-size: 1.1rem;
        }
      }
      & > * {
        margin: 0;
      }
      & > .social {
        display: flex;
        flex-direction: row;
        gap: 24px;
        & > a {
          font-size: 24px;
          color: var(--orange);
          &.Mail {
            transform: scale(1.3);
          }
        }
      }
    }
  }
  & > .details {
    display: flex;
    flex-direction: column;
    gap: 24px;
    & > p {
      text-align: justify;
      font-size: 1.2rem;
      & > a {
        color: var(--orange);
        font-weight: 500;
        /* text-decoration: none; */
        /* font-size: 1.4rem; */
      }
    }
  }
`;
