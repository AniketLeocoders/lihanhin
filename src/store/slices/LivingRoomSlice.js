import { createSlice } from "@reduxjs/toolkit";


export const LivingRoomSlice = createSlice({
    name: 'LivingRoomSlice',
    initialState: {
        ActiveObject: {},
        floorParameter: {
            CureentfloorTexture: "https://media.istockphoto.com/id/1221955356/photo/geometric-pattern-wooden-floor-and-wall-mosaic-decor-tile.jpg?s=612x612&w=0&k=20&c=EVcgTm4O4Jf7x5XnYQQTFZKxd7ddunjfPUQd0tzzpo0=",
        },
        wallParameter: {
            color: 'red'
        },
        secondWallParameter: {
            color: 'red'
        }
    },
    reducers: {
        updateLivingRoomSlice: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
})

// Action creators are generated for each case reducer function
export const { updateLivingRoomSlice } = LivingRoomSlice.actions

export default LivingRoomSlice.reducer