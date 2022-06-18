import React from "react";
import ActiveScenarios from "./components/ActiveScenarios";
import Header from "./components/Header";
import ScenariosList from "./components/ScenariosList";

function App() {
  return (
    <div className="App">
      <header className="w-screen">
        <Header />
      </header>
      <main className="container mx-auto">
        <div className='flex w-full'>
          <section className='flex flex-col content-around justify-start w-3/12 px-4 border-r-4 border-black'>
            <ScenariosList />
          </section>
          <section className='flex flex-col w-9/12 px-4'>
            <ActiveScenarios />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;