import { createSlice } from '@reduxjs/toolkit'
import { AiTwotoneBank } from 'react-icons/ai'
import {toast} from 'react-toastify'

const initialState = {
  cartItems: [],
  cartPriceTotal: 0,
  cartQuantityTotal: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartAdd: (state, action) => {
        state.cartItems = [...state.cartItems, action.payload]
      // const payloadIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id)
      // state.cartItems[payloadIndex].status = !state.cartItems[payloadIndex].status
        toast.success(`increased ${action.payload.title.slice(0, 16)} cart quantity`, {
          position: "bottom-left"
      })
    },
    cartRemove: (state, action) => {
      // const payloadIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id)
      // state.cartItems[payloadIndex].status = !state.cartItems[payloadIndex].status
      const newCartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      state.cartItems = newCartItems
      toast.error(`removed ${action.payload.title.slice(0, 16)} from cart`, {
        position: 'bottom-left'
      })
    },
    addQuantity: (state, action) => {
      const payloadIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id)
      state.cartItems[payloadIndex].cartQuantity += 1
      toast.info(`increased ${action.payload.title.slice(0, 16)} from cart`, {
        position: 'bottom-left'
      })
    },
    decreaseQuantity: (state, action) => {
      const payloadIndex = state.cartItems.findIndex(cartItem => cartItem.id === action.payload.id)
      if(state.cartItems[payloadIndex].cartQuantity > 1) {
        state.cartItems[payloadIndex].cartQuantity -= 1
        toast.error(`decreased ${action.payload.title.slice(0, 16)} from cart`, {
          position: 'bottom-left'
        })
      }
    },
    total: (state, action) => {
      const {totalPrice, totalQuantity} = state.cartItems.reduce((total, cartItem) => {
        const {price, cartQuantity} = cartItem
        const cartTotalPrice = price * cartQuantity
        total.totalPrice += cartTotalPrice
        total.totalQuantity += cartQuantity
        return total
      }, {totalPrice: 0, totalQuantity: 0})
      state.cartQuantityTotal = totalQuantity
      state.cartPriceTotal = totalPrice
    }
  },
})

export const { cartAdd, cartRemove, addQuantity, decreaseQuantity, total } = cartSlice.actions
export default cartSlice.reducer