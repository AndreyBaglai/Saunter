import { configureStore } from '@reduxjs/toolkit';

import pathsReducer from './pathsSlice';

export default configureStore({
  reducer: {
    paths: pathsReducer
  }
});