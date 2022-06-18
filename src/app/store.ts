import { configureStore } from "@reduxjs/toolkit"
import scenariosListReducer from "../features/scenarioListSlice"
import scenariosReducer from "../features/scenarioActiveSlice"
import scenariosDataBaseReducer  from "../features/scenarioDataBaseSlice"

export const store = configureStore({
    reducer: {
        scenariosList: scenariosListReducer,
        scenariosActive: scenariosReducer,
        scenariosDataBase: scenariosDataBaseReducer,

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
