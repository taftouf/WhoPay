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
    initialState: {address:null, status:"", isLoading:false, provider: null},
    reducers: {
        changeAddress: (state, action) => {
            state.address = action.payload
        },
        initStatus: (state)=>
        {
            state.status = ""
        },
        getProvider: (state, action)=>{
            console.log("getProvider")
        }
    },
    extraReducers:{
        [connect.pending]:(state, action)=>{
            console.log(action);
            state.isLoading=true;
        },
        [connect.fulfilled]:(state, action)=>{
            console.log(action.payload.status, action.payload.address);
            state.status= action.payload.status;
            state.isLoading=false;
            state.address= action.payload.address;
        },
        [connect.rejected]:(state, action)=>{
            console.log(action);
            state.status= action.payload.status;
            state.isLoading=false;
            state.address= null;
        },
    }
});

export const {pending, fulfilled, rejected, changeAddress, initStatus} = userSlice.actions;
export default userSlice.reducer;
