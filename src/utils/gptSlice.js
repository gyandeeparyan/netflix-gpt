import { createSlice } from "@reduxjs/toolkit";

const gptSlice =createSlice({
    name:'gpt',
    initialState:{
        showGPTSearch: false,
        gptMovies:null,
        movieResults:null,
        movieNames:null,
        loading:false,

    },
    reducers:{
        toggleGPTSearch:(state)=>{
            state.showGPTSearch= !state.showGPTSearch
        },
        addGPTMovieResult:(state,{payload})=>{
            const{movieNames,movieResults}=payload
        state.movieNames = movieNames;
        state.movieResults=movieResults;
        },
        setLoading:(state,{payload})=>{
            state.loading=payload;
        }
    }
})

export const {toggleGPTSearch ,setLoading,addGPTMovieResult}=gptSlice.actions

export default gptSlice.reducer