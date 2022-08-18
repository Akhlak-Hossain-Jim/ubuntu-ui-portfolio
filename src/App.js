import React, { useState } from "react";
import Header from "./layout/Header";
import HomeContainer from "./styles/home";
import Terminal from "./components/Terminal";
import Aside from "./layout/Aside";
import Github from "./components/Github";

function App() {
  const [currentApp, setCurrentApp] = useState("");
  const [showTerminal, setShowTerminal] = useState(false);
  const [showGithub, setShowGithub] = useState(false);

  return (
    <HomeContainer>
      <Header isCurrent={currentApp} setIsCurrent={setCurrentApp} />
      <div className="body">
        <Aside
          setCurrentApp={setCurrentApp}
          currentApp={currentApp}
          terminal={showTerminal}
          setTerminal={setShowTerminal}
          github={showGithub}
          setGithub={setShowGithub}
        />
        <main>
          <div className="bg" onClick={() => setCurrentApp("")}></div>
          <Terminal
            showState={showTerminal}
            showApp={setShowTerminal}
            isCurrent={currentApp}
            setIsCurrent={setCurrentApp}
            openGithub={setShowGithub}
          />
          <Github
            showState={showGithub}
            showApp={setShowGithub}
            isCurrent={currentApp}
            setIsCurrent={setCurrentApp}
          />
        </main>
      </div>
    </HomeContainer>
  );
}

export default App;
