import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'user',
    initialState:null,
    reducers:{
        addUser:(state,{payload})=>{return payload},
        removeUser:()=>{return null}

    }
})

export const {addUser,removeUser}=userSlice.actions

export default userSlice.reducer;