import React from "react";
import Header from "./components/Header";
import ScenariosList from "./components/ScenariosList";
import ActiveScenarios from "./components/ScenariosActive";
import {  } from "./features/externalDataSlice"
import { useDispatch } from "react-redux";



function App() {
  // const dispatch = useDispatch()
  // function getExternalData(){
  //   dispatch(addInterestRates("Tom"))
  // }


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
            {/* <button onClick={getExternalData}>GET DATA</button> */}
            <ActiveScenarios />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;