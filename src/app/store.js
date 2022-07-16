import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice';
import wishlistReducer from '../features/wishlist/wishlistSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        wishlist: wishlistReducer
    }
})