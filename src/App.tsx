import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./app/store";
import Header from "./components/Header";
import ScenarioCard from "./components/ScenarioCard";
import ScenarioPage from "./components/ScenarioPage";
import ScenariosMain from "./components/ScenariosMain";
import { addScenarioToList } from "./features/scenarioListSlice";




function App() {

  return (
    <div className="App">
      <header className="w-screen">
        <Header />
      </header>
      <main className="container mx-auto px-4">
        <ScenariosMain />
      </main>
    </div>
  );
}

export default App;