import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  path: null,
};

const selectPathSlice = createSlice({
  name: 'selectPath',
  initialState,
  reducers: {
    selectPathSet(state, action) {
      state.path = action.payload;
    },
    selectPathRemove(state, action) {
      state.path = action.payload;
    },
  },
});

export default selectPathSlice.reducer;
