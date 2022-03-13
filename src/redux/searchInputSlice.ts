import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "redux/store"

// Define a type for the slice state
interface SearchInputState {
  searchInput: string
}

const initialState: SearchInputState = {
  searchInput: "",
}

export const searchInputSlice = createSlice({
  name: "searchInputReducer",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    searchInputChange: (state, action: PayloadAction<string>) => {
      state.searchInput = action.payload
    },
  },
})

export const { searchInputChange } = searchInputSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectSearchInput = (state: RootState) => state.searchInput

export default searchInputSlice.reducer
