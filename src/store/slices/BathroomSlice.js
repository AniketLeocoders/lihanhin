import { createSlice } from "@reduxjs/toolkit";
import { Bathroom_marble, Bathroom_wall_tiles, Wooden_texture } from "../../Constants";
import { Marbletexture } from "../../Components/Room/RoomModel";
import undoable from "redux-undo";

// Define the initial state
const initialState =
{
    ActiveObject: {},
    floorParameter: {
        CureentfloorTexture: Marbletexture[0],
    },
    wallParameter: {
        wallTexture: Bathroom_wall_tiles[0]
    },
    cabibate: {
        TopTexture: Bathroom_marble[1],
        BodyTexture: Bathroom_marble[1]
    },
    door: {
        texture: Wooden_texture[1]
    }
};


export const bedroomSlice = createSlice({
    name: 'bedroomSlice',
    initialState,
    reducers: {
        updateBathroomSlice: (state, action) => {
            return { ...state, ...action.payload };
        },
        resetBedroomSlice: (state) => {
            return initialState; // Reset the slice to its initial state
        },
    },
})

// Apply the undoable higher-order reducer to your kitchen slice
const undoableBathroomSlice = undoable(bedroomSlice.reducer);

// Action creators are generated for each case reducer function
export const { updateBathroomSlice, resetBedroomSlice } = bedroomSlice.actions

// export const {
//     undo: bathroomUndo,
//     redo: bathroomRedo,
// } = bedroomSlice.actions;

export default undoableBathroomSlice;
// export default bedroomSlice.reducer