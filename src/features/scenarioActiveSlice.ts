import { createSlice, PayloadAction} from "@reduxjs/toolkit"

interface Scenario {
    name: string,
    id: string,
    items?: number[],
}

interface ScenariosActiveState {
    scenarios: Scenario[]
}

const initialState: ScenariosActiveState = {
    scenarios: []
}

export const scenariosActiveSlice = createSlice({
    name: "scenarios",
    initialState,
    reducers: {
        addScenarioToActive(state, action: PayloadAction<Scenario>){
            state.scenarios.push(action.payload)
        },
        addItemToScenario(state, action: PayloadAction<{id: string, item: number}>){
            const {id, item} = action.payload
            const prevState = state.scenarios.find(scenario => scenario.id === id)
            if(prevState){
                if(prevState.items){
                    prevState.items?.push(item)
                } else {
                    prevState.items = []
                    prevState.items?.push(item)
                }
            }
        },
        changeScenarioName(state, action: PayloadAction<{id: string, newName: string}>){
            const {id, newName} = action.payload
            const prevState = state.scenarios.find(scenario => scenario.id === id)
            if(prevState){
                prevState.name = newName
            }
        }
    }
})
export const { addScenarioToActive, changeScenarioName, addItemToScenario } = scenariosActiveSlice.actions
export default scenariosActiveSlice.reducer
