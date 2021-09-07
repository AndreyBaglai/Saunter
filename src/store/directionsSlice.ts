import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const directionsSlice = createSlice({
  name: 'directions',
  initialState,
  reducers: {
    add(state, action) {
      return [...action.payload];
    },
    
    clean(state, action) {
      return action.payload;
    },
  },
});

export default directionsSlice.reducer;
