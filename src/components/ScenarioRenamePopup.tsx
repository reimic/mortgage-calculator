import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeScenarioName } from '../features/scenarioDataBaseSlice'
import * as T from "../types/Scenario"

type Props = {
    close: React.Dispatch<React.SetStateAction<boolean>>,
    id: T.Id,
    currentNameInput: string,
    changeNameInput: React.Dispatch<React.SetStateAction<string>>,
    
}

export default function Renaming(props: Props) {
    const dispatach = useDispatch()

    const confirmRename = () => {
        if(!props.currentNameInput) return
        const name = {name: props.currentNameInput}
        const id = {id: props.id}
        dispatach(changeScenarioName({name: name, id: id.id}))
        props.changeNameInput("")
        props.close(false)
    }

    const cancelRename = () => {
        props.close(false)
    }
    
    return (
        <div 
            className='absolute z-20 top-0 -left-24 -right-24 pl-2 pr-3 pt-2 shadow-basic border-2 border-black rounded-md bg-white text-base tracking-wide'
            >
            Type new name:
            <div className="flex flex-col content-center w-full">
                <input className='px-2 shadow-basic border-2 border-black rounded-md font-bebas tracking-wide text-base' value={props.currentNameInput} onChange={(e) => props.changeNameInput(e.target.value)}/>
                <div className='flex justify-between pb-2 pt-2'>
                    <button className='px-2 py-1 shadow-basic bg-orange border-2 border-black rounded-md font-bebas tracking-widest text-base' onClick={confirmRename}>Confirm rename</button>
                    <button className='px-2 py-1 shadow-basic bg-red-dark border-2 border-black rounded-md font-bebas tracking-widest text-base text-white' onClick={cancelRename}>Cancel</button>
                </div>
            </div>
        </div>
    )
}
