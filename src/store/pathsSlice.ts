import { createSlice } from '@reduxjs/toolkit';
import { PathModel } from '../model/path-model';

const initialState = [
  {
    id: 'dhfhdhj',
    title: 'Test path',
    description: {
      short: 'Some short text',
      full: 'Some full text',
    },
    favorite: false,
    selected: false,
    distance: 35.134,
    directions: [
      { lat: () => 48.453, lng: () => 35.9845 },
      { lat: () => 48.443, lng: () => 34.9845 },
    ],
  },
];

const pathsSlice = createSlice({
  name: 'paths',
  initialState,
  reducers: {
    add(state, action) {
      return [...state, action.payload];
    },

    remove(state, action) {
      return state.filter((path) => path.id !== action.payload);
    },

    setFavorite(state, action) {
      let path = state.find((item) => item.id === action.payload) as PathModel;
      const newState = state.filter((path) => path.id !== action.payload);

      path = { ...path, favorite: true };
      return [path, ...newState];
    },

    select(state, action) {
      state.forEach((path) => {
        path.id === action.payload ? (path.selected = true) : (path.selected = false);
      });
    },
  },
});

export default pathsSlice.reducer;
