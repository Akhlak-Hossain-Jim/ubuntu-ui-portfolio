import React, { useState } from "react";
import Header from "./layout/Header";
import HomeContainer from "./styles/home";
import Terminal from "./components/Terminal";
import Aside from "./layout/Aside";
import Github from "./components/Github";
import Settings from "./components/Settings";
import Install from "./components/Install";
import useApp from "./store";

function App() {
  const { updateCurrentApp } = useApp();
  const [Background, setBackground] = useState("default");

  const [deferredPrompt, setDeferredPrompt] = useState();
  const [showInstall, setShowInstall] = useState(false);
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    setDeferredPrompt(e);
    setShowInstall(true);
  });

  return (
    <HomeContainer background={Background}>
      <Header />
      <div className="body">
        <Aside />
        <main>
          <div className="bg" onClick={() => updateCurrentApp("")}></div>
          <Install
            deferredPrompt={deferredPrompt}
            setDeferredPrompt={setDeferredPrompt}
            setShowInstall={setShowInstall}
            showInstall={showInstall}
          />
          <Terminal />
          <Github />
          <Settings setBackground={setBackground} Background={Background} />
        </main>
      </div>
    </HomeContainer>
  );
}

export default App;
