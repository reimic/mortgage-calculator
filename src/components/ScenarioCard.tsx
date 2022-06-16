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
    <div>
        <div onClick={handleActivateScenario} className="reservation-card-container">{name}</div>
    </div>
  )
}
