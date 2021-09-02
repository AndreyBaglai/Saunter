import { configureStore } from '@reduxjs/toolkit';

import pathsReducer from './pathsSlice';
import formReducer from './formSlice';

export default configureStore({
  reducer: {
    paths: pathsReducer,
    form: formReducer,
  }
});