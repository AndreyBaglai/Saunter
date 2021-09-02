import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  path: null,
};

const currentPathSlice = createSlice({
  name: 'currentPath',
  initialState,
  reducers: {
    set(state, action) {
      state.path = action.payload;
    },
    remove(state, action) {
      state.path = action.payload;
    },
  },
});

export default currentPathSlice.reducer;
