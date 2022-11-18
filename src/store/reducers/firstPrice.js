import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    array: [],
    value: 0
}

const firstPrice = createSlice({
    name: 'firstPrice',
    initialState,
    reducers: {
        addCart: (state, action) => {
           state.array = [...state.array, (action.payload.price * 1)]
           let reduce = state.array.reduce((pre, cur) => {
            return pre + cur
           })
           state.value = reduce
        },
        amount: (state, action) => {
            state.array = [...state.array, (action.payload.price * 1)]
           let reduce = state.array.reduce((pre, cur) => {
            return pre + cur
           })
           state.value = reduce
        },
        addFinal: (state, action) => {
            state.value = state.value - (action.payload.card.price * action.payload.count)
        }
    },
    extraReducers: {
        ['finalPrice/finalAdd']: (state, action) => {
            state.value = state.value - (action.payload.card.price * action.payload.count)
        }
    }
})

export default firstPrice.reducer
export const {addCart, amount, addFinal} = firstPrice.actions