import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
    array: [],
    value: 0
}

const finalPrice = createSlice({
    name: 'finalPrice',
    initialState,
    reducers: {
        finalAdd: (state, action) => {
           state.array = [action.payload.firstAmount]  
           state.array = [...state.array, (action.payload.card.price * action.payload.count)]
           let reduce = state.array.reduce((pre, cur) => {
            return pre - cur
           })
           state.value = reduce
        // console.log('halhal')
        },
    }
})

export default finalPrice.reducer
export const {finalAdd} = finalPrice.actions