import { configureStore } from '@reduxjs/toolkit'
import finalPrice from './reducers/finalPrice'
import firstPrice from './reducers/firstPrice'
import productCardSlice from './reducers/productCardSlice'
import totalCountSlice from './reducers/totalCountSlice'
import fetchData from './service/fetchData'


const store = configureStore({
  reducer: {
    [fetchData.reducerPath]: fetchData.reducer,
    productCard: productCardSlice,
    count: totalCountSlice,
    first: firstPrice,
    final: finalPrice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fetchData.middleware),
})

export default store