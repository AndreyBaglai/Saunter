import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 'dhfhdhj',
    title: '1',
    description: {
      short: 'Short text',
      full: 'Some text 1eeeeeeeeeeeeeeeeeeeee e e e ee e ee eeeeeeeeeeeeeeeeeeeeeeeee e e e e e eeeeeeeeeeeeee',
    },
    selected: false,
    distance: 1.13,
    directions: [],
  },
];

const pathsSlice = createSlice({
  name: 'paths',
  initialState,
  reducers: {
    add(state, action) {
      state.unshift(action.payload);
    },
    remove(state, action) {
      return state.filter((path) => path.id !== action.payload);
    },
    select(state, action) {
      state.forEach((path) => {
        path.id === action.payload ? (path.selected = true) : (path.selected = false);
      });
    },
  },
});

export default pathsSlice.reducer;
