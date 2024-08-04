import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    searchResults: [],
    selectCategory: "New",
    mobileMenu: false,
}

export const hookSlice = createSlice({
    name:'hooks',
    initialState,
    reducers: {
        toggleLoading: (state) => {
            state.loading = !state.loading
        },
        toggleMobilMenu: (state) => {
            state.mobileMenu = !state.mobileMenu
        },
        addSearchResult: (state, action) => {
            console.log(action.payload)
            state.searchResults = action.payload
        },
        addSelectedCategory: (state, action) => {
            console.log(action.payload)
            state.selectCategory = action.payload
        }
    }
})

export const {toggleLoading, toggleMobilMenu, addSearchResult, addSelectedCategory} = hookSlice.actions

export default hookSlice.reducer