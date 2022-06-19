import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleScenarioActiveStatus, toggleScenarioListStatus } from "../features/scenarioDataBaseSlice"
import * as T from '../types/Scenario'

type Props = {
  scenario: T.Scenario
}

export default function ScenarioCard({scenario}: Props) {
  const {name, id, display, items} = scenario
  const dispatch = useDispatch()

  const handleToggleScenario = () => {
    dispatch(toggleScenarioActiveStatus(id))
    dispatch(toggleScenarioListStatus(id))
  }

  return (
    <div 
      className='shadow-basic my-2 p-2 bg-green border-2 border-black rounded-md font-bebas tracking-wide text-xl'
      onClick={handleToggleScenario}
      >
        <div 
          className="reservation-card-container"
          >
          {name.name}
        </div>
    </div>
  )
}
