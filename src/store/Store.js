import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import LivingRoomSlice from "./slices/LivingRoomSlice";
import kitchenSlice from "./slices/KitchenSlice";
import undoableBathroomSlice from "./slices/BathroomSlice";



// Combine the undoable reducer for the kitchen slice
const rootReducer = combineReducers({
    BathroomParameter: undoableBathroomSlice,
    KitchenParameter: kitchenSlice,
    // Add other reducers as needed
});


// export const Store = configureStore({
//     reducer: {
//         LivingRoomParameter: LivingRoomSlice,
//         KitchenParameter: kitchenSlice,
//         BathroomParameter: bedroomSlice,

//     },
// })

// Create  Redux store
export const Store = configureStore({
    reducer: rootReducer,
});