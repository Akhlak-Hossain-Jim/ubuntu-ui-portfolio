import React, { useState } from "react";
import Header from "./layout/Header";
import HomeContainer from "./styles/home";
import Terminal from "./components/Terminal";
import Aside from "./layout/Aside";
import Github from "./components/Github";
import Settings from "./components/Settings";
import Install from "./components/Install";

function App() {
  const [AllApps, setAllApps] = useState(false);
  const [Background, setBackground] = useState("default");

  const [deferredPrompt, setDeferredPrompt] = useState();

  const [currentApp, setCurrentApp] = useState("");
  const [showTerminal, setShowTerminal] = useState(false);
  const [showGithub, setShowGithub] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showInstall, setShowInstall] = useState(false);

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    setDeferredPrompt(e);
    setShowInstall(true);
  });

  return (
    <HomeContainer background={Background}>
      <Header
        isCurrent={currentApp}
        setIsCurrent={setCurrentApp}
        activity={AllApps}
        openSettings={setShowSettings}
      />
      <div className="body">
        <Aside
          setCurrentApp={setCurrentApp}
          currentApp={currentApp}
          terminal={showTerminal}
          setTerminal={setShowTerminal}
          github={showGithub}
          setGithub={setShowGithub}
          settings={showSettings}
          setSettings={setShowSettings}
          AllApps={AllApps}
          setAllApps={setAllApps}
        />
        <main>
          <div className="bg" onClick={() => setCurrentApp("")}></div>
          <Install
            deferredPrompt={deferredPrompt}
            setDeferredPrompt={setDeferredPrompt}
            setShowInstall={setShowInstall}
            showInstall={showInstall}
          />
          <Terminal
            showState={showTerminal}
            showApp={setShowTerminal}
            isCurrent={currentApp}
            setIsCurrent={setCurrentApp}
            openGithub={setShowGithub}
            openSettings={setShowSettings}
          />
          <Github
            showState={showGithub}
            showApp={setShowGithub}
            isCurrent={currentApp}
            setIsCurrent={setCurrentApp}
          />
          <Settings
            showState={showSettings}
            showApp={setShowSettings}
            isCurrent={currentApp}
            setIsCurrent={setCurrentApp}
            setBackground={setBackground}
            Background={Background}
          />
        </main>
      </div>
    </HomeContainer>
  );
}

export default App;
