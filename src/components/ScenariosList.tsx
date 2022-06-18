import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { addScenarioToDataBase } from '../features/scenarioDataBaseSlice'
import { addScenarioToList } from '../features/scenarioListSlice'
import ScenarioCard from './ScenarioCard'

export default function ScenariosList() {
    const dispatch = useDispatch()
    const [scenarioNameInput, setScenarioNameInput] = useState("")
    const scenariosList = useSelector((state: RootState) => state.scenariosList.list)
    const scenariosDataBase = useSelector((state: RootState) => state.scenariosDataBase.scenarios)
    const handleNewScenario = () => {
        if(!scenarioNameInput) return
        const newId = nanoid()
        const newScenario = {
            name: scenarioNameInput,
            id: newId,
            display: {
                active: false,
                activeOrder: 9999,
                list: true,
                listOrder: 1,
            }
        }
        dispatch(addScenarioToDataBase(newScenario))
        dispatch(addScenarioToList(newScenario))
        setScenarioNameInput("")
    }
    
  return (
    <>
    <h2 className='py-4 uppercase font-bebas tracking-wider text-2xl'>Your scenarios</h2>
    <div className='flex flex-col justify-between'>
        <div className='pt-2'>
            {scenariosList.map(({name, id}) => {
                return <ScenarioCard name={name} id={id}/>
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
