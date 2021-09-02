import { createSlice } from '@reduxjs/toolkit';
import { PathModel } from '../model/path-model';

const initialState: PathModel[] = [
  {
    id: 'dhfhdhj',
    title: '1',
    description: {
      short: 'Short text',
      full: 'Some text 1eeeeeeeeeeeeeeeeeeeee e e e ee e ee eeeeeeeeeeeeeeeeeeeeeeeee e e e e e eeeeeeeeeeeeee',
    },
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
    }
  },
});

export default pathsSlice.reducer;
