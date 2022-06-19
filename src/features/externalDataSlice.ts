import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface InterestRates {
    interestRates: {
        centralBankRates: any[],
        nonCentralBankRates: any[],
        retrived: number,
    }
}

interface ExternalDataState {
    data: InterestRates[]
}

const initialState: ExternalDataState = {
    data: []
}

export const externalDataSlice = createSlice({
    name: "scenariosList",
    initialState,
    reducers: {
        // addInterestRates(state, action: PayloadAction<any>){
        //     async function getInterestRates():Promise<any>{
        //         const response = await fetch('https://api.api-ninjas.com/v1/interestrate',
        //         {
        //             method: 'GET',
        //             headers: {'X-Api-Key': 'gI2lQc98U2Vdbg/xBbtcLw==TPUw5R1itxLATPfE'},                
        //         })

        //         if (!response.ok) {
        //             throw new Error(`HTTP error! status: ${response.status}`)
        //         }
        //         const data = await response.json()
        //         const interestRates = {
        //             centralBankRates: data.central_bank_rates,
        //             nonCentralBankRates: data.non_central_bank_rates,
        //             retrived: Date.now()
        //         }
        //         return interestRates 
        //     }

        //     const interestRates = getInterestRates()
        //     console.log(interestRates)
        //     state.data.push(interestRates)
        // }     
    }
})

export const { } = externalDataSlice.actions

export default externalDataSlice.reducer