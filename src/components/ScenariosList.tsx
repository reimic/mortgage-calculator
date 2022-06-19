import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { addNewScenarioToDataBase } from '../features/scenarioDataBaseSlice'
import ScenarioCard from './ScenarioCard'

export default function ScenariosList() {
    const dispatch = useDispatch()
    const [scenarioNameInput, setScenarioNameInput] = useState("")
    const scenariosDataBase = useSelector((state: RootState) => state.scenariosDataBase.scenarios)
    const handleNewScenario = () => {
        if(!scenarioNameInput) return
        dispatch(addNewScenarioToDataBase({name: scenarioNameInput}))
        setScenarioNameInput("")
    }
    
  return (
    <>
    <h2 className='py-4 uppercase font-bebas tracking-wider text-2xl'>Your scenarios</h2>
    <div className='flex flex-col justify-between'>
        <div className='pt-2'>
            {scenariosDataBase.flatMap((scenario) => {
                return <ScenarioCard scenario={scenario}/>
            })}
        </div>
        <div className="py-2 flex flex-col content-center w-full">
            <input className='px-2 z-0 focus:z-50 shadow-basic rotate-1 border-2 border-black rounded-md w-full h-12 font-bebas tracking-widest text-xl' value={scenarioNameInput} onChange={(e) => setScenarioNameInput(e.target.value)}/>
            <button className='z-10 shadow-basic rotate-basic translate-x-20 bg-magenta border-2 border-black rounded-md w-48 h-14 font-bebas tracking-widest text-2xl' onClick={handleNewScenario}>New scenario</button>
        </div>
    </div> 
    </>
  )
}
