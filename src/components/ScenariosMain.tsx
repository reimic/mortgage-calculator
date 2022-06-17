import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { RootState } from '../app/store'
import { addScenarioToList } from '../features/scenarioListSlice'
import ScenarioCard from './ScenarioCard'
import ScenarioPage from './ScenarioPage'

export default function ScenariosMain() {
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
        <div className='flex w-full '>
            <section className='flex flex-col content-around justify-start w-3/12 px-4 border-r-4 border-black'>
                <h2 className='py-4 uppercase font-bebas tracking-wider text-2xl'>Your scenarios</h2>
                <div className='flex flex-col justify-between'>
                <div className='pt-2'>
                    {scenarioList.map((name, index) => {
                        return <ScenarioCard name={name} id={index}/>
                    })}
                </div>
                <div className="py-2 flex flex-col content-center w-full">
                    <input className='px-2 z-0 focus:z-50 shadow-basic rotate-1 border-2 border-black rounded-md w-full h-12 font-bebas tracking-widest text-xl' value={scenarioNameInput} onChange={(e) => setScenarioNameInput(e.target.value)}/>
                    <button className='z-10 shadow-basic rotate-basic translate-x-20 bg-magenta border-2 border-black rounded-md w-48 h-14 font-bebas tracking-widest text-2xl' onClick={handleAddScenario}>New scenario</button>
                </div>
                </div>
            </section>
            <section className='flex flex-col w-9/12 px-4'>
                <h2 className='py-4 uppercase font-bebas tracking-wider text-2xl'>Active scenarios</h2>
                <div className=''>
                    {scenarioActive.map((scenario, index) => {
                        return <ScenarioPage name={scenario.name} id={scenario.id}/>
                    })}
                </div>
            </section>
        </div>
    )
}



