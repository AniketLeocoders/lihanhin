import { createSlice } from "@reduxjs/toolkit";
import { MetalColor, WallTiles } from "../../Constants";
import { Marbletexture } from "../../Components/Room/RoomModel";

// Define the initial state
const initialState = {
    ActiveObject: {},
    floorParameter: {
        CureentfloorTexture: Marbletexture[0],
    },
    wallParameter: {
        wallTexture: WallTiles[2]
    },
    table: {
        TopTexture: 'https://media.istockphoto.com/id/585296294/photo/red-marble-onyx-texture.jpg?s=612x612&w=0&k=20&c=T-hvuxgqAlT0OW8uf0XdPfMEoeU8th6-VBh-BiaztE8=',
        BodyTexture: 'https://images.unsplash.com/photo-1531824475211-72594993ce2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    cabibate: {
        topColor: "#963911",
        bodyColor: "#deb887",
        doorColor: "brown",
        handleColor: 'red'
    },
    fridgeParameter: {
        color: MetalColor[2]
    }
};


export const kitchenSlice = createSlice({
    name: 'kitchenSlice',
    initialState,
    reducers: {
        updateKitchenSlice: (state, action) => {
            return { ...state, ...action.payload };
        },
        resetKitchenSlice: (state) => {
            return initialState; // Reset the slice to its initial state
        },
    },
})

// Action creators are generated for each case reducer function
export const { updateKitchenSlice, resetKitchenSlice } = kitchenSlice.actions

export default kitchenSlice.reducer