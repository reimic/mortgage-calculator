import React, { useState } from 'react'

export default function CalculatorLoanInstallment() {
    const [loanAmmount, setLoanAmmount] = useState<number>()
    const [creditDuration, setCreditDuration] = useState<number>()
    const [creditInterest, setCreditInterest] = useState<number>()

    const calculateMonthlyInstallment = () => {
        if(loanAmmount && creditDuration && creditInterest){
            const monthlyCreditInterest = (creditInterest / 12) / 100
            const intallment = loanAmmount * 12 * ((monthlyCreditInterest * ( 1 + monthlyCreditInterest)^creditDuration) / ((( 1 + monthlyCreditInterest)^creditDuration) - 1 ) )
            console.log(intallment)
            // nie działa, nie wylicza dobrze :(
        }
    }

    return (
    <>
        <div className='mt-2 border-t-2 border-black'></div>
        <div className='mt-2 flex'>
            <h4 className='font-bebas tracking-wide'> Loan Installment Calculator</h4>
            <p className='ml-2 font-inria tracking-normal text-sm'>Calculate your loan installments.</p>
        </div>
        
        {/* <p className='font-inria tracking-normal text-sm'>Provide basic data:</p> */}        
                
        <div className='flex my-2'>
            <input 
                className='mx-2 px-2 py-1 shadow-basic border-2 border-black rounded-md font-inria tracking-normal text-sm'
                type="number"
                placeholder='Loan ammount'
                value={loanAmmount}
                onChange={(e)=>setLoanAmmount(parseInt(e.target.value, 10))}
            />
            <input 
                className='mx-2 px-2 shadow-basic border-2 border-black rounded-md font-inria tracking-normal text-sm'
                type="number"
                placeholder='Credit duration'
                value={creditDuration}
                onChange={(e)=>setCreditDuration(parseInt(e.target.value, 10))}
            />
            <input 
                className='mx-2 px-2 shadow-basic border-2 border-black rounded-md font-inria tracking-normal text-sm'
                type="number"
                placeholder='Credit interest'
                value={creditInterest}
                onChange={(e)=>setCreditInterest(parseInt(e.target.value, 10))}
            />
            <button 
                className=' mx-2 px-2 py-1 shadow-basic bg-orange border-2 border-black rounded-md font-bebas tracking-widest text-base'
                onClick={calculateMonthlyInstallment}
                >
                Get Monthly installment
            </button> 
        </div>
        <h5 className='my-2 font-bebas tracking-wide'>
            Result:
        </h5>
    </>
    
  )
}
