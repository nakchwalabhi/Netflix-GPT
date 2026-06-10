import { createSlice } from "@reduxjs/toolkit";

const GptSearchSlice = createSlice({
    name: 'gpt',
    initialState:{
        showGPTSearch: false,
    },
    reducers:{
        toggleShowGPTSearch: (state)=>{
            state.showGPTSearch = !state.showGPTSearch;
        }
    }
})
export const {toggleShowGPTSearch} = GptSearchSlice.actions;
export default GptSearchSlice.reducer;