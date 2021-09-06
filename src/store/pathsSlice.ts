import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 'dhfhdhj',
    title: 'Test path',
    description: {
      short: 'Some short text',
      full: 'Some full text',
    },
    selected: false,
    distance: 35.134,
    directions: [{lat: () => 48.4530, lng: () => 35.9845}, {lat: () => 48.4430, lng: () => 34.9845}],
  },
];

const pathsSlice = createSlice({
  name: 'paths',
  initialState,
  reducers: {
    add(state, action) {
      return [action.payload, ...state];
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
