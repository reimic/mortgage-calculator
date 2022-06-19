import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as T from '../types/Scenario'
import CalculatorLoanInstallment from './Calculators/CalculatorLoanInstallment'
import Renaming from './ScenarioRenamePopup'

type Props = {
    scenario: T.Scenario
}

export default function ScenarioPage({scenario}: Props) {
    const {name, id, display, items} = scenario
    const dispatch = useDispatch()
    const [isRenaming, setRenaming] = useState(false)
    const [scenarioNameInput, setScenarioNameInput] = useState("")

  return (
    <div className="mb-4 mt-8 relative shadow-basic border-2 border-black rounded-md bg-white">
        <div className="flex justify-between absolute -top-4 -left-[2px] -right-[2px] min-w-full p-2 bg-blue border-2 border-black rounded-md font-bebas tracking-widest text-xl">
            <h2>
                {name.name}
            </h2>
            <div className='flex'>
                <div className='relative'>
                    <button 
                        className='mx-2 shadow-basic bg-orange border-2 border-black rounded-md px-4 py-1 font-bebas tracking-widest text-base'
                        onClick={() => setRenaming(true)}
                        >
                        Rename
                    </button>
                    {isRenaming && <Renaming close={setRenaming} id={id} currentNameInput={scenarioNameInput} changeNameInput={setScenarioNameInput}/>}
                </div>
                <button 
                    className='text-white mx-2 shadow-basic bg-red-dark border-2 border-black rounded-md px-4 py-1 font-bebas tracking-widest text-base'
                    //onClick={handleDelete}
                    >
                    Delete
                </button>
            </div>
        </div>
        <div className='p-2 text-lg'>
            <h3 className='mt-9 font-bebas tracking-wide'>Pick a calculator:</h3>
            <button 
                className='text-white mx-2 mb-2 shadow-basic bg-blue-dark border-2 border-black rounded-md px-4 py-1 font-bebas tracking-widest text-base'
                >
                loan installment
            </button>
            <CalculatorLoanInstallment />
            
            
            {/* 
            <div className='font-inria'>
                {items ? `${items} here` : "Empty scenario!"}
            </div> 
            <button 
                    className='my-2 mx-4 shadow-basic rotate-basic bg-magenta border-2 border-black rounded-md w-48 h-14 font-bebas tracking-widest text-2xl'
                    >
                    Add 10
            </button>           
            */}

        </div>  
    </div>
  )
}
