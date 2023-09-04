import { createSlice } from "@reduxjs/toolkit";

const gptSlice =createSlice({
    name:'gpt',
    initialState:{
        showGPTSearch: false,
    },
    reducers:{
        toggleGPTSearch:(state)=>{
            state.showGPTSearch= !state.showGPTSearch
        },
    }
})

export const {toggleGPTSearch}=gptSlice.actions

export default gptSlice.reducer