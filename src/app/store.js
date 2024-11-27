import { configureStore } from "@reduxjs/toolkit";
import countersReduce from '../features/counters/counterSlice';
import postsReduce from '../features/posts/postsSlice.js';


const  store = configureStore({
    reducer: {
        counters:countersReduce,
        posts:postsReduce,
    }
})

export default store