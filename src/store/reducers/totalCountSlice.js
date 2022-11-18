import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

const totalCountSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        add: (state) => {
           state.value++
        }
    }
})

export default totalCountSlice.reducer
export const {add} = totalCountSlice.actions