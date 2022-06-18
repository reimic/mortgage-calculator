import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import ScenarioPage from './ScenarioPage'



export default function ActiveScenarios() {
  const scenarioActive = useSelector((state: RootState) => state.scenariosActive.scenarios)
  
  

  return (
    <>
    <h2 className='py-4 uppercase font-bebas tracking-wider text-2xl'>Active scenarios</h2>
    <div className=''>
        {scenarioActive.map((scenario, index) => {
            return <ScenarioPage name={scenario.name} id={scenario.id}/>
        })}
    </div>
    </>
  )
}
