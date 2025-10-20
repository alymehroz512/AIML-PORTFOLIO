import { configureStore } from '@reduxjs/toolkit';
import navReducer from './navSlice';
import homeReducer from './homeSlice';

export const store = configureStore({
  reducer: {
    nav: navReducer,
    home: homeReducer,
  },
});