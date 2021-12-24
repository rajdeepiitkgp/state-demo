import { configureStore } from '@reduxjs/toolkit';
import { counter, account, customer } from '../features';

const store = configureStore({
  reducer: { counter, account, customer },
});

export default store;
