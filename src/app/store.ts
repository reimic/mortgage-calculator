import { configureStore } from "@reduxjs/toolkit"
import externalDataReducer from "../features/externalDataSlice"
import scenariosReducer from "../features/scenarioActiveSlice"
import scenariosDataBaseReducer  from "../features/scenarioDataBaseSlice"

export const store = configureStore({
    reducer: {
        externalData: externalDataReducer,
        scenariosActive: scenariosReducer,
        scenariosDataBase: scenariosDataBaseReducer,

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
