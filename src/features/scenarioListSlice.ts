import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Display {
    active: boolean,
    activeOrder: number,
    list: boolean,
    listOrder: number,
}

interface Scenario {
    name: string,
    id: string,
    display: Display,
    items?: number[],
}

interface ScenariosListState {
    list: Scenario[]
}

const initialState: ScenariosListState = {
    list: []
}

export const scenariosListSlice = createSlice({
    name: "scenariosList",
    initialState,
    reducers: {
        addScenarioToList: (state, action: PayloadAction<Scenario>) => {
            state.list.push(action.payload)
        }
    }
})

export const { addScenarioToList } = scenariosListSlice.actions

export default scenariosListSlice.reducer