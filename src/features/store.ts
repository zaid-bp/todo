import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
export const store = configureStore({
    reducer:{
        todo:todoSlice,
    }
})
export type RootState = ReturnType<typeof store.getState>