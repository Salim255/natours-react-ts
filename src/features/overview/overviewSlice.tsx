import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const url = "http://localhost:8000/api/v1/tours";

type ToursState = { 
    tours: any[]; // or your Tour type 
    isLoading: boolean; 
};

const initialState: ToursState = {
    tours: [],
    isLoading: true,
}


// It takes twos things, action type, and a callback function
// This function will return lifecycle options pending, filled, fails
// We access this lifecycle actions in the  extraReducers option on the create slice object
// And it should be called somewhere in the app
export const getTours = createAsyncThunk(
    'tours/getTours',
    async(_,thunkAPI) => {
       try {
         const resp = await fetch(url);
         const data =  await resp.json();
         console.log(data);
         return data;
       } catch (error) {
         return thunkAPI.rejectWithValue(error);
       } 
    }
);

const toursSlice = createSlice({
    name: 'tours',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTours.pending, (state, action) => {
                console.log("Pending: ", state, action.payload);
                state.isLoading = true;
            })
            .addCase(getTours.fulfilled, (state, action) => {
                console.log("Fulfilled: ", state, action.payload.data.data);
                state.tours = action.payload.data.data;
                state.isLoading = false;
            })
            .addCase(getTours.rejected, (state, action) => {
                console.log("Rejected: ", state, action.payload);
                state.isLoading = false;
            })
    }
});

console.log(toursSlice);
// This reducer gonna be the function that controls
// this state in this slice.
export default toursSlice.reducer;