import React, { useState } from "react";
import Header from "./layout/Header";
import HomeContainer from "./styles/home";
import Terminal from "./components/Terminal";
import Aside from "./layout/Aside";

function App() {
  const [currentApp, setCurrentApp] = useState("");
  const [showTerminal, setShowTerminal] = useState(true);

  return (
    <HomeContainer>
      <Header isCurrent={currentApp} setIsCurrent={setCurrentApp} />
      <div className="body">
        <Aside
          terminal={showTerminal}
          setTerminal={setShowTerminal}
          setCurrentApp={setCurrentApp}
          currentApp={currentApp}
        />
        <main>
          <Terminal
            showState={showTerminal}
            showApp={setShowTerminal}
            isCurrent={currentApp}
            setIsCurrent={setCurrentApp}
          />
        </main>
      </div>
    </HomeContainer>
  );
}

export default App;
