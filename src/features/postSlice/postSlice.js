import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("post/fetchPosts", async() => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
})
 const postSlice = createSlice({
    name: "post",
    initialState: {
        post:[]
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state,action) => {
            state.post = action.payload
        })
    }
 })
export default postSlice.reducer;