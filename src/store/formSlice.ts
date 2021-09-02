import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    formOpen(state, action) {
      return { ...state, isOpen: action.payload };
    },
    formClose(state, action) {
      return { ...state, isOpen: action.payload };
    },
  },
});

export default formSlice.reducer;
