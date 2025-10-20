import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    isHeroVisible: true, // Controls visibility of the hero section
  },
  reducers: {
    toggleHeroVisibility(state) {
      state.isHeroVisible = !state.isHeroVisible;
    },
    setHeroVisibility(state, action) {
      state.isHeroVisible = action.payload;
    },
  },
});

export const { toggleHeroVisibility, setHeroVisibility } = homeSlice.actions;
export default homeSlice.reducer;