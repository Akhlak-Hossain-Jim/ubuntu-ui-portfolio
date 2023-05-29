import React, { useState } from "react";
import SoftContainer from "./SoftContainer";
import styled from "styled-components";
import useApp from "../store";
import { FaGraduationCap } from "react-icons/fa";
import { RiComputerLine, RiContactsFill } from "react-icons/ri";
import { GiPencilRuler } from "react-icons/gi";

export default function CvCompiler() {
  const { showCV, updateShowCV } = useApp();

  const [Tab, setTab] = useState("preview");

  const [Submitted, setSubmitted] = useState("preview");
  const [ProfileData, setProfileData] = useState({
    name: "Akhlak Hossain Jim",
    title: "Frontend Developer",
    educations: `East West university
2022-2027(Anticipated)
Dhaka, Bangladesh
BSc. in CSE`,
    skills: `React.js, Next.js, Bootstrap, Tailwind CSS, Styled-components, MUI, JavaScript, HTML, CSS, SCSS/Sass, C`,
    contact: `Dhaka, 1216, Bangladesh
tel:+8801835852526
mailto:aklajim@yahoo.com`,
    experience: [
      `<p>
      Feb 2022 - Present
      <br />
      UI Developer @ AssetMantle.one
      <br />
      <br />
      ● Collaborated with the UI/UX team to improve the UI of the
      app and with the members of the backend and blockchain
      developer teams to oversee seamless integration.
      <br />
      ● Helped junior developers understand the code base,
      approaches, and best practices.
      <br />
      ● Made responsive, user-friendly NFT Marketplace web apps for
      a million users from the front.
      <br />● Increased code readability by writing functional
      requirement documents, guides, and component libraries.
    </p>
    <p>
      Aug 2021 - Jan 2022
      <br />
      Frontend Developer @ AlphaProMed
      <br />
      <br />
      ● Insured accessibility by converting Wireframes to actual
      design with “pixel perfect” accuracy and optimized for
      maximizing speed by 18%.
      <br />
      ● Collaborated with the UI/UX team to improve the look and
      usability; with the cross-functional team to oversee seamless
      backend integration.
      <br />● Increased code readability and reusability by writing
      functional documents and guides.
    </p>
    <p>
      Feb 2021 - Jan 2022
      <br />
      Frontend Developer @ Woman Opportunities
      <br />
      <br />
      ● Generated 80% of user visits by building user-friendly,
      Responsive, pixel-perfect, and easy-to-navigate websites.
      <br />● Increased 90% of user interaction by writing cleanly
      reusable fast executable code with modern JavaScript,
      React.js, and Styled-Components.
    </p>
    <p>
      Jun 2021 - Aug 2021
      <br />
      Frontend Developer at Aamartaka
      <br />
      <br />
      ● Increased 20% of user visits by building a clean-looking web
      app.
      <br />
      ● Increased 40% of user interaction by building a modern,
      user-friendly, Responsive pixel-perfect, and easy-to-navigate
      web app with clean, reusable code using modern JavaScript,
      React.js, Next.js, and SCSS..
      <br />● Integrated API in atomic structure to decrease the
      load time by 60%.
    </p>
    <p>
      Nov 2020 - Dec 2020
      <br />
      Frontend Developer at Parthib Associates
      <br />
      <br />
      ● Increased 50% of user visits by building a clean-looking web
      app.
      <br />● Increased 60% of user interaction by building a
      modern, user-friendly, Responsive pixel-perfect, and
      easy-to-navigate website with clean, reusable code using
      modern HTML, CSS, Bootstrap, and JavaScript.
      <br />● Decreased load time by using modern SCSS
    </p>
    <p>
      Oct 2019 - Oct 2020
      <br />
      Tech Lead at Shuvro Jaya, Dhaka
      <br />
      <br />
      ● Increased 60% of engagement by managing the Companies’
      online presence.
      <br />
      ● Improved 70% work efficiency by building internal web
      applications for dedicated tasks with Reactjs, (S)CSS,
      Styled-Components, and firebase.
      <br />
      ● Increased 90% of sales by managing Public Relations through
      Facebook Messenger and providing balanced Customer Support.
      <br />● Improved CTR rate from 1.2% to 4.1% by implementing
      marketing strategies.
    </p>`,
    ],
  });

  const [FormName, setFormName] = useState(ProfileData.name);
  const [FormProfession, setFormProfession] = useState(ProfileData.title);
  const [FormEducation, setFormEducation] = useState(ProfileData.educations);
  const [FormSkills, setFormSkills] = useState(ProfileData.skills);
  const [FormExperience, setFormExperience] = useState(ProfileData.experience);
  const [FormContact, setFormContact] = useState(ProfileData.contact);

  const tabs = [
    {
      name: "Preview",
      value: "preview",
    },
    {
      name: "Edit",
      value: "edit",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      FormName &&
      FormProfession &&
      FormEducation &&
      FormSkills &&
      FormContact &&
      FormExperience
    ) {
      let obj = {
        name: FormName,
        title: FormProfession,
        educations: FormEducation,
        skills: FormSkills,
        contact: FormContact,
        experience: FormExperience,
      };
      setProfileData(obj);
    }
  };

  return (
    <SoftContainer
      name={"CV Creator"}
      showApp={showCV}
      updateShowApp={updateShowCV}
      bg={"#484b59"}
    >
      <Container>
        <div className="buttons">
          {/* {React.Children.toArray(
            tabs.map((tab) => (
              <button onClick={() => setTab(tab.value)}>{tab.name}</button>
            ))
          )} */}
          <button
            onClick={() => {
              setTab("preview");
              setTimeout(() => {
                window.print();
              }, 100);
            }}
          >
            Print
          </button>{" "}
        </div>
        {Tab === "preview" ? (
          <div className="resume">
            <h1>Akhlak Hossain Jim</h1>
            <h2>Frontend Developer</h2>
            <div className="grid">
              <div className="left">
                <span className="icon">
                  <FaGraduationCap />
                </span>
                <h3>EDUCATION</h3>
                <p>East West university</p>
                <p>2022-2027(Anticipated)</p>
                <p>Dhaka, Bangladesh</p>
                <p>BSc. in CSE</p>
                <span className="icon">
                  <GiPencilRuler />
                </span>
                <h3>SKILLS</h3>
                {React.Children.toArray(
                  ProfileData.skills
                    .split(",")
                    .map((skill) => <h3 className="skill">{skill}</h3>)
                )}
                <span className="icon">
                  <RiContactsFill />
                </span>
                <h3>CONTACT</h3>
                <p>
                  Dhaka, 1216, Bangladesh
                  <br />
                  <a href="tel:+8801835852526">+8801835852526</a>
                  <br />
                  <a href="mailto:aklajim@yahoo.com">aklajim@yahoo.com</a>
                </p>
              </div>
              <div className="right">
                <span className="icon">
                  <RiComputerLine />
                </span>
                <h3>EXPERIENCE</h3>
                <div
                  className="experience"
                  //   dangerouslySetInnerHTML={{ __html: ProfileData.experience }}
                >
                  <p>
                    Feb 2022 - Present
                    <br />
                    UI Developer @ AssetMantle.one
                    <br />
                    <br />
                    ● Collaborated with the UI/UX team to improve the UI of the
                    app and with the members of the backend and blockchain
                    developer teams to oversee seamless integration.
                    <br />
                    ● Helped junior developers understand the code base,
                    approaches, and best practices.
                    <br />
                    ● Made responsive, user-friendly NFT Marketplace web apps
                    for a million users from the front.
                    <br />● Increased code readability by writing functional
                    requirement documents, guides, and component libraries.
                  </p>
                  <p>
                    Aug 2021 - Jan 2022
                    <br />
                    Frontend Developer @ AlphaProMed
                    <br />
                    <br />
                    ● Insured accessibility by converting Wireframes to actual
                    design with “pixel perfect” accuracy and optimized for
                    maximizing speed by 18%.
                    <br />
                    ● Collaborated with the UI/UX team to improve the look and
                    usability; with the cross-functional team to oversee
                    seamless backend integration.
                    <br />● Increased code readability and reusability by
                    writing functional documents and guides.
                  </p>
                  <p>
                    Feb 2021 - Jan 2022
                    <br />
                    Frontend Developer @ Woman Opportunities
                    <br />
                    <br />
                    ● Generated 80% of user visits by building user-friendly,
                    Responsive, pixel-perfect, and easy-to-navigate websites.
                    <br />● Increased 90% of user interaction by writing cleanly
                    reusable fast executable code with modern JavaScript,
                    React.js, and Styled-Components.
                  </p>
                  <p>
                    Jun 2021 - Aug 2021
                    <br />
                    Frontend Developer at Aamartaka
                    <br />
                    <br />
                    ● Increased 20% of user visits by building a clean-looking
                    web app.
                    <br />
                    ● Increased 40% of user interaction by building a modern,
                    user-friendly, Responsive pixel-perfect, and
                    easy-to-navigate web app with clean, reusable code using
                    modern JavaScript, React.js, Next.js, and SCSS..
                    <br />● Integrated API in atomic structure to decrease the
                    load time by 60%.
                  </p>
                  <p>
                    Nov 2020 - Dec 2020
                    <br />
                    Frontend Developer at Parthib Associates
                    <br />
                    <br />
                    ● Increased 50% of user visits by building a clean-looking
                    web app.
                    <br />● Increased 60% of user interaction by building a
                    modern, user-friendly, Responsive pixel-perfect, and
                    easy-to-navigate website with clean, reusable code using
                    modern HTML, CSS, Bootstrap, and JavaScript.
                    <br />● Decreased load time by using modern SCSS
                  </p>
                  <p>
                    Oct 2019 - Oct 2020
                    <br />
                    Tech Lead at Shuvro Jaya, Dhaka
                    <br />
                    <br />
                    ● Increased 60% of engagement by managing the Companies’
                    online presence.
                    <br />
                    ● Improved 70% work efficiency by building internal web
                    applications for dedicated tasks with Reactjs, (S)CSS,
                    Styled-Components, and firebase.
                    <br />
                    ● Increased 90% of sales by managing Public Relations
                    through Facebook Messenger and providing balanced Customer
                    Support.
                    <br />● Improved CTR rate from 1.2% to 4.1% by implementing
                    marketing strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={FormName}
              onChange={(e) => setFormName(e.target.value)}
            />
            <label htmlFor="title">Professional Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              required
              value={FormProfession}
              onChange={(e) => setFormProfession(e.target.value)}
            />
            <label htmlFor="educations">Educations:</label>
            <textarea
              name="educations"
              id="educations"
              rows={4}
              required
              value={FormEducation}
              onChange={(e) => setFormEducation(e.target.value)}
            />
            <label htmlFor="skills">Skills:</label>
            <textarea
              name="skills"
              id="skills"
              rows={4}
              required
              value={FormSkills}
              onChange={(e) => setFormSkills(e.target.value)}
            />
            <label htmlFor="experience">Relevant Experience:</label>
            <textarea
              name="experience"
              id="experience"
              rows={4}
              required
              value={FormExperience}
              onChange={(e) => setFormExperience(e.target.value)}
            />
            <label htmlFor="contact">Contact Information:</label>
            <textarea
              name="contact"
              id="contact"
              rows={4}
              required
              value={FormContact}
              onChange={(e) => setFormContact(e.target.value)}
            />
            <button type="submit">Create</button>
          </form>
        )}
      </Container>
    </SoftContainer>
  );
}
const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=PT+Mono&display=swap");
  --bg-cv: #484b59;
  --c-primary: #78d492;
  --c-regular: #fff79a;
  font-family: "PT Mono", monospace;
  height: 100%;
  width: 100%;
  overflow: auto;
  color: var(--c-regular);
  @media print {
    height: 100%;
  }
  & > .buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
    padding: 24px 24px 0;
    gap: 12px;
    & > button {
      padding: 6px 12px;
      color: var(--bg-cv);
      background-color: var(--c-primary);
      font-weight: 500;
      border: none;
      outline: none;
      border-radius: 24px;
    }
    @media print {
      display: none;
    }
  }
  & > .resume {
    padding: 48px;
    font-weight: 300;
    font-size: 11.5px;
    & > * {
      font-family: "PT Mono", monospace;
    }
    & > h1,
    & > h3 {
      color: var(--c-primary);
      text-align: center;
    }
    h1 {
      font-size: 38.5px;
      font-weight: 300;
    }
    h2 {
      font-size: 17.2px;
      color: var(--c-regular) !important;
      text-align: center;
      font-weight: 400;
      padding-top: 8px;
    }
    h3 {
      font-size: 17.2px;
      color: var(--c-primary);
      font-weight: 400;
      padding: 12px 0;
      &.skill {
        padding: 6px;
        font-size: 15px;
      }
    }
    & > .grid {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 48px;
      padding-top: 12px;
      .icon {
        padding-top: 12px;
        font-size: 48px;
      }
      a {
        color: inherit;
      }
      & > .left {
        text-align: right;
        display: flex;
        flex-direction: column;
      }
      & > .right {
        text-align: left;
        display: flex;
        flex-direction: column;
        & > .experience {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
      }
    }
  }
  & > form {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 24px;
    & > input,
    & > textarea {
      margin-bottom: 6px;
      padding: 6px 0;
      background-color: transparent;
      outline: none;
      border: none;
      border-bottom: 2px solid var(--c-primary);
      color: var(--c-primary);
      resize: none;
      font-size: 15px;
    }
    & > textarea {
      white-space: break-spaces;
    }
    & > button {
      margin-left: auto;
      padding: 6px 24px;
      font-size: 18px;
      font-weight: 500;
      border-radius: 24px;
      border: none;
      background-color: var(--c-primary);
      color: var(--bg-cv);
    }
  }
`;
