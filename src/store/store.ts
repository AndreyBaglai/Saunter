import { configureStore } from '@reduxjs/toolkit';

import pathsReducer from './pathsSlice';
import formReducer from './formSlice';
import currentPathReducer from './currentPathSlice';
import directionsReducer from './directionsSlice';

export default configureStore({
  reducer: {
    paths: pathsReducer,
    form: formReducer,
    currentPath: currentPathReducer,
    directions: directionsReducer,
  },
});
