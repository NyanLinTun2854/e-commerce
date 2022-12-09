import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    itemsFiltered: [],
    status: null
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const res = await axios.get('https://fakestoreapi.com/products')
    console.log(res)
    return res?.data
})

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        cartFilter: (state, action) => {
                if(action.payload == 'all category') {
                    state.itemsFiltered = state.items
                }else {
                    const filtered = state.items.filter(item => item.category === action.payload)
                state.itemsFiltered = filtered
                }
                console.log("all")
        },
        statusChange: (state, action) => {
            const payloadIndex = state.itemsFiltered.findIndex(cartItem => cartItem.id === action.payload.id)
      state.itemsFiltered[payloadIndex].status = !state.itemsFiltered[payloadIndex].status
        }
    },
    extraReducers:  (builder) => {
        builder.addCase(fetchProducts.pending, state => {
            state.status = 'pending'
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
                    state.status = 'fulfilled'
                state.items = action.payload.map(item => ({...item, cartQuantity: 1, status: true}))
                state.itemsFiltered = action.payload.map(item => ({...item, cartQuantity: 1, status: true}))
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
                state.items = []
                state.itemsFiltered = []
                state.status = 'rejected'
        })
    }
})

export const {cartFilter, statusChange} = productsSlice.actions
export default productsSlice.reducer