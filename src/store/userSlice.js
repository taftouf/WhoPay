import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {connectToWallet} from '../authentication/auth'


export const connect = createAsyncThunk('', async(_,thunkAPI)=>{
    try {
        const data = await connectToWallet();
        return data;
    } catch (error) {
        console.log(error);
    }
})
const userSlice = createSlice({
    name:'user',
    initialState: {address:null, status:false, isLoading:false},
    extraReducers:{
        [connect.pending]:(state, action)=>{
            console.log(action);
            state.isLoading=true;
        },
        [connect.fulfilled]:(state, action)=>{
            console.log(action.payload.status, action.payload.address);
            state.status= true;
            state.isLoading=false;
            state.address= action.payload.address;
            localStorage.setItem("address", action.payload.address);
            localStorage.setItem("message", action.payload.status);
        },
        [connect.rejected]:(state, action)=>{
            console.log(action);
            state.status= false;
            state.isLoading=false;
            state.address= null;
            localStorage.setItem("address", null);
            localStorage.setItem("message", action.payload.status)
        },
    }
});


export default userSlice.reducer;