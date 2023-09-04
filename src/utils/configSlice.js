import  { createSlice } from '@reduxjs/toolkit';

const configSlice=createSlice({

    name:"config",
    initialState:{
lang:"en",
    },
    reducers:{
 changeLanguage :(state,{payload})=>{
    state.lang = payload
 }
    },
})

export const {changeLanguage}=configSlice.actions

export default configSlice.reducer