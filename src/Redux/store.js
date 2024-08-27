import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from '../Redux/Slices/AuthSlice';
import ticketSliceReducer from '../Redux/Slices/TicketSlice';

const store = configureStore({
    reducer:{
        auth:authSliceReducer,
        ticket:ticketSliceReducer
    },
    devTools:true
});

export default store;