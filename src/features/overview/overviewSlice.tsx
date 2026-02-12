import { createSlice } from "@reduxjs/toolkit";

type ToursState = { 
    tours: string[]; // or your Tour type 
    isLoading: boolean; 
};

const initialState: ToursState = {
    tours: [],
    isLoading: true,
}

// So its gonna be the function that controls
// this state in our slice.
const toursSlice = createSlice({
    name: 'tours',
    initialState,
    reducers: {}
});

export default toursSlice.reducer;