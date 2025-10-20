import { configureStore } from '@reduxjs/toolkit';
import navReducer from './navSlice';
import homeReducer from './homeSlice';
import aboutReducer from './aboutSlice'; // ✅ added

export const store = configureStore({
  reducer: {
    nav: navReducer,
    home: homeReducer,
    about: aboutReducer, // ✅ added
  },
});
