import { createSlice } from "@reduxjs/toolkit";
const initialState = [

    {
      id: 1,
      value: 0,
    },
    {
      id: 2,
      value: 0,
    },
  ];
const counterSlice =createSlice({
    name:'counters',
    initialState,
    reducers:{
        increment:(state,action)=>{
            const findIndex = state.findIndex((c)=>c.id === action.payload)
            state[findIndex].value++
        },
        decrement:(state,action)=>{
            const findIndex = state.findIndex((c)=>c.id === action.payload)
            state[findIndex].value--
        }
    }

})

export default counterSlice.reducer
export const {increment,decrement} = counterSlice.actions