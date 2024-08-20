import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

import axiosInstance from "../../config/axiosInstant";
const initialState= {
     role:localStorage.getItem('role') || "",
     data: JSON.parse(localStorage.getItem('data')) || {},
     token : localStorage.getItem('token') || "",
     isLoggedIn: localStorage.getItem('isLoggedIn') || undefined 
};

export const login = createAsyncThunk('/auth/login', async (data) =>{
    try {
        const response = await axiosInstance.post('auth/signin', data);
        return response;
    } catch (error) {
        console.log("error", error);
    }
});

export const signup = createAsyncThunk('/auth/signup', async (data) =>{
    try {
        const response = await axiosInstance.post('auth/signup', data);
        return response;
    } catch (error) {
        console.log("error", error);
    }
});


const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        logout: (state)=>{
            localStorage.clear();
            state.isLoggedIn = false;
            state.role = "";
            state.data = undefined;    
            state.token = "";
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(login.fulfilled, (state, action)=>{
            if(!action.payload) return ;
            state.isLoggedIn = action.payload?.data?.token !== undefined;
            state.data = action.payload?.data?.userData;
            state.token = action.payload?.data?.token;
            state.role = action.payload?.data?.userData?.userType;
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('data', JSON.stringify(action.payload?.data?.userData));
            localStorage.setItem('token', action.payload?.data?.token);
            localStorage.setItem('role', action.payload?.data?.userData?.userType);
        });
    }

});

export const { logout } = authSlice.actions;
export default authSlice.reducer;