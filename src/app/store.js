import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../helpers//userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
