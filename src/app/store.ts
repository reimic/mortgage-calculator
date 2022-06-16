import { configureStore } from "@reduxjs/toolkit"
import scenarioListReducer from "../features/scenarioListSlice"
import scenariosReducer from "../features/scenarioActiveSlice"


export const store = configureStore({
    reducer: {
        scenariosList: scenarioListReducer,
        scenariosActive: scenariosReducer,

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
