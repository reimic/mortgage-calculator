import React from 'react'
import { useDispatch } from 'react-redux'
import { removeScenarioFromList } from '../features/scenarioListSlice'
import { addScenarioToActive } from "../features/scenarioActiveSlice"



interface ScenarioCardTypes {
    name: string,
    id: number,
}

export default function ScenarioCard({ name, id }: ScenarioCardTypes) {
  const dispatch = useDispatch()

  const handleActivateScenario = () => {
    dispatch(addScenarioToActive({name, id}))
  }

  return (
    <div className='shadow-basic my-2 p-2 bg-green border-2 border-black rounded-md font-bebas tracking-wide text-xl'>
        <div onClick={handleActivateScenario} className="reservation-card-container">{name}</div>
    </div>
  )
}
