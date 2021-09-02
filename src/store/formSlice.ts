import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    openForm(state, action) {
      return { ...state, isOpen: action.payload };
    },
    closeForm(state, action) {
      return { ...state, isOpen: action.payload };
    },
  },
});

export default formSlice.reducer;
