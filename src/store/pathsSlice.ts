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
    distance: 1.130,
    directions: [{lat: 44.0330, lng: 55.5445}, {lat: 33.0330, lng: 51.5045}],
  },
];

const pathsSlice = createSlice({
  name: 'paths',
  initialState,
  reducers: {
    add(state, action) {
      return state = [action.payload, ...state];
    },
    addDirections(state, action) {

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
