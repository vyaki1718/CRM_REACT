import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../config/axiosInstant";

const initialState = {
    ticketList :[]
};

export const  getAllTicketsForUser = createAsyncThunk('tickets/getAllTickesForUser', async()=>{
    try {
        const response = axiosInstance.get("getMyAssignedTickets", {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        });
        toast.promise(response, {
            success:"Successfully loaded all the tickets",
            loading: 'Loading... your tickets',
            error: "something went wrong"
        });
       return await response;
    } catch (error) {
        console.log(error); 
    }
});
const ticketSlice = createSlice({
    name:"tickets",
    initialState,
    reducers:{

    },
    extraReducers:(buider)=>{
        buider.addCase(getAllTicketsForUser.fulfilled, (state, action)=>{
            if(!action?.payload?.data) return ;
            state.ticketList = action?.payload?.data?.result;
        });
    }

});

export default ticketSlice.reducer;