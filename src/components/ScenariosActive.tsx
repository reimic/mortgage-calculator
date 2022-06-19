import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import ScenarioPage from './ScenarioPage'
import * as T from '../types/Scenario'

export default function ActiveScenarios() {
  const scenariosDataBase = useSelector((state: RootState) => state.scenariosDataBase.scenarios)

  function renderScenarios(): ReactNode  {
    return scenariosDataBase
      .filter(scenario => scenario.display.active)
        ?.sort((a,b) => {return a.display.activeOrder - b.display.activeOrder})
          .map((scenario: T.Scenario) => {
            if(scenario.display.active){
              return <ScenarioPage scenario={scenario}/>
            }
          })
  }

  return (
    <>
    <h2 className='py-4 uppercase font-bebas tracking-wider text-2xl'>Active scenarios</h2>
    <div className=''>
        {renderScenarios()}
    </div>
    </>
  )
}
