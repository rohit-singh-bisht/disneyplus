import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        data: []
    },
    reducers: {
        addToWishlist: (state, action) => {
            state.data.push(action.payload)
        },
        removeFromWishlist: (state, action) => {
            const movieId = action.payload;
            state.data = state.data.filter((item) => item.id !== movieId)
        }
    }
})


export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer