import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "users",
    initialState: {value: {data: []}},
    reducers: {
        initialise: (state, action) => {
            state.value.data = action.payload
        }
    }
})

export const {initialise} = userSlice.actions

export default userSlice.reducer