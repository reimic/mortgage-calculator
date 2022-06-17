import React from 'react'
import { useDispatch } from 'react-redux'
import {addItemToItems, changeScenarioName} from "../features/scenarioActiveSlice"

interface ScenarioPageTypes {
    name: string,
    id: number,
    items?: number[]
}

export default function ScenarioPage({ name, id, items }: ScenarioPageTypes) {
    const dispatch = useDispatch()
    const handleRename = () => {
        dispatch(changeScenarioName({id, newName: "Tom"}))
    }
    const handleAddItem = () => {
        dispatch(addItemToItems({id, item: 10}))
    }

  return (
    <div className="mb-4 mt-8 relative shadow-basic border-2 border-black rounded-md bg-white">
        <div className="absolute -top-4 -left-[2px] -right-[2px] min-w-full p-2 bg-blue border-2 border-black rounded-md font-bebas tracking-widest text-xl">
            <h2>{name}</h2>
        </div>
        <div className='p-2 font-inria tracking-wide text-lg h-32'>

            <div className=''>
                {items ? `${items} here` : "Empty scenario!"}
            </div>
        </div>
        <div className='h-32'>
                <button className='my-2 mx-4 shadow-basic -rotate-basic bg-magenta border-2 border-black rounded-md w-48 h-14 font-bebas tracking-widest text-2xl' onClick={handleRename}>Rename to Tom</button>
                <button className='my-2 mx-4 shadow-basic rotate-basic bg-magenta border-2 border-black rounded-md w-48 h-14 font-bebas tracking-widest text-2xl' onClick={handleAddItem}>Add 10</button>
        </div>    
    </div>
  )
}
