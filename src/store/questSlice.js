import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuest = createAsyncThunk(
    "quest/fetchQuest",
    async () => {
        const response = await axios.get("https://bored.api.lewagon.com/api/activity/")
        return response.data
    }
)
const questSlice = createSlice({
    name: "quest",
    initialState: {
        quest: null,
        status: "idle"
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuest.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchQuest.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.quest = action.payload;
            })
            .addCase(fetchQuest.rejected, (state) => {
                state.status = "failed"
            })
    }
})

export default questSlice.reducer
