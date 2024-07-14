import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface SetValuePayload {
  key: string
  value: string | number
}

interface initialStateTypes {
  counter: number
  [key: string]: any
}

const initialState: initialStateTypes = {
  counter: 0,
}

const slice = createSlice({
  name: "states",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<SetValuePayload>) => {
      const { key, value } = action.payload
      state[key] += value
    },
  },
})

export const { setValue } = slice.actions
export default slice.reducer
