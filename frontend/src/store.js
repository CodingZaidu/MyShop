import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice.js';  // Add .js extension
import cartSliceReducer from './slices/cartSlice.js';  // Add .js extension
import authReducer from './slices/authSlice.js';  // Add .js extension

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
