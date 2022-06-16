import { createSlice, PayloadAction} from "@reduxjs/toolkit"

interface Scenario {
    name: string,
    id: number,
    items?: number[]
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
        addItemToItems(state, action: PayloadAction<number[]>){
            const scenarioId = action.payload[0]
            const payload = action.payload[1]

            if (typeof(state.scenarios[scenarioId].items) === "undefined"){
                state.scenarios[scenarioId] = {
                    ...state.scenarios[scenarioId],
                    items: [payload]
                }
            } else {
                state.scenarios[scenarioId].items?.push(payload)
            }
        }
    }
})
export const { addScenarioToActive, addItemToItems } = scenariosActiveSlice.actions
export default scenariosActiveSlice.reducer