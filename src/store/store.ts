import { configureStore } from '@reduxjs/toolkit';

import pathsReducer from './pathsSlice';
import formReducer from './formSlice';
import currentPathReducer from './currentPathSlice';

export default configureStore({
  reducer: {
    paths: pathsReducer,
    form: formReducer,
    currentPath: currentPathReducer
  }
});