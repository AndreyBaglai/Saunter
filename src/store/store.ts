import { configureStore } from '@reduxjs/toolkit';

import pathsReducer from './pathsSlice';
import formReducer from './formSlice';
import selectPathReducer from './selectPath';

export default configureStore({
  reducer: {
    paths: pathsReducer,
    form: formReducer,
    selectPath: selectPathReducer
  }
});