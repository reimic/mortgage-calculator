import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import ScenarioCard from "./components/ScenarioCard";
import ScenarioPage from "./components/ScenarioPage";
import { addScenarioToList } from "./features/scenarioListSlice";




function App() {
  const dispatch = useDispatch()
  const [scenarioNameInput, setScenarioNameInput] = useState("")
  const scenarioList = useSelector((state: RootState) => state.scenariosList.name)
  const scenarioActive = useSelector((state: RootState) => state.scenariosActive.scenarios)

  const handleAddScenario = () => {
    if(!scenarioNameInput) return
    dispatch(addScenarioToList(scenarioNameInput))
    setScenarioNameInput("")
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Scenarios</h5>
            <div className="list-scenarios">
              {scenarioList.map((name, index) => {
                return <ScenarioCard name={name} id={index}/>
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={scenarioNameInput} onChange={(e) => setScenarioNameInput(e.target.value)}/>
            <button onClick={handleAddScenario}>New scenario</button>
          </div>
        </div>
        <div className="active-scenarios">
        {scenarioActive.map((scenario, index) => {
                return <ScenarioPage name={scenario.name} id={scenario.id}/>
              })}
        </div>
      </div>
    </div>
  );
}

export default App;