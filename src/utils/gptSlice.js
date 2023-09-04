import { createSlice } from "@reduxjs/toolkit";

const gptSlice =createSlice({
    name:'gpt',
    initialState:{
        showGPTSearch: false,
        gptMovies:null,
        movieResults:null,
        movieNames:null,

    },
    reducers:{
        toggleGPTSearch:(state)=>{
            state.showGPTSearch= !state.showGPTSearch
        },
        addGPTMovieResult:(state,{payload})=>{
            const{movieNames,movieResults}=payload
        state.movieNames = movieNames;
        state.movieResults=movieResults;
        }
    }
})

export const {toggleGPTSearch,addGPTMovieResult}=gptSlice.actions

export default gptSlice.reducer