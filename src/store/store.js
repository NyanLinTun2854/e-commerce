import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './reducers/cartSlice'
import productsSlice from './reducers/productsSlice'
import searchSlice from './reducers/searchSlice'
import fetchData from './service/fetchData'

const store = configureStore({
  reducer: {
    [fetchData.reducerPath]: fetchData.reducer,
    cart: cartSlice,
    products: productsSlice,
    search: searchSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fetchData.middleware),
})

export default store