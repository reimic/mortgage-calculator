import { createSlice, PayloadAction} from "@reduxjs/toolkit"

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

interface ScenariosDataBaseState {
    scenarios: Scenario[]
}

const initialState: ScenariosDataBaseState = {
    scenarios: []
}

export const scenariosDataBaseSlice = createSlice({
    name: "scenariosDataBase",
    initialState,
    reducers: {
        addScenarioToDataBase(state, action: PayloadAction<Scenario>){
            state.scenarios.push(action.payload)
        },
    }
})
export const { addScenarioToDataBase } = scenariosDataBaseSlice.actions
export default scenariosDataBaseSlice.reducer