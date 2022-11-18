import { createSlice, prepareAutoBatched } from "@reduxjs/toolkit";

const initialState = []

const productCardSlice = createSlice({
    name: 'prodcutCard',
    initialState,
    reducers: {
        click: (state, action) => {
        //    const final = state.filter(i => i.id != action.payload.id)
        //    console.log(state.filter(i => i.id != action.payload.id))
        //    console.log('hlahla')
           if (true) {
            return state = [...state, action.payload.data]
           }
        },
        drop: (state, action) => {
            return state = state.filter(card => card.id !== action.payload.card.id)
        }
        }
})

export default productCardSlice.reducer
export const {click, drop} = productCardSlice.actions