import reducers from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

// npm install @reduxjs/toolkit react-redux
// Store is the entire state for your application.
const store = configureStore({
    // And then in here we'll set up our features.
    reducer: reducers,

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false
        })
});


// Will be used in index
export default store;