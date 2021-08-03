import { configureStore } from '@reduxjs/toolkit';
import appReducer from './AppSlice.js'

export const appStore = configureStore({
  reducer: {
    app: appReducer
  },
});

export default appStore;
