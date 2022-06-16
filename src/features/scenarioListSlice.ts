import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ScenarioListState {
    name: string[]
}

const initialState: ScenarioListState = {
    name: []
}

export const scenarioListSlice = createSlice({
    name: "scenarios",
    initialState,
    reducers: {
        addScenarioToList: (state, action: PayloadAction<string>) => {
            state.name.push(action.payload)
        },
        removeScenarioFromList: (state, action: PayloadAction<number>) => {
            state.name.splice(action.payload, 1)
        }
    }
})

export const { addScenarioToList, removeScenarioFromList } = scenarioListSlice.actions

export default scenarioListSlice.reducer