import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./postsApi";



const initialState ={
    
    isLoading :false,
    isError:false,
    error:null,
    posts:[]
}


export const fetchPosts = createAsyncThunk('post/fetchPost',async()=>{
    const posts = await fetchData()
    return posts
})


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message; 
        });
    },
});


export default postsSlice.reducer