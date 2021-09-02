import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    open(state, action) {
      return { ...state, isOpen: action.payload };
    },
    close(state, action) {
      return { ...state, isOpen: action.payload };
    },
  },
});

export default formSlice.reducer;
