import { createSlice } from '@reduxjs/toolkit';
import { PathModel } from '../model/path-model';

const initialState = [
  {
    id: 'dhfhdhj',
    title: '1',
    description: {
      short: 'Short text',
      full: 'Some text 1eeeeeeeeeeeeeeeeeeeee e e e ee e ee eeeeeeeeeeeeeeeeeeeeeeeee e e e e e eeeeeeeeeeeeee',
    },
    selected: false,
    distance: '1.13',
    map: '',
  },
];

const pathsSlice = createSlice({
  name: 'paths',
  initialState,
  reducers: {
    pathAdded(state, action) {
      state.unshift(action.payload);
    },
    pathRemoved(state, action) {
      return state.filter((path: PathModel) => path.id !== action.payload);
    },
    pathSetSelected(state, action) {
      state.forEach((path: PathModel) => {
        path.id === action.payload ? (path.selected = true) : (path.selected = false);
      });
    },
  },
});

export default pathsSlice.reducer;
