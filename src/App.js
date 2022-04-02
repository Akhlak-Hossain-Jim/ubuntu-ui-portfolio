import React from "react";
import Header from "./layout/Header";
import HomeContainer from "./styles/home";

function App() {
  return (
    <HomeContainer>
      <Header />
      <div className="body">
        <aside></aside>
      </div>
    </HomeContainer>
  );
}

export default App;
