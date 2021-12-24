import { configureStore } from '@reduxjs/toolkit';
import { counter, account, customer } from '../features';

const store = configureStore({
  reducer: { counter, account, customer },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
