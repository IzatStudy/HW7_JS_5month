import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isAuthenticated: false,
        username: "",
        password: "",
        points: 0
    },
    reducers: {
        register: (state, action) => {
           state.username = action.payload.username;
             state.password = action.payload.password;
            state.isAuthenticated = true;
            console.log(`Имя: ${state.username}`);
            console.log(`Пароль: ${state.password}`);
            console.log(`Регистрация: ${state.isAuthenticated}`)
        },
        login: (state, action) => {
            const { username, password } = action.payload;
            if (state.username === username && state.password === password) {
                state.isAuthenticated = true;
            }
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.username = "";
            state.password = "";
            state.points = 0;
        },
        addPoints: (state, action) => {
            state.points += action.payload;
        }
    }
});

export const { register, logout, addPoints } = userSlice.actions;

export default userSlice.reducer;
