import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: '1',
    body: 'Some text 1eeeeeeeeeeeeeeeeeeeee e e e ee e ee eeeeeeeeeeeeeeeeeeeeeeeee e e e e e eeeeeeeeeeeeee',
  },
  { title: '2', body: 'Some text 2' },
  { title: '3', body: 'Some text 1' },
  { title: '4', body: 'Some text 2' },
  { title: '5', body: 'Some text 1' },
  { title: '6', body: 'Some text 2' },
  { title: '7', body: 'Some text 1' },
  { title: '8', body: 'Some text 2' },
  { title: '9', body: 'Some text 1' },
  { title: '10', body: 'Some text 2' },
  { title: '11', body: 'Some text 1' },
  { title: '12', body: 'Some text 2' },
  { title: '13', body: 'Some text 1' },
  { title: '14', body: 'Some text 2' },
];

const pathsSlice = createSlice({
  name: 'paths',
  initialState,
  reducers: {}
});

export default pathsSlice.reducer;