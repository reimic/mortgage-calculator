import { createSlice, PayloadAction} from "@reduxjs/toolkit"
import { nanoid } from 'nanoid'
import * as T from '../types/Scenario'

interface ScenariosDataBaseState {
    scenarios: T.Scenario[]
}

const initialState: ScenariosDataBaseState = {
    scenarios: []
}

export const scenariosDataBaseSlice = createSlice({
    name: "scenariosDataBase",
    initialState,
    reducers: {
        addNewScenarioToDataBase(state, action: PayloadAction<T.Name>){
            const scenario = {
                name: action.payload,
                id: {id: nanoid()},
                display: {
                    active: false,
                    activeOrder: 9999,
                    list: true,
                    listOrder: 9999,
                }
            }
            state.scenarios.push(scenario)
        },
        toggleScenarioActiveStatus(state, action: PayloadAction<T.Id>){
            const {id} = action.payload
            const scenario = state.scenarios.find(scenario => scenario.id.id === id)
            if(scenario){
                if(scenario.display.active){
                    scenario.display.active = false
                } else {
                    state.scenarios.map((scenario, index) => {
                        scenario.display.activeOrder = index+1
                    })
                    scenario.display.active = true
                    scenario.display.activeOrder = 0
                }
            }
        },
        toggleScenarioListStatus(state, action: PayloadAction<T.Id>){
            const id = action.payload
            const scenario = state.scenarios.find(scenario => scenario.id === id)
            if(scenario){
                scenario.display.list = !scenario.display.list
            }
        },
        changeScenarioName(state, action: PayloadAction<{name: T.Name, id: T.Id}>){
            const {name, id} = action.payload
            console.log({name, id})
            const scenario = state.scenarios.find(scenario => scenario.id.id === id.id)
            console.log(scenario)
            if(scenario){
                scenario.name.name = name.name
            }
        }
    }
})
export const { addNewScenarioToDataBase, toggleScenarioActiveStatus, toggleScenarioListStatus, changeScenarioName } = scenariosDataBaseSlice.actions
export default scenariosDataBaseSlice.reducer