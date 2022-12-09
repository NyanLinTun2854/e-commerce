import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchWords: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addSearchWords: (state, action) => {
        state.searchWords = action.payload
    }
  },
})

export const { addSearchWords } = searchSlice.actions

export default searchSlice.reducer