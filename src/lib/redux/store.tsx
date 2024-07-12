import { configureStore } from "@reduxjs/toolkit"
import states from "./slices/states"

export const makeStore = () => {
  return configureStore({
    reducer: { states: states },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
