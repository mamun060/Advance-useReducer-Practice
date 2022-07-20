import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
 

export const store = configureStore ({
    reducer: ,
    middleware: getDefaultMiddleware(),
    devTools: process.env.NODE_ENV ! == true
})