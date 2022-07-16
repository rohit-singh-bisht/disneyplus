import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name : '',
        email : '',
        photo: ''
    },
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.displayName;
            state.email = action.payload.email;
            state.photo = action.payload.photoUrl;
        },

        removeUserLoginDetails : (state) => {
            state.name = '';
            state.email = '';
            state.photo = '';
        }
    }
})

export const { setUserLoginDetails, removeUserLoginDetails } = userSlice.actions;
export default userSlice.reducer;