import toursReducer from './../features/overview/overviewSlice';

const reducers = {
    // Name is any name you want 
    // but better to be name of the slice
    tours: toursReducer
};

// To be use in store config
export default reducers;