import React, {useState} from "react"

function MortgageCalculator(){
    const [data, setData] = useState({})

    function handleChange(){

    }
    
    
    
    return (
        <>
        <p>This is for calculating mortgages.</p>
        {/* onSubmit={setData(prevData => prevData)} */}
        <form >
            <label>
                property-price
                <input type="" value="" />
            </label>
            <input type="submit" value="" />
        </form>
        </>
    )
    
}

export default MortgageCalculator