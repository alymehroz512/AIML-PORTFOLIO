import { createSlice } from '@reduxjs/toolkit';

const navSlice = createSlice({
  name: 'nav',
  initialState: {
    isExpanded: false,
  },
  reducers: {
    setExpanded: (state, action) => {
      state.isExpanded = action.payload;
    },
  },
});

export const { setExpanded } = navSlice.actions;
export default navSlice.reducer;