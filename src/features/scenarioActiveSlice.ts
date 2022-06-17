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
        addItemToItems(state, action: PayloadAction<{id: number, item: number}>){
            const {id, item} = action.payload
            if(state.scenarios[id]){
                if(state.scenarios[id].items){
                    state.scenarios[id].items?.push(item)
                } else {
                    state.scenarios[id].items = []
                    state.scenarios[id].items?.push(item)
                }
            }
        },
        changeScenarioName(state, action: PayloadAction<{id: number, newName: string}>){
            if(state.scenarios[action.payload.id]){
                state.scenarios[action.payload.id].name = action.payload.newName
            }
        }
        }
})
export const { addScenarioToActive, changeScenarioName, addItemToItems } = scenariosActiveSlice.actions
export default scenariosActiveSlice.reducer
