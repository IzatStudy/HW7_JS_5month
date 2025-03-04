import { configureStore } from "@reduxjs/toolkit";
import questReducer from './questSlice'
import userReducer from './userSlice'


export const store = configureStore({
    reducer: {
        quest: questReducer,
        user: userReducer
    }
})